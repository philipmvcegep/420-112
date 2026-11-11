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
```

# Exercices sur les dates, strings et math

```javascript
/**
 * COURS COMPLET : STRINGS, MATH & DATE EN JAVASCRIPT
 * Niveau : CEGEP (Introduction / Pratique)
 * 
 * Conseils de documentation rapide pour le labo :
 * - W3Schools (Strings) : https://www.w3schools.com/js/js_string_methods.asp
 * - W3Schools (Math)    : https://www.w3schools.com/js/js_math.asp
 * - W3Schools (Date)    : https://www.w3schools.com/js/js_date_methods.asp
 */


// ============================================================================
// 1. LES CHAÎNES DE CARACTÈRES (Strings)
// ============================================================================

// --- EXEMPLES DÉMONSTRATIFS ---
let texte = "  JavaScript est le langage du Web !  ";

// Inspection et nettoyage
console.log(texte.length);             // 38 (compte tout, même les espaces)
console.log(texte.trim());             // Enlève espaces au début/fin
console.log(texte.trim().toUpperCase()); // Enchaînement (chaining) de méthodes

// Recherche
console.log(texte.includes("Web"));    // true
console.log(texte.startsWith("  Java"));// true
console.log(texte.indexOf("langage")); // 19 (position 0-indexed)

// Extraction et Modification
console.log(texte.slice(2, 12));       // "JavaScript" (de l'index 2 à 11)
console.log(texte.replace("Web", "Dev")); // Remplace la 1ère occurrence
console.log(texte.replaceAll("a", "@"));  // Remplace TOUTES les occurrences

// Conversion en tableau (Split) et assemblage (Join)
let langages = "JS,Python,Java,C++";
let tableauLangages = langages.split(","); // ["JS", "Python", "Java", "C++"]
console.log(tableauLangages.join(" | "));  // "JS | Python | Java | C++"


// --- EXERCICES : CHAÎNES ---

// [Niveau 1 - Facile]
// Exercice 1.1 : Écrire une fonction qui prend un texte en paramètre et retourne la première lettre en majuscule et le reste en minuscule (ex: "mONtRéAL" -> "Montréal").
// Exercice 1.2 : Écrire une fonction qui masque un numéro de carte de crédit en ne gardant que les 4 derniers chiffres (ex: "4540123456788901" -> "************8901"). Utiliser .slice() et .padStart() ou .repeat().

// [Niveau 2 - Défi]
// Exercice 1.3 : Écrire un vérificateur de palindrome (ex: "kayak" -> true, "Bonjour" -> false). 
//               Astuce : split, reverse, join.
// Exercice 1.4 : Écrire une fonction qui nettoie un nom de fichier pour le web (enlever espaces au début/fin, mettre en minuscules, remplacer les espaces par des tirets "-").



// ============================================================================
// 2. LES FONCTIONS MATHÉMATIQUES (Objet Math)
// ============================================================================

// --- EXEMPLES DÉMONSTRATIFS ---

// Arrondis (Attention aux différences !)
console.log(Math.round(4.5));          // 5 (arrondi standard au plus proche)
console.log(Math.floor(4.9));          // 4 (coupe les décimales / vers le bas)
console.log(Math.ceil(4.1));           // 5 (force la valeur supérieure)
console.log(Math.trunc(4.9));          // 4 (enlève simplement la partie décimale)

// Puissances, Racines et Signes
console.log(Math.pow(2, 4));           // 16 (ou 2 ** 4)
console.log(Math.sqrt(144));           // 12
console.log(Math.abs(-42));            // 42 (valeur absolue)

// Min, Max et Nombres Aléatoires
console.log(Math.max(10, 5, 100, 2));   // 100
console.log(Math.min(10, 5, 100, 2));   // 2

// Aléatoire (Math.random() génère un nombre entre [0, 1[)
let nombreBrut = Math.random();
let nombreEntre1Et20 = Math.floor(Math.random() * 20) + 1;
console.log("Nombre aléatoire [1-20] :", nombreEntre1Et20);


// --- EXERCICES : MATH ---

// [Niveau 1 - Facile]
// Exercice 2.1 : Écrire une fonction qui prend la note d'un étudiant sur 100 (ex: 87.65) et la retourne arrondie à un chiffre après la virgule.
// Exercice 2.2 : Simuler le lancer de DEUX dés à 6 faces et afficher la somme.

// [Niveau 2 - Défi]
// Exercice 2.3 : Écrire une fonction qui génère une couleur HEX aléatoire (ex: "#A3F12C"). 
//               Astuce : Math.random() et .toString(16).
// Exercice 2.4 : Calculer la distance entre deux points 2D A(x1, y1) et B(x2, y2). 
//               Formule : sqrt((x2 - x1)^2 + (y2 - y1)^2)



// ============================================================================
// 3. L'OBJET DATE
// ============================================================================

// --- EXEMPLES DÉMONSTRATIFS ---

let maintenant = new Date();
console.log("Date ISO :", maintenant.toISOString()); // Format standard serveur (ex: 2026-11-06T...)

// Extracteurs de Date
console.log("Année :", maintenant.getFullYear());    // ex: 2026
console.log("Mois (0 à 11) :", maintenant.getMonth());// RAPPEL: 0 = Janvier, 10 = Novembre, 11 = Décembre
console.log("Jour du mois :", maintenant.getDate());  // 1 à 31
console.log("Jour de semaine :", maintenant.getDay());// 0 = Dimanche, 1 = Lundi...

// Manipulation / Calculs
let demain = new Date();
demain.setDate(maintenant.getDate() + 1); // Ajoute 1 jour automatiquement (gère les fin de mois !)

// Formateurs pratiques intégrés
console.log(maintenant.toLocaleDateString("fr-CA")); // Ex: "2026-11-06" (Format canadien)
console.log(maintenant.toLocaleTimeString("fr-CA")); // Ex: "09:12:00"


// --- EXERCICES : DATES ---

// [Niveau 1 - Facile]
// Exercice 3.1 : Écrire une fonction qui prend une date de naissance (chaine ou objet Date) et calcule l'âge de la personne.
// Exercice 3.2 : Écrire une fonction qui vérifie si une date donnée tombe un week-end (Samedi ou Dimanche).

// [Niveau 2 - Défi]
// Exercice 3.3 : Créer un compte à rebours jusqu'à la fin de la session (ex: 20 décembre de l'année en cours). 
//               La fonction doit retourner un objet { jours, heures, minutes }.
// Exercice 3.4 : Écrire une fonction qui prend deux dates et retourne true si la première date est antérieure à la deuxième.



// Exécution sur chaque élément
numbersEx8.forEach(analyzeSquareRoot);
```
