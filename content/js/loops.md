+++
date = '2026-11-04T13:26:16-05:00'
draft = false
title = 'Chapitre 1 : Les Boucles'
weight = 1
+++


Dans ce chapitre, nous explorons les deux structures de boucles principales pour parcourir des collections de données ou répéter des blocs d'instructions.

---

## 1. La boucle `for` (Traditionnelle)

La boucle `for` permet de répéter un bloc de code un nombre précis de fois à l'aide d'un compteur (généralement `i`).

### Structure

```javascript
for (initialisation; condition; incrémentation) {
  // Code à exécuter
}
```

### Exemple 1.1 : Filtrer les nombres pairs dans un tableau

On parcourt un tableau d'entiers pour extraire uniquement les nombres pairs dans un nouveau tableau.

```javascript
const nombres = [3, 8, 12, 17, 20, 25, 30];
const pairs = [];

for (let i = 0; i < nombres.length; i++) {
  // Le modulo (%) vérifie si le reste de la division par 2 est égal à 0
  if (nombres[i] % 2 === 0) {
    pairs.push(nombres[i]);
  }
}

console.log("Nombres pairs :", pairs); 
// Output: [8, 12, 20, 30]
```

### Exemple 1.2 : Compteur selon des plages d'indices

La boucle `for` est très utile quand on a besoin d'accéder directement à l'index de chaque élément.

```javascript
const temperatures = [18, 22, 27, 31, 15, 29, 34];
let frais = 0;
let temperes = 0;
let chauds = 0;

for (let i = 0; i < temperatures.length; i++) {
  const t = temperatures[i];
  if (t < 20) {
    frais++;
  } else if (t <= 29) {
    temperes++;
  } else {
    chauds++;
  }
}

console.log(`Frais (<20): ${frais}, Tempérés (20-29): ${temperes}, Chauds (>=30): ${chauds}`);
```

---

## 2. La méthode `forEach` (Tableaux)

La méthode `forEach` est une fonction intégrée aux tableaux JavaScript. Elle permet d'exécuter une fonction sur chaque élément du tableau de manière plus fluide et fonctionnelle.

### Structure

```javascript
tableau.forEach((element, index) => {
  // Code exécuté pour chaque élément
});
```

### Exemple 1.3 : Calcul de somme et cumul

Parcourir un tableau de prix pour calculer un sous-total.

```javascript
const prixPaniers = [12.50, 45.00, 8.25, 35.00];
let subtotal = 0;

prixPaniers.forEach((prix) => {
  subtotal += prix;
});

console.log(`Sous-total du panier : ${subtotal.toFixed(2)} $`);
```

### Exemple 1.4 : Inspection et formatage à l'affichage

`forEach` peut également recevoir l'index courant en deuxième argument.

```javascript
const scores = [45, 82, 60, 95];

scores.forEach((score, index) => {
  console.log(`Étudiant n°${index + 1} - Note : ${score}/100`);
});
```