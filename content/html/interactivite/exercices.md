+++
date = '2026-08-25T15:37:15-04:00'
draft = false
title = 'exercices'
weight = 4
+++

## Exercice 1

Prenez le code suivant et changer les `<div>` pour des balises sémantiques:

```html
<div id="wrapper">
    <div class="top-bar">
        <h1>Mon Blog Tech</h1>
        <div class="menu">
            <a href="#">Accueil</a>
            <a href="#">Articles</a>
        </div>
    </div>
    
    <div class="content">
        <div class="post">
            <h2>Les nouveautés HTML5</h2>
            <p>Le HTML5 a introduit plein de nouveautés...</p>
        </div>
        <div class="sidebar">
            <h3>À propos</h3>
            <p>Je suis un prof passionné de web.</p>
        </div>
    </div>

    <div class="bottom-bar">
        <p>&copy; 2026 Mon Blog</p>
    </div>
</div>
```

## Exercice 2

### Objectif : 
Concevoir un formulaire structuré utilisant les bons types d'input et les bonnes pratiques d'accessibilité.

### Consignes :
Créez un formulaire d'inscription pour un site web qui contient :

- Un champ texte pour le nom d'utilisateur (obligatoire).

- Un champ de type courriel (email).

- Un champ de type mot de passe (obligatoire).

- Un groupe de boutons radio (<fieldset> et <legend>) pour choisir le statut : Étudiant ou Enseignant.

- Une case à cocher (checkbox) pour accepter les conditions d'utilisation.

- Un bouton de soumission <button type="submit">.

Rappel : N'oublie pas d'associer chaque <label> à son champ via les attributs for et id, et d'ajouter l'attribut name partout.

## Exercice 3

### Objectif : 
Insérer proprement une image légendée et une vidéo externe.

### Consignes :
Rédigez un bloc HTML qui contient :

- Une image illustrant un serveur informatique, habillée sémantiquement avec une balise <figure> et une légende <figcaption> qui indique "Figure 1 : Serveur en salle machine".

- Une balise <iframe> pour intégrer une vidéo YouTube de ton choix (tu peux utiliser une URL de type [https://www.youtube.com/embed/ID_DE_LA_VIDEO](https://www.youtube.com/embed/ID_DE_LA_VIDEO)), avec un attribut title descriptif et l'autorisation de plein écran.