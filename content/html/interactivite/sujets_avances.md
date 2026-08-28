+++
date = '2026-08-25T15:47:11-04:00'
draft = false
title = 'Sujets avances'
weight = 3
+++

# Intégration des médias (`<video>`, `<audio>` et `<iframe>`)

Le HTML permet d'intégrer directement du contenu multimédia ou des éléments externes sans dépendre d'outils complexes.

`<video>` et `<audio>` : Balises natives pour lire des fichiers locaux. L'attribut controls est indispensable pour afficher les boutons de lecture, pause et volume.

`<iframe>` (Inline Frame) : Permet d'incruster une page web externe dans la vôtre (comme une carte Google Maps ou une vidéo YouTube).

```html
<!-- Vidéo locale avec contrôles -->
<video controls width="400">
  <source src="video.mp4" type="video/mp4">
  Votre fureteur ne supporte pas la balise vidéo.
</video>

<!-- Intégration d'une carte ou d'une vidéo externe (ex: YouTube) -->
<iframe 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  width="560" 
  height="315" 
  title="Vidéo explicative" 
  allowfullscreen>
</iframe>
```

# Images et légendes

Pour éviter de lier une image à son texte explicite via de simples balises de paragraphe ou des <div> désordonnées, HTML5 propose un duo sémantique dédié.

`<figure>` : Contient l'élément visuel (image, schéma, graphique).

`<figcaption>` : Fournit la légende descriptive associée à l'élément.

```html
<figure>
  <img src="schema-reseau.png" alt="Schéma du modèle OSI">
  <figcaption>Figure 1.1 : Aperçu des 7 couches du modèle OSI.</figcaption>
</figure>
```