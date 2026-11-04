+++
date = '2026-11-04T13:26:21-05:00'
draft = false
title = 'Chapitre 2 : Les Structures Conditionnelles (if, switch, ternaire)'
weight = 2
+++



Ce chapitre traite des mécanismes de prise de décision en JavaScript pour exécuter différentes portions de code selon des conditions.

---

## 1. La structure `if / else if / else`

C'est la structure conditionnelle classique. Elle évalue des expressions booléennes de haut en bas.

### Exemple 2.1 : Évaluation par tranches

```javascript
const note = 78;

if (note >= 90) {
  console.log("Mention : Excellent");
} else if (note >= 60) {
  console.log("Mention : Réussite");
} else {
  console.log("Mention : Échec");
}
```

---

## 2. L'Opérateur Ternaire (`condition ? vrai : faux`)

L'opérateur ternaire est un raccourci syntaxique pour attribuer une valeur ou exécuter une expression simple basée sur une condition.

### Structure

```javascript
const résultat = condition ? valeurSiVrai : valeurSiFaux;
```

### Exemple 2.2 : Affectation conditionnelle simple

```javascript
const note = 45;
const statut = note >= 60 ? "Réussite" : "Échec";

console.log(`Statut de l'étudiant : ${statut}`); // Output: Échec
```

### Exemple 2.3 : Ternaires imbriqués (Évaluation à 3 états)

```javascript
const quantiteStock = 0;
const disponibilite =
  quantiteStock === 0
    ? "Rupture de stock"
    : quantiteStock < 5
    ? "Stock faible"
    : "En stock";

console.log(`État de l'article : ${disponibilite}`); // Output: Rupture de stock
```

---

## 3. La structure `switch`

La structure `switch` évalue une variable par rapport à plusieurs cas précis (`case`). Elle est idéale pour éviter une longue série de `if (x === 'a') else if (x === 'b')`.

### Exemple 2.4 : Attribution de points de fidélité selon le niveau

```javascript
const niveauClient = "silver";
let pointsAttribues = 0;

switch (niveauClient) {
  case "bronze":
    pointsAttribues = 10;
    break;
  case "silver":
    pointsAttribues = 25;
    break;
  case "gold":
    pointsAttribues = 50;
    break;
  default:
    pointsAttribues = 5; // Pour tout autre niveau inconnu
}

console.log(`Client ${niveauClient} : +${pointsAttribues} points`);
```