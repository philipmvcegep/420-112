+++
date = '2026-11-11T13:34:35-05:00'
draft = false
title = 'Dom'
weight = 1
+++

Lorsque vous écrivez un fichier HTML, vous rédigez simplement un **document texte statique**. Mais lorsqu'un navigateur web ouvre ce fichier, il transforme ce texte brut en un **modèle d'objets vivant, interactif et modifiable** stocké en mémoire vive.

Cette transformation est le **DOM (Document Object Model)**. Ce n'est pas un langage de programmation ; c'est une interface de programmation (API) fournie par le navigateur qui permet à des langages comme JavaScript de lire, manipuler, mettre à jour et réagir à la structure, au style et au contenu d'une page web à la volée.

---

## 1. Le Plan d'Architecte vs. Le Bâtiment Réel

Pensez à votre **fichier HTML** comme au plan d'un architecte :
* Il est stocké sur un serveur ou votre disque dur sous forme de texte brut.
* Il ne bouge pas et ne change pas par lui-même.

Pensez au **DOM** comme au bâtiment réel construit à partir de ce plan :
* Il existe entièrement dans la mémoire vive (RAM) du navigateur.
* Il est représenté sous forme d'un **arbre hiérarchique de nœuds et d'objets**.
* JavaScript peut parcourir ce bâtiment, modifier les murs, peindre les pièces et ajouter de nouveaux meubles sans jamais avoir à reconstruire la maison à partir de zéro.

### La Hiérarchie en Arbre
Chaque partie du document — chaque balise HTML, attribut et bloc de texte — devient un **Nœud (Node)** dans cet arbre.

```text
document (Racine)
 └── <html>
      ├── <head>
      │    └── <title> ("Mon Site Web")
      └── <body>
           ├── <header>
           │    └── <h1> ("Bienvenue")
           └── <main>
                ├── <p> ("Bonjour le DOM !")
                └── <ul>
                     ├── <li> ("Item 1")
                     └── <li> ("Item 2")
```

---

## Exemples de Code

Examinons 4 exemples pratiques qui démontrent comment le navigateur analyse et structure le DOM.

### Exemple 1 : Explorer l'objet global `document`
Le navigateur crée automatiquement une variable globale appelée `document` qui représente toute la racine de votre arbre DOM. Vous pouvez l'inspecter directement dans la console de votre navigateur.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Explorateur DOM</title>
</head>
<body>
    <h1>Bonjour le Monde</h1>
    <p>Ouvrez la console de votre navigateur pour explorer le document.</p>

    <script>
        // Afficher l'objet document entier
        console.log(document);

        // Accéder à des propriétés spécifiques de la racine
        console.log("Titre du document :", document.title);
        console.log("Domaine :", document.domain);
        console.log("Élément body :", document.body);
    </script>
</body>
</html>
```

### Exemple 2 : Comprendre les nœuds et leurs types
Tout dans le DOM est un **nœud**, mais les nœuds ne sont pas tous des éléments. Les balises sont des nœuds de type `Element`, le texte à l'intérieur est de type `Text`, et les commentaires sont de type `Comment`.

```html
<div id="contenu">
    <!-- Ceci est un nœud de commentaire -->
    <p>Ceci est un paragraphe contenant du texte.</p>
</div>

<script>
    const contenuDiv = document.getElementById('contenu');
    
    // childNodes retourne TOUS les nœuds enfants (y compris les espaces blancs/retours à la ligne et les commentaires)
    console.log("Tous les nœuds enfants :", contenuDiv.childNodes);
    
    // children retourne UNIQUEMENT les nœuds éléments (les balises HTML comme <p>)
    console.log("Uniquement les enfants de type élément :", contenuDiv.children);
</script>
```

### Exemple 3 : Navigation dans l'arbre DOM (Traversal)
Puisque le DOM est un arbre, chaque nœud possède des relations : des parents, des enfants et des frères/sœurs (siblings). Vous pouvez naviguer dans l'arbre par programmation.

```html
<ul id="menu">
    <li id="premier">Accueil</li>
    <li id="milieu">Produits</li>
    <li id="dernier">Contact</li>
</ul>

<script>
    const milieu = document.getElementById('milieu');

    // Trouver l'élément parent
    console.log("Parent du milieu :", milieu.parentElement.nodeName); // UL

    // Trouver les frères et sœurs précédent et suivant
    console.log("Frère précédent :", milieu.previousElementSibling.textContent); // Accueil
    console.log("Frère suivant :", milieu.nextElementSibling.textContent); // Contact
</script>
```

### Exemple 4 : Créer un nœud DOM de toutes pièces
Le DOM ne sert pas seulement à lire ; vous pouvez instancier de nouveaux objets en mémoire et les attacher dynamiquement à l'arbre vivant.

```html
<div id="conteneur">
    <p>Paragraphe initial.</p>
</div>

<button onclick="ajouterElement()">Ajouter un élément</button>

<script>
    function ajouterElement() {
        // 1. Créer un tout nouvel élément en mémoire
        const nouveauTitre = document.createElement('h2');
        
        // 2. Lui donner du contenu textuel
        nouveauTitre.textContent = "Je viens d'être créé dynamiquement via le DOM !";
        
        // 3. Trouver le conteneur et y ajouter le nouveau titre comme enfant
        const conteneur = document.getElementById('conteneur');
        conteneur.appendChild(nouveauTitre);
    }
</script>
```

---

## Exercices

Mettez votre compréhension de la structure et de la navigation de l'arbre DOM en pratique avec ces deux exercices.

### Exercice 1 : Le compteur de nœuds DOM
* **Objectif :** Créez une page HTML contenant une structure imbriquée de divs, de paragraphes et de listes (au moins 10 éléments au total). Écrivez un script JavaScript qui compte le nombre total d'éléments (éléments HTML) présents dans le `<body>` et affiche ce chiffre à l'intérieur d'un paragraphe désigné `<p id="resultat">` sur la page.
* *Indice :* Utilisez `document.querySelectorAll('*')` pour sélectionner absolument tous les éléments du document, puis lisez sa propriété `.length`.

### Exercice 2 : L'inséreur de liste dynamique
* **Objectif :** Créez une liste non ordonnée vide (`<ul id="liste-achats">`), un champ de texte (`<input type="text">`) et un bouton "Ajouter". Lorsque l'utilisateur tape un nom d'article dans le champ et clique sur le bouton, votre code JavaScript doit :
  1. Lire la valeur saisie dans l'input.
  2. Créer un nouvel élément `<li>`.
  3. Assigner la valeur lue au `textContent` du `<li>`.
  4. Ajouter (`appendChild`) le `<li>` à la liste non ordonnée.
  5. Effacer le champ de texte pour la saisie suivante.