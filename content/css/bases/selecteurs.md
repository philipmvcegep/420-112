+++
date = '2026-09-02T13:35:53-04:00'
draft = false
title = 'Selecteurs'
weight = 4
+++


Jusqu'à présent, nous avons ciblé des éléments soit par leur nom de balise, soit par une classe (`.`), soit par un ID (`#`). Mais que faire si l'on veut cibler un élément **en fonction de sa position**, de **son état** (comme le survol de la souris), ou de **sa relation** avec les autres éléments ? C'est le rôle des sélecteurs avancés.

### 1. Les combinateurs (relations entre éléments)
Au lieu d'ajouter des classes partout, on peut utiliser la structure du HTML pour cibler des éléments précis.

* **Le sélecteur descendant (Espace `A B`)** : Cible tous les `B` qui se trouvent à l'intérieur d'un `A`, peu importe la profondeur.
  ```css
  /* Cible tous les <a> situés à l'intérieur d'une <nav> */
  nav a {
    color: #333;
    text-decoration: none;
  }
  ```

* **Le sélecteur d'enfant direct (`A > B`)** : Cible uniquement les `B` qui sont les enfants **directs** de `A` (pas les petits-enfants).
  ```css
  /* Cible uniquement les <li> directement sous le <ul> principal */
  ul > li {
    font-weight: bold;
  }
  ```

* **Le sélecteur de frère adjacent (`A + B`)** : Cible l'élément `B` qui vient **immédiatement après** l'élément `A`.
  ```css
  /* Cible le paragraphe qui suit immédiatement un titre h1 */
  h1 + p {
    font-size: 1.2rem;
    color: #555;
  }
  ```

### 2. Les pseudo-classes (états et positions)
Une pseudo-classe commence par un deux-points (`:`) et permet de cibler un élément dans un état particulier ou selon sa position numérique.

* **Les états interactifs (`:hover`, `:focus`)** :
  ```css
  /* Change l'apparence d'un bouton quand la souris passe dessus */
  button:hover {
    background-color: #0056b3;
    cursor: pointer;
  }
  ```



* **L'exclusion (`:not`)** : Permet d'exclure un élément d'une sélection.
  ```css
  /* Cible tous les paragraphes SAUF ceux qui ont la classe .exclu */
  p:not(.exclu) {
    color: #444;
  }
  ```

### 3. Exemple global combiné
Voici comment tout cela s'articule dans une page réelle :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Sélecteurs Avancés</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <article>
        <h1>Titre de l'article</h1>
        <p>Ce paragraphe est directement après le h1 (il sera stylisé par h1 + p).</p>
        <p>Un autre paragraphe normal.</p>
    </article>

    <ul>
        <li class="exclu">Premier élément</li>
        <li>Deuxième élément (pair)</li>
        <li>Troisième élément</li>
    </ul>
</body>
</html>
```