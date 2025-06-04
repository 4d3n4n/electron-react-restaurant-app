import { app, BrowserWindow, ipcMain, Menu, Tray, nativeTheme } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import isDev from 'electron-is-dev';
import log from 'electron-log';

// Configuration pour __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration des logs
log.transports.file.resolvePathFn = () => path.join(__dirname, '../logs/main.log');
log.transports.file.level = 'info';
log.transports.file.maxSize = 10 * 1024 * 1024; // 10MB
log.transports.file.format = '[{y}-{m}-{d} {h}:{i}:{s}] [{level}] {text}';

// Log au démarrage de l'application
log.info('Démarrage de l\'application');

let mainWindow;
let tray = null;

function createWindow() {
    log.info('Création de la fenêtre principale');
    mainWindow = new BrowserWindow({
        width: 1400,
        minWidth: 800,
        minHeight: 1050,
        maxHeight: 1050,
        icon: path.join(__dirname, '../assets/icons/icon.icns'),
        titleBarStyle: 'hiddenInset',
        frame: false,
        transparent: true,
        vibrancy: 'sidebar',
        visualEffectState: 'active',
        backgroundColor: '#00000000',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.mjs')
        }
    });

    mainWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );

    if (isDev) {
        mainWindow.webContents.openDevTools();
        log.info('Mode développement activé');
    }

    mainWindow.on('closed', () => {
        log.info('Fermeture de la fenêtre principale');
        mainWindow = null;
    });
}

function createTray() {
    log.info("Création du tray...");

    const trayIconPath = path.join(__dirname, '../assets/icons/tray-icon.png');
    log.info("Chemin de l'icône tray:", trayIconPath);
    tray = new Tray(trayIconPath);

    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Afficher',
            click: () => {
                mainWindow.show();
                log.info('Affichage de la fenêtre depuis le tray');
            }
        },
        {
            label: 'Quitter',
            click: () => {
                log.info('Quitter l\'application depuis le tray');
                app.quit();
            }
        }
    ]);

    tray.setToolTip('Restaurant Menu');
    tray.setContextMenu(contextMenu);

    tray.on('click', () => {
        if (mainWindow.isVisible()) {
            mainWindow.hide();
            log.info('Masquage de la fenêtre depuis le tray');
        } else {
            mainWindow.show();
            log.info('Affichage de la fenêtre depuis le tray');
        }
    });
}

app.whenReady().then(() => {
    log.info('Application prête');
    createWindow();
    createTray();
});

app.on('window-all-closed', () => {
    log.info('Toutes les fenêtres sont fermées');
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    log.info('Activation de l\'application');
    if (mainWindow === null) {
        createWindow();
    }
});

// Gestion des erreurs non capturées
process.on('uncaughtException', (error) => {
    log.error('Erreur non capturée:', error);
});

process.on('unhandledRejection', (error) => {
    log.error('Promesse rejetée non gérée:', error);
});

// IPC Handlers
ipcMain.handle('window-minimize', () => {
    log.info('Minimisation de la fenêtre');
    mainWindow.minimize();
});

ipcMain.handle('window-maximize', () => {
    if (mainWindow.isMaximized()) {
        log.info('Restauration de la fenêtre');
        mainWindow.unmaximize();
    } else {
        log.info('Maximisation de la fenêtre');
        mainWindow.maximize();
    }
});

ipcMain.handle('window-close', () => {
    log.info('Fermeture de la fenêtre');
    mainWindow.close();
});

ipcMain.handle('get-system-theme', () => {
    const theme = nativeTheme.shouldUseDarkColors ? 'dark' : 'light';
    log.info('Thème système récupéré:', theme);
    return theme;
});

ipcMain.handle('set-theme', (event, theme) => {
    log.info('Changement de thème:', theme);
    if (mainWindow) {
        nativeTheme.themeSource = theme;
        mainWindow.webContents.invalidate();
        mainWindow.webContents.send('theme-changed', theme);
    }
});

// menu contextuel
ipcMain.on('show-context-menu', (event, { x, y, productId }) => {
    log.info('Affichage du menu contextuel pour le produit:', productId);
    const template = [
        {
            label: 'Copier',
            click: () => {
                log.info('Action: Copier le produit', productId);
                event.sender.send('context-menu-action', { action: 'copy', productId });
            }
        },
        {
            label: 'Modifier',
            click: () => {
                log.info('Action: Modifier le produit', productId);
                event.sender.send('context-menu-action', { action: 'edit', productId });
            }
        },
        {
            label: 'Supprimer',
            click: () => {
                log.info('Action: Supprimer le produit', productId);
                event.sender.send('context-menu-action', { action: 'delete', productId });
            }
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    menu.popup(mainWindow, { x, y });
});
