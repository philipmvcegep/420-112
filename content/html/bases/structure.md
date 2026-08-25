+++
date = '2026-08-25T15:30:58-04:00'
draft = false
title = 'Structure'
weight = 6
+++

# Structure

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

Indique au navigateur que le document utilise **HTML5**.

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

Le fichier HTML constitue la structure de base. Les autres ressources peuvent venir compléter cette structure.