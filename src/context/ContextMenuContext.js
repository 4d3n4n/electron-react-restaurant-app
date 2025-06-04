import React, { createContext, useState, useContext } from 'react';

const ContextMenuContext = createContext();

export function ContextMenuProvider({ children }) {
    const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0, productId: null });

    const showContextMenu = (x, y, productId) => {
        setContextMenu({ visible: true, x, y, productId });
    };

    const hideContextMenu = () => {
        setContextMenu({ visible: false, x: 0, y: 0, productId: null });
    };

    return (
        <ContextMenuContext.Provider value={{ contextMenu, showContextMenu, hideContextMenu }}>
            {children}
        </ContextMenuContext.Provider>
    );
}

export function useContextMenu() {
    return useContext(ContextMenuContext);
}
