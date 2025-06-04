const { contextBridge, ipcRenderer } = require('electron');
const log = require('electron-log');
const path = require('path');

// Configuration des logs pour le processus de rendu
if (log.transports && log.transports.file) {
    log.transports.file.resolvePathFn = () => path.join(__dirname, '../logs/renderer.log');
    log.transports.file.level = 'info';
    log.transports.file.maxSize = 10 * 1024 * 1024; // 10MB
    log.transports.file.format = '[{y}-{m}-{d} {h}:{i}:{s}] [{level}] {text}';
}

// Log au démarrage du processus de rendu
log.info('Démarrage du processus de rendu');

contextBridge.exposeInMainWorld('electron', {
    minimize: () => {
        log.info('Minimisation de la fenêtre demandée');
        return ipcRenderer.invoke('window-minimize');
    },
    maximize: () => {
        log.info('Maximisation de la fenêtre demandée');
        return ipcRenderer.invoke('window-maximize');
    },
    close: () => {
        log.info('Fermeture de la fenêtre demandée');
        return ipcRenderer.invoke('window-close');
    },
    setTheme: (theme) => {
        log.info('Changement de thème demandé:', theme);
        return ipcRenderer.invoke('set-theme', theme);
    },
    onThemeChanged: (callback) => {
        log.info('Écouteur de changement de thème ajouté');
        ipcRenderer.on('theme-changed', (event, theme) => {
            log.info('Thème changé:', theme);
            callback(theme);
        });
    },
    getSystemTheme: () => {
        log.info('Récupération du thème système demandée');
        return ipcRenderer.invoke('get-system-theme');
    },
    showContextMenu: (x, y, productId) => {
        log.info('Affichage du menu contextuel demandé pour le produit:', productId);
        ipcRenderer.send('show-context-menu', { x, y, productId });
    },
    onContextMenuAction: (callback) => {
        log.info('Écouteur d\'action du menu contextuel ajouté');
        ipcRenderer.on('context-menu-action', (event, action) => {
            log.info('Action du menu contextuel reçue:', action);
            callback(action);
        });
    }
});
