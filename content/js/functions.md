+++
date = '2026-11-04T13:26:26-05:00'
draft = false
title = 'Chapitre 3 : Fonctions & Notions ES6'
weight = 3
+++

Ce chapitre couvre la déclaration moderne des fonctions en JavaScript (ES6), l'application du principe DRY (Don't Repeat Yourself), ainsi que les méthodes essentielles de manipulation de tableaux (`push`, `pop`, `shift`, `unshift`, `splice`).

## 1. Pourquoi utiliser des fonctions ? (Le Principe DRY)

Le principe **DRY (Don't Repeat Yourself)** est une règle fondamentale en programmation : chaque bloc de logique métier ne doit exister qu'à un seul endroit dans le code.

### 🔴 Mauvaise pratique : Code répétitif (WET - Write Everything Twice)

Sans fonction, le même calcul est réécrit plusieurs fois. Si la formule de taxe change (ex: passage à 14.975%), il faut modifier chaque ligne manuellement.

```javascript
// Calcul pour le client 1
const sousTotal1 = 100;
const total1 = sousTotal1 * 1.15;
console.log(`Facture 1 : ${total1.toFixed(2)} $`);

// Calcul pour le client 2
const sousTotal2 = 250;
const total2 = sousTotal2 * 1.15;
console.log(`Facture 2 : ${total2.toFixed(2)} $`);
```

### 🟢 Bonne pratique : Refactorisation avec une fonction (DRY)

En centralisant la logique dans une fonction, le code devient réutilisable, maintenable et testable.

```javascript
// La logique est centralisée et réutilisable
const calculerTotalAvecTaxe = (montant, taux = 0.15) => montant * (1 + taux);

const total1 = calculerTotalAvecTaxe(100);
const total2 = calculerTotalAvecTaxe(250);

console.log(`Facture 1 : ${total1.toFixed(2)} $`);
console.log(`Facture 2 : ${total2.toFixed(2)} $`);
```

---

## 2. Fonctions Fléchées (Arrow Functions) et Paramètres par Défaut

Les fonctions fléchées (`=>`) offrent une syntaxe moderne et concise, introduite avec ES6.

### Comparaison des syntaxes

```javascript
// Syntaxe traditionnelle (déclaration classique)
function additionner(a, b) {
  return a + b;
}

// Fonction fléchée ES6 (expression)
const additionnerES6 = (a, b) => a + b;
```

### Exemple 3.1 : Fonction de calcul avec paramètre par défaut

Un paramètre par défaut prend sa valeur si aucun argument n'est fourni lors de l'appel.

```javascript
// Le taux de taxe est fixé à 15% (0.15) par défaut
const calculerMontantTaxe = (montant, tauxTaxe = 0.15) => {
  return montant * (1 + tauxTaxe);
};

const commande = 100.00;
// Utilise le taux par défaut (15%)
console.log(`Total par défaut : $${calculerMontantTaxe(commande).toFixed(2)}`); 

// Surcharge du taux par défaut (5%)
console.log(`Total réduit : $${calculerMontantTaxe(commande, 0.05).toFixed(2)}`);
```

---

## 3. Opérations sur les Tableaux : Ajout, Insertion et Suppression

JavaScript fournit plusieurs méthodes intégrées pour modifier le contenu d'un tableau.

### Vue d'ensemble des méthodes de modification

| Méthode | Action | Position | Retourne |
| :--- | :--- | :--- | :--- |
| `push(elem)` | Ajouter | Fin du tableau | Nouvelle longueur |
| `unshift(elem)` | Insérer | Début du tableau | Nouvelle longueur |
| `pop()` | Retirer | Fin du tableau | Élément retiré |
| `shift()` | Retirer | Début du tableau | Élément retiré |
| `splice(index, nb, ...elem)` | Insérer / Retirer | Position spécifique | Tableau des éléments retirés |

### Exemple 3.2 : Manipulation complète d'une file de traitement

```javascript
const fruits = ["Pomme", "Banane"];

// 1. Ajouter à la fin (push)
fruits.push("Orange"); 
// Résultat: ["Pomme", "Banane", "Orange"]

// 2. Insérer au début (unshift)
fruits.unshift("Fraise"); 
// Résultat: ["Fraise", "Pomme", "Banane", "Orange"]

// 3. Retirer le dernier élément (pop)
const dernier = fruits.pop(); 
console.log("Élément retiré (pop) :", dernier); // "Orange"

// 4. Retirer le premier élément (shift)
const premier = fruits.shift(); 
console.log("Élément retiré (shift) :", premier); // "Fraise"

// 5. Insertion / Suppression à un index précis (splice)
// Insertion de "Poire" à l'index 1 sans rien supprimer (0)
fruits.splice(1, 0, "Poire"); 
// Résultat: ["Pomme", "Poire", "Banane"]

console.log("Tableau final :", fruits);
```

---

## 4. Combinaison : Fonctions, Boucles et Module `Math`

### Exemple 3.3 : Traitement d'un tableau par une fonction fléchée

```javascript
const calculerTaxesCommandes = (commandes) => {
  commandes.forEach((montant, idx) => {
    const montantFinal = montant * 1.15;
    console.log(`Commande #${idx + 1} : $${montantFinal.toFixed(2)}`);
  });
};

const listeCommandes = [50.00, 120.50, 15.00];
calculerTaxesCommandes(listeCommandes);
```

### Exemple 3.4 : Analyse de racines carrées avec `Math.sqrt()` et `Number.isInteger()`

Combine l'utilisation de `Math.sqrt()`, de l'opérateur ternaire et de la validation de type d'entier.

```javascript
const analyserRacine = (nombre) => {
  const racine = Math.sqrt(nombre);
  // Vérifie si la racine est un nombre entier (ex: 3 pour 9, 4.89 pour 24)
  const estEntier = Number.isInteger(racine) ? "Racine exacte" : "Racine décimale";
  
  console.log(`Nombre : ${nombre} | Racine : ${racine.toFixed(2)} (${estEntier})`);
};

const listeNombres = [9, 16, 24, 49];
listeNombres.forEach((n) => analyserRacine(n));
```