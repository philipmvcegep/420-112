+++
date = '2026-09-02T13:34:41-04:00'
draft = false
title = 'Intro'
weight = 1
+++

Les pages web reposent sur une séparation des rôles : le **HTML** fournit la structure brute et le contenu, tandis que le **CSS** (Cascading Style Sheets) gère l'apparence visuelle.

### 1. L'approche directe : l'attribut `style`
Avant d'utiliser une feuille de style externe, on peut appliquer du CSS directement sur un élément HTML grâce à l'attribut `style`. C'est idéal pour comprendre rapidement le lien entre une propriété et son effet visuel.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon site web</title>
</head>
<body>
    <h1 style="color: blue; text-align: center;">Bonjour le monde</h1>
    <p style="font-size: 18px; background-color: #f0f0f0;">Ceci est un paragraphe stylisé directement.</p>
</body>
</html>
```

* **Le problème** : Si on a 50 paragraphes à modifier, répéter l'attribut `style` partout devient rapidement impossible à maintenir.

### 2. L'étape intermédiaire : le CSS interne dans le `<head>` (`<style>`)
Avant de séparer notre code dans un fichier complètement externe, une étape intermédiaire consiste à regrouper toutes les règles CSS au même endroit, à l'intérieur de la balise `<head>` du document HTML, grâce à la balise `<style>`.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon site web</title>
    <style>
        h1 {
            color: blue;
            text-align: center;
        }
        p {
            font-size: 18px;
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
    <h1>Bonjour le monde</h1>
    <p>Ceci est un paragraphe stylisé via le bloc style dans le head.</p>
</body>
</html>
```

### 3. La solution professionnelle : la feuille de style externe (`<link>`)
Pour industrialiser le design, on extrait le code CSS dans un fichier externe (par exemple `style.css`) et on le lie dans l'en-tête de chaque page :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon site web</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Bonjour le monde</h1>
    <p>Ceci est un paragraphe stylisé via un fichier externe partagé.</p>
</body>
</html>
```

### 4. L'anatomie d'une règle CSS
```css
selector {
  property: value;
}
```
* **Sélecteur** : Désigne l'élément à cibler (`h1`, `p`).
* **Propriété et Valeur** : L'attribut visuel à modifier et son réglage (ex: `color: red;`).

### 5. Focus sur les couleurs et l'alignement
Pour donner du style à une page dès le départ, on utilise très tôt ces propriétés essentielles :

* **Les Couleurs (`color` et `background-color`)** :
  * **Noms de couleurs** : `red`, `blue`, `green`, `orange`, `white`, etc.
  * **Codes HEX** : Notation universelle avec un dièse suivie de 6 caractères (ex: `#ff0000` pour le rouge, `#333333` pour un gris foncé).
  ```css
  h1 {
    color: #2c3e50;
    background-color: #ecf0f1;
  }
  ```

* **L'alignement du texte (`text-align`)** :
  * Permet de positionner horizontalement le texte à l'intérieur d'un bloc.
  * Valeurs possibles : `left` (gauche, par défaut), `center` (centré), `right` (droite), ou `justify` (justifié).
  ```css
  h1 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  ```