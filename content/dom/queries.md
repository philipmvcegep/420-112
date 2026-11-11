+++
date = '2026-11-11T13:34:40-05:00'
draft = false
title = 'Queries'
weight = 2
+++


Avant de pouvoir modifier le contenu, changer le style ou réagir aux clics d'un utilisateur, JavaScript doit **trouver et attraper** l'élément HTML ciblé dans l'arbre DOM. C'est l'étape de la **sélection**.

Il existe plusieurs méthodes pour attraper des éléments. Chacune a ses spécificités, ses forces et ses pièges. Voyons les 4 méthodes incontournables.

---

## 1. Les 4 Méthodes de Sélection

### A. `document.getElementById('mon-id')`
* **Ce que ça fait :** Cherche un élément unique par son attribut `id`.
* **Ce que ça retourne :** Un **unique objet élément** (ou `null` si rien ne correspond).
* **À retenir :** C'est la méthode la plus rapide et la plus directe, mais elle exige que l'ID soit unique dans toute la page.

### B. `document.getElementsByClassName('ma-classe')`
* **Ce que ça fait :** Cherche tous les éléments qui possèdent une classe CSS spécifique.
* **Ce que ça retourne :** Une **`HTMLCollection`** (une liste d'éléments semblable à un tableau, mais **vivante** : elle se met à jour automatiquement si le DOM change).
* **À retenir :** Attention, on ne peut pas utiliser directement `.forEach()` sur une `HTMLCollection` sans la convertir au préalable (ou utiliser une boucle `for` classique).

### C. `document.querySelector('selecteur-css')`
* **Ce que ça fait :** Utilise la même syntaxe que les sélecteurs CSS (`#id`, `.classe`, `balise`, ou des combinaisons comme `div > p`).
* **Ce que ça retourne :** Le **tout premier élément** qui correspond au sélecteur.
* **À retenir :** Extrêmement puissant et polyvalent, idéal pour cibler un élément précis grâce à la logique CSS.

### D. `document.querySelectorAll('selecteur-css')`
* **Ce que ça fait :** Cherche **tous** les éléments qui correspondent au sélecteur CSS fourni.
* **Ce que ça retourne :** Une **`NodeList`** statique.
* **À retenir :** Contrairement à `getElementsByClassName`, la `NodeList` possède nativement la méthode `.forEach()`, ce qui la rend beaucoup plus agréable à manipuler en JavaScript moderne.

---

## Exemples de Code

Examinons un exemple pratique pour chaque méthode de sélection.

### Exemple 1 : `getElementById` en action
Cibler un titre unique pour modifier son texte instantanément.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Exemple getElementById</title>
</head>
<body>
    <h1 id="titre-principal">Titre original</h1>
    <button onclick="changerTitre()">Modifier</button>

    <script>
        function changerTitre() {
            // 1. On attrape l'élément unique par son ID
            const titre = document.getElementById('titre-principal');
            
            // 2. On modifie son contenu textuel
            titre.textContent = "Titre modifié avec getElementById !";
            titre.style.color = "crimson";
        }
    </script>
</body>
</html>
```

### Exemple 2 : `getElementsByClassName` et le piège de la collection
Modifier tous les éléments d'une même classe. Notez l'utilisation d'une boucle `for` classique car la `HTMLCollection` n'a pas de `.forEach()`.

```html
<p class="texte-important">Premier paragraphe important.</p>
<p class="texte-important">Deuxième paragraphe important.</p>
<button onclick="surligner()">Surligner</button>

<script>
    function surligner() {
        // Retourne une HTMLCollection
        const elements = document.getElementsByClassName('texte-important');
        
        // Boucle classique obligatoire (ou conversion en tableau)
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "yellow";
            elements[i].style.fontWeight = "bold";
        }
    }
</script>
```

### Exemple 3 : `querySelector` pour des sélections précises
Utiliser la syntaxe CSS avancée pour attraper un élément spécifique sans avoir besoin de lui créer un ID unique.

```html
<div class="panier">
    <p>Article standard</p>
</div>
<div class="panier">
    <p class="special">Article VIP en promotion</p>
</div>

<button onclick="ciblerVIP()">Mettre en avant le VIP</button>

<script>
    function ciblerVIP() {
        // On cherche un paragraphe avec la classe .special situé à l'intérieur d'un div .panier
        const elementVIP = document.querySelector('div.panier p.special');
        
        elementVIP.style.color = "purple";
        elementVIP.textContent = "🔥 Article VIP sélectionné et soldé !";
    }
</script>
```

### Exemple 4 : `querySelectorAll` et le confort de `.forEach()`
Sélectionner tous les éléments d'une liste de tâches et appliquer un traitement à chacun d'eux en une seule ligne grâce au `.forEach()`.

```html
<ul>
    <li class="tache">Acheter du pain</li>
    <li class="tache">Sortir le chien</li>
    <li class="tache">Réviser le DOM</li>
</ul>

<button onclick="barrerTout()">Tout barrer</button>

<script>
    function barrerTout() {
        // Retourne une NodeList statique
        const taches = document.querySelectorAll('li.tache');
        
        // Méthode .forEach() disponible nativement !
        taches.forEach(function(tache) {
            tache.style.textDecoration = "line-through";
            tache.style.color = "gray";
        });
    }
</script>
```

---

## Exercices

Mettez en pratique la sélection d'éléments avec ces deux exercices ciblés.

### Exercice 1 : Le sélecteur multi-méthodes
* **Objectif :** Créez une page HTML contenant :
  1. Un bloc principal avec l'ID `#banniere`.
  2. Trois boîtes (divs) possédant toutes la même classe `.box`.
  3. Un bouton "Activer".
* **Consigne JS :** Lorsque l'utilisateur clique sur le bouton, utilisez `getElementById` pour modifier le texte de la bannière, et utilisez `getElementsByClassName` (ou une boucle sur une collection) pour changer la bordure de toutes les boîtes `.box`.

### Exercice 2 : Ciblage CSS ciblé avec `querySelector` et `querySelectorAll`
* **Objectif :** Créez une liste de liens de navigation (`<nav> <ul> <li><a href="#">...</a></li> </ul> </nav>`). Ajoutez un lien particulier avec une classe `.actif`.
* **Consigne JS :** 
  1. Utilisez `querySelector` pour trouver spécifiquement le lien actif (`a.actif`) et changez sa couleur en vert.
  2. Utilisez `querySelectorAll` pour cibler *tous* les autres liens de la liste et réduisez leur opacité (`opacity = 0.5`).