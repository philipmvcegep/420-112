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

// Boucle for classique et condition modulo (%) pour les nombres pairs
for (let i = 0; i < numbersEx1.length; i++) {
  if (numbersEx1[i] % 2 === 0) {
    evens.push(numbersEx1[i]);
  }
}

console.log("Nombres pairs extraits :", evens);

// ==============================================================================
// EXERCICE 2 : Étiquetage rapide de statut
// ==============================================================================
console.log("\n--- Exercice 2 ---");

const scoresEx2 = [45, 82, 60, 95, 30];

// Utilisation de .forEach() et de l'opérateur ternaire
scoresEx2.forEach((score) => {
  const status = score >= 60 ? "Réussite" : "Échec";
  console.log(`Note : ${score}/100 - Statut : ${status}`);
});

// ==============================================================================
// EXERCICE 3 : Compteur par plage de température
// ==============================================================================
console.log("\n--- Exercice 3 ---");

const temperatures = [18, 22, 27, 31, 15, 29, 34];
let coolCount = 0;
let warmCount = 0;
let hotCount = 0;

// Boucle for et structure if / else if / else
for (let i = 0; i < temperatures.length; i++) {
  const temp = temperatures[i];
  if (temp < 20) {
    coolCount++;
  } else if (temp <= 29) {
    warmCount++;
  } else {
    hotCount++;
  }
}

console.log(`Relevés frais (< 20) : ${coolCount}`);
console.log(`Relevés tempérés (20-29) : ${warmCount}`);
console.log(`Relevés chauds (>= 30) : ${hotCount}`);

// ==============================================================================
// EXERCICE 4 : Classificateur de stock
// ==============================================================================
console.log("\n--- Exercice 4 ---");

const stockLevels = [5, 0, 12, 3, 20];

// Fonction fléchée avec des ternaires imbriqués
const getStockStatus = (qty) => {
  return qty === 0
    ? "Rupture de stock"
    : qty < 5
    ? "Stock faible"
    : "En stock";
};

// Parcours avec .forEach()
stockLevels.forEach((qty) => {
  console.log(`Quantité : ${qty} -> Statut : ${getStockStatus(qty)}`);
});

// ==============================================================================
// EXERCICE 5 : Calculateur de points de fidélité
// ==============================================================================
console.log("\n--- Exercice 5 ---");

const customerTiers = ["bronze", "gold", "silver", "bronze", "gold"];
let totalPoints = 0;

// Structure switch à l'intérieur d'un .forEach()
customerTiers.forEach((tier) => {
  switch (tier) {
    case "bronze":
      totalPoints += 10;
      break;
    case "silver":
      totalPoints += 25;
      break;
    case "gold":
      totalPoints += 50;
      break;
    default:
      totalPoints += 5;
      break;
  }
});

console.log(`Total des points cumulés : ${totalPoints}`);

// ==============================================================================
// EXERCICE 6 : Vérification du seuil de livraison
// ==============================================================================
console.log("\n--- Exercice 6 ---");

const cartPrices = [12.50, 45.00, 8.25, 35.00];
let subtotal = 0;

// Somme du sous-total
cartPrices.forEach((price) => {
  subtotal += price;
});

// Calcul des frais de livraison et du total
const shippingCost = subtotal > 80.00 ? 0.00 : 15.00;
const grandTotal = subtotal + shippingCost;

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

// Fonction de traitement des commandes
const processOrders = (orders) => {
  orders.forEach((order, index) => {
    const taxedTotal = calculateTax(order);
    console.log(
      `Commande #${index + 1} - Initial : $${order.toFixed(2)} | Avec taxes : $${taxedTotal.toFixed(2)}`
    );
  });
};

const orderList = [50.00, 120.50, 15.00];
processOrders(orderList);

// ==============================================================================
// EXERCICE 8 : Calculateur de racines carrées
// ==============================================================================
console.log("\n--- Exercice 8 ---");

const numbersEx8 = [9, 16, 24, 49, 81, 100];

// Fonction d'analyse de la racine carrée
const analyzeSquareRoot = (num) => {
  const root = Math.sqrt(num);
  const isWhole = Number.isInteger(root) ? "Racine exacte" : "Racine décimale";
  console.log(`Nombre : ${num} | Racine : ${root.toFixed(2)} (${isWhole})`);
};

// Exécution sur chaque élément
numbersEx8.forEach(analyzeSquareRoot);
```