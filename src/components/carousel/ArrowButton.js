import React, { useState, useEffect } from 'react';

export default function ArrowButton({ icon, direction, onClick }) {
    return (
        <button
            className={direction === "next" ? "rightArrowButton" : "leftArrowButton"} onClick={onClick}>
            <img
                className={direction === "next" ? "rightArrow" : "leftArrow"}
                src={icon}
                alt={direction === "next" ? "Flèche droite" : "Flèche gauche"}
            />
        </button>
    );
}
