# Test Dev Front : Studio Zerance

Réalisation d'un test de développement front-end pour le [Studio Zerance](https://studiozerance.fr).

## Introduction

Pour réaliser ce test j'ai décidé d'utiliser pour la première fois le framework JavaScript Vue.js. J'ai fait ce choix pour me donner un petit défi supplémentaire, d'autant plus que j'avais vraiment envie d'apprendre ce framework depuis longtemps. Alors c'était l'occasion. 😉

N'ayant aucune connaissance de Vue.js, je me suis formé en ligne (Google, [OpenClassrooms](https://openclassrooms.com/fr/courses/6390311-creez-une-application-web-avec-vue-js), Stack Overflow, ...) parallèlement à la réalisation de ce test.

Normalize.css et Modernizr sont des bibliothèques CSS et JS qui m'aide à avoir le même rendu de l'application, peu importe le navigateur utilisé.

Enfin, j'ai décidé d'utiliser Bootstrap essentiellement pour les utilitaires flex ainsi que sa grid CSS. En complément, j'utilise la méthodologie BEM (Block Element Modifier) pour mieux structurer mon code CSS de façon à éviter les conflits et de rendre le code réutilisable et modulable.

### Technos utilisées

* HTML5
* Sass compiler en CSS3
* Normalize.css
* Bootstrap
* JavaScript
* Vue.js
* Modernizr

___

## Réalisation du test

### Apprendre les bases de Vue.js

Avant de commencer le test, j'ai appris les bases du framework Vue.js puisque je ne l'avais encore jamais utilisé auparavant. Pour cela, je me suis essentiellement aider du cours sur [OpenClassrooms](https://openclassrooms.com/fr/courses/6390311-creez-une-application-web-avec-vue-js).

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

## Développement de l'app

### Section "Header"

Pour cette partie, je n'ai pas rencontré de problème en particulier.

Puisque je démarrais mon code, j'ai alors choisi un framework CSS (Bootstrap uniquement pour sa grid CSS et ses utilitaires flex). Aussi, j'ai pu utiliser ce que je venais d'apprendre avec le framework Vue.js pour stocker mes données dans un fichier JS et les afficher dynamiquement dans mon HTML.

Concernant le responsive, j'ai simplement décidé de cacher la nav à partir d'une certaine taille d'écran (comme sur votre site) car elle ne me semble pas indispensable pour une petite page comme celle-ci.

### Section "Bannière"

Au début du développement de cette section je suis aller assez vite.

Cependant, lorsque j'ai voulu souligner le mot "Shopify" comme sur la maquette, j'ai perdu pas mal de temps. Évidement, j'ai préalablement extrait de la maquette photoshop le soulignement jaune sous forme d'image en png. Malheureusement, je n'ai pas utilisé la bonne méthode car instinctivement j'ai voulu insérer cette image grâce au pseudo-élément "::before". Mais avec cette methode, j'ai rencontré un problème pour redimenssionner l'image de la même taille que ma balise "span" qui enveloppe ce qui doit être souligné.

Grâce à quelques recherches, j'ai fini par trouver la [solution](https://forum.alsacreations.com/topic-1-68391-1-Taille-dune-image-avec-before.html) qui consiste à utiliser la propriété CSS "background" et j'ai donc pu terminer la section.

### Section "Portfolio"



## Comment installer et lancer l'application ?

## Récapitulatif du temps passer

* Apprendre les bases de Vue.js : 1h
* Structure de l'app & optimisation avec Gulp.js : 50min
* Header : 1h40min
* Bannière : 1h30min
* Portfolio :
* Slider :
* Text infinite :


## Auteur

* **Gautier Maire** - [Site Web](https://www.gautiermaire.fr) - [Twitter](https://twitter.com/gaugauxmaire)
