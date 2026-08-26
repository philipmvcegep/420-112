+++
date = '2026-08-25T15:30:58-04:00'
draft = false
title = 'Structure'
weight = 1
+++


Une page HTML possède une structure de base qui indique au navigateur comment interpréter le document.

## La structure minimale

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ma page</title>
  </head>

  <body>
    Bonjour!
  </body>
</html>
```

### `<!DOCTYPE html>`

Indique au navigateur que le document utilise **HTML5** (version la plus récente).

### `<html>`

Contient l'ensemble du document HTML.

### `<head>`

Contient des informations sur la page qui ne sont généralement pas affichées directement.

On y trouve notamment le titre de la page, des styles et d'autres informations.

### `<body>`

Contient ce qui sera affiché dans la page.

```html
<body>
  <h1>Bonjour!</h1>
  <p>Bienvenue.</p>
</body>
```

## Les sources

Une page peut utiliser plusieurs types de fichiers :

```text
page.html
style.css
script.js
image.png
```

Le HTML peut faire référence à ces fichiers pour construire la page.

Par exemple, un fichier CSS peut être chargé dans le `<head>` :

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

Le navigateur va alors utiliser `style.css` pour appliquer les styles à la page.

## Une page comme ensemble

On peut donc voir une page Web comme un ensemble de ressources :

```text
          page.html
              │
      ┌───────┼───────┐
      ↓       ↓       ↓
    style   script   images
    .css     .js     .png
      │       │       │
      └───────┼───────┘
              ↓
          navigateur
              ↓
       page affichée
```

Ainsi, une page HTML moderne ressemble à ceci: 
```html
<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Integrated Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
 
<body>
    <h1>Integrated Page</h1>
    <p>This is a paragraph on an integrated page.</p>
    <button id="myButton">Click Me</button>
    <script src="script.js"></script>
</body>
 
</html>
```
Le fichier index.HTML ci-dessus décrit la structure de base d'une page web. Il fait référence à deux autres fichiers:
- le fichier des styles, styles.css, qui définit les styles dans le document (hauteur, position, couleur, etc.). 
- le dossier des scripts, script.js, qui rend l'application interactive. 

Pour l'instant, nous allons voir comment faire fonctionner un document HTML seul. Bien savoir diviser nos balises nous aidera beaucoup quand nous apprendrons CSS et JS et c'est souvent une grande partie du travail.