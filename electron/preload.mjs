import { contextBridge, ipcRenderer } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import log from 'electron-log';

// Configuration pour __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration des logs
log.transports.file.resolvePathFn = () => path.join(__dirname, '../logs/renderer.log');
log.transports.file.level = 'info';
log.transports.file.maxSize = 10 * 1024 * 1024; // 10MB
log.transports.file.format = '[{y}-{m}-{d} {h}:{i}:{s}] [{level}] {text}';

// Expose les APIs au processus de rendu
contextBridge.exposeInMainWorld('electron', {
    // Window controls
    minimizeWindow: () => ipcRenderer.invoke('window-minimize'),
    maximizeWindow: () => ipcRenderer.invoke('window-maximize'),
    closeWindow: () => ipcRenderer.invoke('window-close'),

    // Context menu
    showContextMenu: (x, y, productId) => {
        log.info('Affichage du menu contextuel pour le produit:', productId);
        ipcRenderer.send('show-context-menu', { x, y, productId });
    },

    // Context menu actions
    onContextMenuAction: (callback) => {
        ipcRenderer.on('context-menu-action', (_, data) => callback(data));
    },

    // Theme
    getSystemTheme: () => ipcRenderer.invoke('get-system-theme'),
    onThemeChange: (callback) => {
        ipcRenderer.on('theme-changed', (_, theme) => callback(theme));
    },

    // Logging
    log: {
        info: (message) => log.info(message),
        error: (message) => log.error(message),
        warn: (message) => log.warn(message),
        debug: (message) => log.debug(message)
    }
});
