+++
date = '2026-09-16T13:23:21-04:00'
draft = false
title = 'Alignement'
weight = 3
+++

# Chapitre 0 : Les fondations de l'alignement en CSS

Avant d'explorer les grilles modernes et les boîtes flexibles, il est essentiel de comprendre comment un navigateur place et aligne les éléments par défaut, ainsi que les outils historiques à notre disposition.

## Les grands principes à retenir

* **Le flux normal :** Par défaut, les blocs empilent les uns sous les autres et prennent toute la largeur. Les éléments en ligne se suivent de gauche à droite.
* **Fixe vs Auto :** Un élément peut avoir des dimensions fixes explicites (ex: `width: 200px`) ou s'ajuster automatiquement à son contenu (`auto`).
* **L'espace disponible :** On ne peut aligner un élément que s'il reste de l'espace libre dans son conteneur.

---

## 5 Exemples d'alignement traditionnel (Sans Flex/Grid)

### 1. Le centrage d'un bloc (`margin: 0 auto`)
Pour centrer horizontalement un conteneur qui possède une largeur fixe.
```css
.box-centree {
    width: 400px;
    margin: 0 auto;
}
```

### 2. Le positionnement fixe (`position: fixed`)
Pour ancrer un élément par rapport à la fenêtre du navigateur, insensible au défilement (scroll).
```css
.menu-fixe {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
```

### 3. L'alignement en ligne de blocs (`display: inline-block`)
Pour placer plusieurs blocs côte à côte sans utiliser de grille, combiné à un alignement textuel sur le parent.
```css
.parent {
    text-align: center;
}
.enfant {
    display: inline-block;
    width: 150px;
    vertical-align: top;
}
```

### 4. Le positionnement absolu (`position: absolute`)
Pour placer un élément à un endroit précis par rapport à son premier parent positionné (`position: relative`).
```css
.parent-relatif {
    position: relative;
}
.enfant-absolu {
    position: absolute;
    top: 20px;
    right: 20px;
}
```

### 5. L'alignement vertical d'une image ou d'un texte (`vertical-align`)
Utilisé historiquement pour aligner des éléments textuels ou des icônes par rapport à leur ligne de base.
```css
img.icone {
    vertical-align: middle;
}
```

### 6. Page web complète

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Mon site web</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <!-- 1. Menu fixe en haut de page -->
    <header class="menu-fixe">
      <h1>Mon Site <img src="icone.png" alt="" class="icone"></h1>
    </header>

    <main>
      <!-- 2. Conteneur avec les éléments côte à côte (inline-block) -->
      <div class="parent">
        <div class="enfant">Boîte 1</div>
        <div class="enfant">Boîte 2</div>
        <div class="enfant">Boîte 3</div>
        <div class="enfant">Boîte 4</div>
      </div>

      <!-- 3. Conteneur centré avec une largeur fixe -->
      <div class="box-centree">
        Je suis une boîte centrée avec une largeur de 400px.
      </div>

      <!-- 4. Conteneur relatif avec un enfant positionné en absolu -->
      <div class="parent-relatif" style="height: 150px; background: #eee; margin-top: 20px;">
        <div class="enfant-absolu">Je suis calé en haut à droite !</div>
      </div>
    </main>

    <footer></footer>
  </body>
</html>
```

### 7. Alignement : tutoriel avancé et moderne

[tutoriel alignement](https://css-tip.com/explore/alignment/)