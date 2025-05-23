# 🚀 Portfolio Personnel

Un portfolio web moderne et responsive construit avec React.js, mettant en valeur mes compétences, projets et expériences professionnelles.


## ✨ Fonctionnalités

- **Design Responsive** - Compatible avec tous les appareils (mobile, tablette, desktop)
- **Navigation Fluide** - Scroll smoothe entre les sections avec react-scroll
- **Interface Moderne** - Design épuré et professionnel
- **Sections Complètes** :
  - 🏠 Page d'accueil avec hero section
  - 👨‍💻 À propos de moi
  - 🛠️ Mes compétences techniques
  - 💼 Portfolio de projets
  - 📞 Formulaire de contact
  - 🍪 Gestion des cookies (RGPD compliant)

## 🛠️ Technologies Utilisées

- **Frontend** : React.js 18+
- **Routing** : React Router DOM
- **Scroll** : React Scroll (navigation fluide)
- **Styling** : CSS3 avec modules
- **Build Tool** : Create React App
- **Package Manager** : npm

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version 14.0 ou supérieure)
- [npm](https://www.npmjs.com/) (généralement inclus avec Node.js)

## 🚀 Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/votre-username/portfolio_personaliser.git
   cd portfolio_personaliser
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm start
   ```

4. **Ouvrir l'application**
   
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du Projet

```
portfolio_personaliser/
├── public/
│   ├── img/                    # Images et assets
│   │   ├── About_Hero.png
│   │   └── hero_logo.png
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── Pages/
│   │   ├── Home/
│   │   │   ├── AboutMe.jsx     # Section À propos
│   │   │   ├── ContactMe.jsx   # Formulaire de contact
│   │   │   ├── CookiesSettings.jsx # Gestion cookies
│   │   │   ├── Footer.jsx      # Pied de page
│   │   │   ├── HeroSection.jsx # Section héro
│   │   │   ├── MyPortfolio.jsx # Portfolio projets
│   │   │   ├── MySkills.jsx    # Compétences
│   │   │   └── Navbar.jsx      # Navigation
│   │   └── Homescreen/
│   │       └── index.jsx       # Page d'accueil principale
│   ├── data/
│   │   └── index.json          # Données du portfolio
│   ├── App.js                  # Composant principal
│   ├── App.css                 # Styles globaux
│   └── index.js                # Point d'entrée
├── package.json
└── README.md
```

## 🎯 Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm start`
Lance l'application en mode développement.
Ouvrez [http://localhost:3000](http://localhost:3000) pour la voir dans le navigateur.

### `npm test`
Lance les tests en mode interactif.

### `npm run build`
Construit l'application pour la production dans le dossier `build`.
Optimise React pour les meilleures performances.

### `npm run eject`
**Note : cette opération est irréversible !**
Si vous n'êtes pas satisfait de l'outil de build et des choix de configuration.

## 🔧 Personnalisation

### Modifier le contenu

1. **Informations personnelles** : Éditez `src/data/index.json`
2. **Images** : Remplacez les images dans `public/img/`
3. **Styles** : Modifiez les fichiers CSS dans chaque composant
4. **Sections** : Personnalisez les composants dans `src/Pages/Home/`

### Ajouter de nouvelles sections

1. Créez un nouveau composant dans `src/Pages/Home/`
2. Importez et ajoutez-le dans `src/Pages/Homescreen/index.jsx`
3. Ajoutez la navigation dans `src/Pages/Home/Navbar.jsx`

## 🌐 Déploiement

### Netlify (Recommandé)

1. Construisez le projet :
   ```bash
   npm run build
   ```

2. Déployez le dossier `build` sur [Netlify](https://www.netlify.com/)

### Vercel

1. Installez Vercel CLI :
   ```bash
   npm i -g vercel
   ```

2. Déployez :
   ```bash
   vercel --prod
   ```

### GitHub Pages

1. Installez gh-pages :
   ```bash
   npm install --save-dev gh-pages
   ```

2. Ajoutez dans `package.json` :
   ```json
   {
     "homepage": "https://votre-username.github.io/portfolio_personaliser",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. Déployez :
   ```bash
   npm run deploy
   ```

## 🎨 Fonctionnalités Avancées

### Navigation Fluide
```javascript
// Utilisation de react-scroll pour la navigation
<Link
  to="section-id"
  smooth={true}
  duration={500}
  offset={-70}
>
  Section
</Link>
```

### Responsive Design
- Breakpoints mobiles : < 768px
- Breakpoints tablettes : 768px - 1024px
- Breakpoints desktop : > 1024px

### Gestion des Cookies
- Composant `CookiesSettings` pour la conformité RGPD
- Bannière de consentement
- Gestion des préférences utilisateur


## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. Fork le projet
2. Créez votre branche feature (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request



## 📞 Contact

Lien du projet : [https://github.com/mzerroug/Protfolio-Personaliser](https://github.com/mzerroug/Protfolio-Personaliser)



## 🙏 Remerciements

- [React](https://reactjs.org/) - Framework JavaScript
- [React Scroll](https://github.com/fisshy/react-scroll) - Navigation fluide
- [Create React App](https://create-react-app.dev/) - Configuration de base
- [Netlify](https://www.netlify.com/) - Hébergement gratuit

---

⭐ **N'hésitez pas à donner une étoile si ce projet vous a aidé !**