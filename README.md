# 🍣 Restaurant Menu Desktop Application

![React](https://img.shields.io/badge/Built%20with-React-61DAFB.svg?logo=react&logoColor=white)
![Electron](https://img.shields.io/badge/Desktop-Electron-47848F.svg?logo=electron&logoColor=white)
![Firebase](https://img.shields.io/badge/Backend-Firebase-FFCA28.svg?logo=firebase&logoColor=white)
![Multilingual](https://img.shields.io/badge/Multilingual-FR%20%7C%20EN%20%7C%20JA-4caf50)
![Dark Mode](https://img.shields.io/badge/Dark%20Mode-Enabled-000000)

## 🎯 Objectif

Cette application de bureau Electron permet aux restaurateurs de gérer leur menu en temps réel, avec une interface utilisateur moderne et intuitive. Elle offre une solution complète pour :
- Gérer le menu sans intervention technique
- Synchroniser automatiquement les modifications avec le site vitrine
- Offrir une expérience utilisateur native sur desktop
- Maintenir une cohérence visuelle et fonctionnelle entre le site et l'application

## 🚀 Fonctionnalités

### Interface Utilisateur
- Design moderne avec effet de verre (glassmorphism)
- Thème clair/sombre synchronisé avec le système d'exploitation
- Interface responsive et intuitive
- Menu contextuel natif pour les actions rapides
- Icône dans la barre des tâches (System Tray)

### Gestion du Menu
- Ajout/Modification/Suppression de produits
- Gestion des catégories
- Support multilingue (FR/EN/JP)
- Gestion des ingrédients et allergènes
- Prix en temps réel
- Images des plats

### Fonctionnalités Administrateur
- Authentification sécurisée via Firebase
- Interface d'administration intuitive
- Copier-coller rapide des informations des plats
- Notifications système
- Gestion des annonces

### Pages Disponibles
- 🏠 **Home** : Hero Banner, sections marketing, CTA, adresse avec carte interactive
- 🍽 **Menu** : Liste complète des plats avec descriptions, prix, ingrédients et allergènes
- 📢 **Annonces** : Offres d'emploi, recrutements, événements spéciaux
- ✉️ **Contact** : Carte interactive, formulaire de contact, itinéraire Google Maps

## 💻 Technologies Utilisées

### Frontend
- React.js
- Electron
- CSS3 (variables CSS personnalisées)
- Font Awesome

### Backend
- Firebase Authentication
- Firebase Firestore

### API Web
- Clipboard API (copier-coller)
- Navigator Language API (détection de la langue)
- Notifications API

### API Electron
- Menu Contextuel
- System Tray
- Native Theme
- Window Management

## 🔒 Sécurité
- Authentification Firebase
- Règles de sécurité Firestore
- Stockage sécurisé des données
- Protection contre les injections

## 📝 Système de Logs
L'application utilise electron-log pour la gestion des logs :
- Logs du processus principal : `logs/main.log`
- Logs du processus de rendu : `logs/renderer.log`
- Rotation automatique des logs (max 10MB)
- Format : `[YYYY-MM-DD HH:mm:ss] [LEVEL] Message`

## 🛠 Installation

1. Cloner le repository
```bash
git clone [URL_DU_REPO]
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer en mode développement
```bash
npm run electron-dev
```

4. Créer le package d'installation
```bash
npm run electron-pack
```

## 📦 Structure du Projet
```
├── public/
│   ├── electron.js
│   └── preload.js
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   └── styles/
├── assets/
│   └── icons/
├── logs/
└── package.json
```

## 🔄 Workflow de Développement
1. Développement local avec `npm run electron-dev`
2. Tests des fonctionnalités
3. Build avec `npm run electron-pack`
4. Distribution de l'application

## 📱 Support
- macOS
- Windows (en développement)
- Linux (en développement)

## 👨‍💻 Auteur
Développé par **Adenan Khachnane**

## 📄 Licence
Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
