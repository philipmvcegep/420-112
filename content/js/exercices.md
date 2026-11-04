+++
date = '2026-11-04T13:27:07-05:00'
draft = false
title = 'Exercices'
weight = 4
+++


Voici la solution complète pour la série d'exercices d'introduction à JavaScript.

```javascript
/**
 * ==============================================================================
 * INTRODUCTION À JAVASCRIPT - EXERCICES COMPLÉTÉS
 * ==============================================================================
 */

// ==============================================================================
// EXERCICE 1 : Extraction de nombres pairs
// ==============================================================================
console.log("--- Exercice 1 ---");

const numbersEx1 = [3, 8, 12, 17, 20, 25, 30];
const evens = [];

//TODO: créer la boucle pour afficher les nombres pairs

console.log("Nombres pairs extraits :", evens);

// ==============================================================================
// EXERCICE 2 : Étiquetage rapide de statut
// ==============================================================================
console.log("\n--- Exercice 2 ---");

const scoresEx2 = [45, 82, 60, 95, 30];

// Utilisez forEach pour afficher (Note: x/100 - Status: Échec/Réussite)


// ==============================================================================
// EXERCICE 3 : Compteur par plage de température
// ==============================================================================
console.log("\n--- Exercice 3 ---");

const temperatures = [18, 22, 27, 31, 15, 29, 34];
let coolCount = 0;
let warmCount = 0;
let hotCount = 0;

// Incrémentez le compteur selon la température de chaque entrée


console.log(`Relevés frais (< 20) : ${coolCount}`);
console.log(`Relevés tempérés (20-29) : ${warmCount}`);
console.log(`Relevés chauds (>= 30) : ${hotCount}`);

// ==============================================================================
// EXERCICE 4 : Classificateur de stock
// ==============================================================================
console.log("\n--- Exercice 4 ---");

const stockLevels = [5, 0, 12, 3, 20];

// Créer la fonction fléchée getStockStatus, qui retourne console.log(`Quantité : ${qty} -> Statut : ${getStockStatus(qty)}`);
// ==0 => Rupture de stock, <5 => stock faible, sinon En stock 


// Parcours avec .forEach()

// ==============================================================================
// EXERCICE 5 : Calculateur de points de fidélité
// ==============================================================================
console.log("\n--- Exercice 5 ---");

const customerTiers = ["bronze", "gold", "silver", "bronze", "gold"];
let totalPoints = 0;

// Calculer les points avec un forEach. bronze: 10pts, silver: 25pts, gold: 50pts


console.log(`Total des points cumulés : ${totalPoints}`);

// ==============================================================================
// EXERCICE 6 : Vérification du seuil de livraison
// ==============================================================================
console.log("\n--- Exercice 6 ---");

const cartPrices = [12.50, 45.00, 8.25, 35.00];
let subtotal = 0;

// Somme du sous-total avec forEach


// Calcul des frais de livraison : 15$ si le cout est supérieur a 80

console.log(`Sous-total : $${subtotal.toFixed(2)}`);
console.log(`Frais de livraison : $${shippingCost.toFixed(2)}`);
console.log(`Montant total : $${grandTotal.toFixed(2)}`);

// ==============================================================================
// EXERCICE 7 : Pipeline de calcul de taxes
// ==============================================================================
console.log("\n--- Exercice 7 ---");

// Fonction de calcul de tax (taux par défaut à 15%)
const calculateTax = (subtotal, taxRate = 0.15) => {
  return subtotal * (1 + taxRate);
};

// Fonction de traitement des commandes: affichez le prix avant et apres taxe pour chaque élément de la liste

const orderList = [50.00, 120.50, 15.00];
processOrders(orderList);

// ==============================================================================
// EXERCICE 8 : Calculateur de racines carrées
// ==============================================================================
console.log("\n--- Exercice 8 ---");

const numbersEx8 = [9, 16, 24, 49, 81, 100];

// Fonction racine carrée (trouver si le nombre est un carré)

// Exécution sur chaque élément
numbersEx8.forEach(analyzeSquareRoot);
```
