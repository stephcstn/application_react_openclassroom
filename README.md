# La Maison Jungle

**La Maison Jungle** est une boutique de plantes d'intérieur et d'extérieur réalisée avec React dans le cadre de ma formation OpenClassrooms. L'application permet de parcourir un catalogue, de filtrer les plantes par catégorie et de composer un panier avec un total calculé en temps réel.

> Projet pédagogique front-end : le catalogue repose sur des données locales et l'application ne traite pas de paiement ni de commande réelle.

## Objectifs pédagogiques & enjeux techniques

Ce projet m'a permis de mettre en pratique les fondamentaux de React dans une application concrète :

- Découper l'interface en composants réutilisables et spécialisés.
- Partager un état entre plusieurs composants avec `useState` et le passage de props.
- Gérer des interactions et des données dérivées : filtre par catégorie, quantités et total du panier.
- Afficher une liste de données avec `map`, des clés React et un rendu conditionnel.
- Créer des champs contrôlés et synchroniser leur valeur avec l'état de l'interface.
- Monter en compétence rapidement sur l'écosystème React et ses conventions.

## Stack technique & architecture

| Technologie | Utilisation |
| --- | --- |
| ![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react&logoColor=white) | Construction de l'interface à partir de composants et gestion de l'état avec les hooks. |
| ![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black) | Logique applicative, manipulation des données et interactions. |
| ![CSS](https://img.shields.io/badge/CSS-styles-663399?logo=css3&logoColor=white) | Feuilles de style séparées pour structurer et mettre en forme l'interface. |
| ![Create React App](https://img.shields.io/badge/Create_React_App-5.0.1-09D3AC?logo=create-react-app&logoColor=white) | Environnement de développement et scripts de build du projet. |

L'application est organisée autour de composants dédiés au bandeau, au catalogue, aux filtres, aux fiches produit, au panier et au pied de page. Le panier est conservé dans l'état de `App`, puis transmis aux composants concernés afin que le catalogue et le récapitulatif restent synchronisés. Les plantes sont définies dans un jeu de données local.

**Pas de React Router ni de bibliothèque de state management** : le projet est une interface monopage dont les besoins d'état sont couverts par les hooks React.

## Fonctionnalités clés

- Parcours d'un catalogue de plantes avec prix et indicateurs de besoins en lumière et en eau.
- Filtrage des produits par catégorie et réinitialisation du filtre.
- Ajout de plantes au panier ; les ajouts successifs incrémentent la quantité du produit correspondant.
- Ouverture et fermeture du panier, affichage des articles et calcul du total.
- Vidage du panier.
- Champ e-mail contrôlé dans le pied de page, avec une vérification simple de la présence du caractère `@`.

## Compétences acquises & bonnes pratiques

- Structurer une application React en composants cohérents et réutilisables.
- Utiliser des props pour faire circuler données et callbacks entre composants.
- Mettre à jour l'état de façon immuable et produire des listes avec des clés stables.
- Séparer les données, les composants et les styles pour faciliter la lecture du projet.
- Fournir des textes alternatifs aux images et privilégier les éléments HTML adaptés aux interactions.

Ce projet constitue une base d'apprentissage front-end : la validation de l'e-mail est volontairement minimale et pourra être renforcée dans une évolution, tout comme l'ajout de tests et l'amélioration de l'accessibilité.

## Installation & lancement local

### Prérequis

- [Node.js](https://nodejs.org/) et npm
- Git pour cloner le dépôt

### Démarrer l'application

```bash
git clone <url-du-depot>
cd application_react_openclassroom
npm install
npm start
```

Le serveur de développement démarre avec Create React App. Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Scripts disponibles

```bash
npm test       # Lance les tests en mode interactif
npm run build  # Génère la version de production dans build/
```
