# Test Dev Front : Studio Zerance

Réalisation d'un test de développement front-end pour le [Studio Zerance](https://studiozerance.fr).

## Introduction

Pour réaliser ce test j'ai décidé d'utiliser pour la première fois le framework JavaScript Vue.js (avec Node.js en complément ?). J'ai fais ce choix pour me donner un petit défi supplémentaire, d'autant plus que j'avais vraiment envie d'apprendre ce framework depuis longtemps. Alors c'était l'occasion. 😉
N'ayant aucune connaissance de Vue.js, je me suis former en ligne (Google, [OpenClassrooms](https://openclassrooms.com/fr/courses/6390311-creez-une-application-web-avec-vue-js), Stack Overflow, ...) parallèlement à la réalisation de ce test.

### Technologies choisient :

* Front-End : HTML5 / CSS3 / Sass / JavaScript / Vue.js
* Back-End : Node.js ?

___

## Réalisation du test

### Apprendre les bases de Vue.js

Avant de commencer le test, j'ai appris les bases du framework Vue.js puisque je ne l'avais encore jamais utiliser auparavant. Pour cela, je me suis essentiellement aider du cours sur [OpenClassrooms](https://openclassrooms.com/fr/courses/6390311-creez-une-application-web-avec-vue-js).

### Structure de l'app & optimisation avec Gulp.js

J'ai structuré le projet afin d'avoir un site en développement (dossier "app") et un site optimisé en production (dossier "dist").

Grâce à Gulp.js, j’ai automatisé différentes tâches me permettant de travailler plus efficacement sur le site en développement (rafraichissement du navigateur après chaque modification des fichiers, compilation automatique de Sass en CSS, ...). Aussi, j’ai automatisé des tâches pour générer et optimiser le site en production (minifier le JS et le CSS, mise en place d’un autoprefixer CSS pour adapter aux différents navigateurs, optimisation des images, ...).

J'ai donc créé deux commandes Gulp à lancer depuis la racine du projet.

>La première commande me permettant d'optimiser mon travail pendant le développement (dans le dossier "app") :
>```bash
>gulp
>```
>ou
>```bash
>gulp default
>```

>Et la seconde commande me permettant de générer le site optimisé/fini dans le dossier "dist" :
>```bash
>gulp build
>```

Enfin, j'ai décidé d'utiliser la méthodologie BEM (Block Element Modifier) pour mieux structurer mon code CSS de façon à éviter les conflits et de rendre le code réutilisable et modulable.

### Technos utilisées

* HTML5
* Sass compiler en CSS3
* normalize.css
* JavaScript
* jQuery-3.4.1
* Modernizr-3.8.0

## Comment installer et lancer l'application ?

## Récapitulatif du temps passer

* Apprendre les bases de Vue.js : 1h
* Structure de l'app & optimisation avec Gulp.js : 50min

## Auteur

* **Gautier Maire** - [Site Web](https://www.gautiermaire.fr) - [Twitter](https://twitter.com/gaugauxmaire)
