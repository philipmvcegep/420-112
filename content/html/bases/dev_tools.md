+++
date = '2026-08-25T15:30:23-04:00'
draft = false
title = 'Dev tools'
weight = 3
+++



Le navigateur ne fait pas qu'afficher une page. Il permet aussi de regarder **comment cette page est construite**.

Pour ouvrir les outils de développement (`Dev tools`), on peut :

- appuyer sur **F12**;
- faire un clic droit sur une partie de la page et choisir **Inspecter**.

## Les éléments

Dans les outils de développement, l'onglet **Elements** (ou **Éléments**) permet de voir le HTML de la page.

On peut y retrouver les différentes balises :

```html
<h1>Bonjour</h1>
<p>Bienvenue sur ma page!</p>
```

On peut cliquer sur un élément dans la page pour voir directement le HTML qui lui correspond, après avoir appuyé sur le bouton **'Inspecter l'élément'** (**`d`**)

On peut aussi cliquer sur une balise dans les outils de développement pour voir où elle se trouve dans la page.

## Les sources

L'onglet **Sources** permet de voir les fichiers utilisés par la page.

On peut notamment y retrouver :

- les fichiers HTML;
- les fichiers CSS;
- les fichiers JavaScript;
- les images et autres ressources.

Pour notre cours, les fichiers HTML que nous créons localement apparaîtront également dans les sources lorsque nous les ouvrons dans le navigateur.

## Inspecter directement un élément

Le bouton **Inspecter** permet de sélectionner un élément directement dans la page.

On peut ensuite observer :

```text
page
 ↓
élément sélectionné
 ↓
HTML correspondant
```

C'est particulièrement utile pour comprendre la relation entre **ce qu'on voit à l'écran** et **le code HTML qui le produit**.

> Pendant le cours, utilisez souvent **Inspecter** pour explorer les pages et faire des liens entre le code et le résultat visuel.