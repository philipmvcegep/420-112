+++
date = '2026-11-11T13:35:07-05:00'
draft = false
title = 'Events'
weight = 3
+++

---
title: "Chapitre 3 : Les Écouteurs d'Événements (Event Listeners)"
weight: 3
---

Jusqu'à présent, nos scripts s'exécutaient soit immédiatement au chargement de la page, soit lorsqu'on cliquait sur un attribut inline (`onclick="..."`). En programmation moderne, c'est une mauvaise pratique de mélanger HTML et JS de cette manière.

Pour rendre une page interactive, on utilise les **événements** (clics, saisie de texte, survol de souris, etc.) et on les écoute grâce à **`addEventListener()`**.

---

## 1. Comment fonctionne un Écouteur d'Événements ?

La méthode `addEventListener()` prend deux arguments principaux :
1. **Le type d'événement** sous forme de chaîne de caractères (ex: `'click'`, `'input'`, `'mouseover'`).
2. **Une fonction de rappel (callback)** qui contient le code à exécuter lorsque l'événement se produit.

```javascript
element.addEventListener('typeDeLEvenement', function() {
    // Code exécuté lorsque l'événement survient
});
```

### Les types d'événements les plus courants :
* `'click'` : Un clic de souris sur l'élément.
* `'input'` ou `'change'` : Un changement de valeur dans un champ de texte ou un formulaire.
* `'mouseover'` / `'mouseout'` : La souris entre ou sort d'un élément.
* `'submit'` : La soumission d'un formulaire.
* `'keydown'` / `'keyup'` : Une touche du clavier est enfoncée ou relâchée.

---

## Exemples de Code

Examinons 4 exemples pour maîtriser la gestion des événements.

### Exemple 1 : Le compteur de clics interactif
Écouter le clic sur un bouton pour incrémenter une variable et mettre à jour l'affichage en temps réel.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Compteur de clics</title>
</head>
<body>
    <button id="mon-bouton">Clique-moi !</button>
    <p>Nombre de clics : <span id="compteur">0</span></p>

    <script>
        // 1. Sélectionner les éléments
        const bouton = document.getElementById('mon-bouton');
        const spanCompteur = document.getElementById('compteur');

        let totalClics = 0;

        // 2. Ajouter l'écouteur d'événement 'click'
        bouton.addEventListener('click', function() {
            totalClics++;
            spanCompteur.textContent = totalClics;
        });
    </script>
</body>
</html>
```

### Exemple 2 : L'objet événement (`event`) et la saisie de texte (`input`)
Chaque fonction de écouteur peut recevoir un paramètre (souvent nommé `e` ou `event`) qui contient des informations détaillées sur l'action qui vient de se produire.

```html
<input type="text" id="champ-saisie" placeholder="Tapez quelque chose...">
<p>Vous avez tapé : <span id="reflet"></span></p>

<script>
    const champ = document.getElementById('champ-saisie');
    const reflet = document.getElementById('reflet');

    // L'événement 'input' se déclenche à chaque caractère tapé ou effacé
    champ.addEventListener('input', function(e) {
        // e.target.value récupère la valeur actuelle du champ de saisie
        reflet.textContent = e.target.value;
    });
</script>
```

### Exemple 3 : Effet de survol avec `mouseover` et `mouseout`
Modifier dynamiquement l'apparence d'une boîte lorsque la souris passe dessus.

```html
<div id="ma-boite" style="width: 150px; height: 150px; background-color: coral; text-align: center; line-height: 150px;">
    Survolez-moi
</div>

<script>
    const boite = document.getElementById('ma-boite');

    boite.addEventListener('mouseover', function() {
        boite.style.backgroundColor = "deepskyblue";
        boite.textContent = "Grands sourires !";
    });

    boite.addEventListener('mouseout', function() {
        boite.style.backgroundColor = "coral";
        boite.textContent = "Survolez-moi";
    });
</script>
```

### Exemple 4 : Gérer une liste de tâches avec suppression au clic
Créer dynamiquement un élément et lui attacher un écouteur pour qu'il s'efface lorsqu'on clique dessus.

```html
<input type="text" id="nouvelle-tache" placeholder="Nouvelle tâche">
<button id="btn-ajouter">Ajouter</button>
<ul id="liste"></ul>

<script>
    const inputTache = document.getElementById('nouvelle-tache');
    const btnAjouter = document.getElementById('btn-ajouter');
    const liste = document.getElementById('liste');

    btnAjouter.addEventListener('click', function() {
        if (inputTache.value.trim() === "") return; // Ne rien faire si vide

        const li = document.createElement('li');
        li.textContent = inputTache.value + " (cliquez pour supprimer)";

        // Permettre de supprimer l'élément au clic direct sur le <li>
        li.addEventListener('click', function() {
            li.remove(); // Supprime l'élément du DOM
        });

        liste.appendChild(li);
        inputTache.value = ""; // Réinitialiser le champ
    });
</script>
```

---

## Exercices

Mettez en pratique les écouteurs d'événements avec ces deux défis.

### Exercice 1 : Le validateur de mot de passe en direct
* **Objectif :** Créez un champ de mot de passe (`<input type="password">`) et un message d'indication sous forme de paragraphe (`<p id="message">`).
* **Consigne JS :** Écoutez l'événement `'input'`. Si le mot de passe fait moins de 6 caractères, affichez en rouge "Trop court (minimum 6 caractères)". S'il fait 6 caractères ou plus, affichez en vert "Mot de passe valide".

### Exercice 2 : L'alternateur de thème (Mode Sombre / Mode Clair)
* **Objectif :** Créez un bouton "Changer de thème" et un conteneur principal (`<body>`).
* **Consigne JS :** Ajoutez un écouteur de clic sur le bouton. À chaque clic, basculez une classe CSS `.dark-mode` sur le `<body>` (qui inverse les couleurs de fond et de texte) en utilisant `classList.toggle()`.