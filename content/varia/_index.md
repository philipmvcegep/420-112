+++
date = '2026-11-11T13:39:06-05:00'
draft = false
title = 'Varia'
weight = 7
+++

# Exercices de Débogage JavaScript dans VS Code

Ce document contient **3 scénarios réels de bugs JavaScript** avec leurs structures HTML et JS. Utilisez ces exercices pour vous entraîner à placer des points d'arrêt (breakpoints), inspecter des variables, exécuter le code pas à pas et utiliser le débogueur de VS Code.

---

## Exercice 1 : Le Compteur Décalé (Off-By-One)

### Description du problème

Ce compteur est censé afficher les nombres de `1` à `10` lorsqu'on clique sur le bouton. Cependant, il affiche actuellement les nombres de `0` à `9`.

### 1. HTML (`exercice1.html`)

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Exercice 1 - Bug de Compteur</title>
</head>
<body>
    <h1>Exercice de Débogage : Compteur</h1>
    <button id="startBtn">Compter jusqu'à 10</button>
    <ul id="outputList"></ul>

    <script src="exercice1.js"></script>
</body>
</html>
```

### 2. JavaScript Défectueux (`exercice1.js`)

```javascript
document.getElementById('startBtn').addEventListener('click', () => {
    let listElement = document.getElementById('outputList');
    listElement.innerHTML = ''; // Réinitialise la liste
    
    // BUG : Problème de condition dans la boucle et d'indexation
    for (let i = 0; i < 10; i++) {
        let li = document.createElement('li');
        li.textContent = `Élément numéro : ${i}`; // Placez un point d'arrêt ici !
        listElement.appendChild(li);
    }
});
```

### 🛠️ Étapes de Débogage

1. Ouvrez `exercice1.js` dans VS Code et placez un **point d'arrêt (breakpoint)** dans la boucle `for` à la ligne `7`.
2. Lancez votre session de débogage (`F5`).
3. Cliquez sur le bouton **"Compter jusqu'à 10"** dans votre navigateur.
4. Inspectez la valeur de `i` dans le panneau **VARIABLES** de VS Code.
5. Remarquez que `i` commence à `0` au lieu de `1` et s'arrête à `9`.

### 💡 Solution

Modifiez la boucle pour que `i` commence à `1` et que la condition soit `i <= 10` :

```javascript
for (let i = 1; i <= 10; i++) {
    let li = document.createElement('li');
    li.textContent = `Élément numéro : ${i}`;
    listElement.appendChild(li);
}
```

---

## Exercice 2 : La Calculatrice de Concaténation

### Description du problème

Cette calculatrice de total d'achats doit additionner les prix de deux articles. Cependant, en entrant `20` et `30`, le total affiché est `2030` au lieu de `50`.

### 1. HTML (`exercice2.html`)

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Exercice 2 - Erreur de Type</title>
</head>
<body>
    <h1>Calculateur de Total</h1>
    <div>
        <label>Prix Article 1 : </label>
        <input type="number" id="price1" value="20">
    </div>
    <div>
        <label>Prix Article 2 : </label>
        <input type="number" id="price2" value="30">
    </div>
    <button id="calcBtn">Calculer le Total</button>
    <h2 id="totalOutput"></h2>

    <script src="exercice2.js"></script>
</body>
</html>
```

### 2. JavaScript Défectueux (`exercice2.js`)

```javascript
document.getElementById('calcBtn').addEventListener('click', () => {
    let item1 = document.getElementById('price1').value; // Placez un point d'arrêt ici !
    let item2 = document.getElementById('price2').value;

    let total = calculateSum(item1, item2);

    document.getElementById('totalOutput').innerText = `Total : ${total} €`;
});

function calculateSum(a, b) {
    // BUG : Les valeurs transmises sont des chaînes de caractères, provoquant une concaténation
    return a + b; 
}
```

### 🛠️ Étapes de Débogage

1. Placez un point d'arrêt à la ligne `6` (`return a + b;`) à l'intérieur de `calculateSum`.
2. Cliquez sur **Calculer le Total** dans le navigateur.
3. Survolez `a` et `b` avec votre curseur dans VS Code. Remarquez que leurs valeurs sont `"20"` et `"30"` (des chaînes entre guillemets) et non des nombres !
4. Utilisez la **CONSOLE DE DÉBOGAGE** (`Ctrl+Shift+Y` ou `Cmd+Shift+Y`) pour tester `typeof a` et comprendre pourquoi l'opérateur `+` les concatène.

### 💡 Solution

Convertissez les chaînes issues des champs texte en nombres avec `parseFloat()` ou `Number()` :

```javascript
function calculateSum(a, b) {
    return parseFloat(a) + parseFloat(b);
}
```

---

## Exercice 3 : L'Échec du Chargement Asynchrone

### Description du problème

Cette carte de profil tente de récupérer des données utilisateur de manière asynchrone pour mettre à jour l'interface. Malheureusement, le code met à jour l'affichage avant que les données n'arrivent, affichant une erreur.

### 1. HTML (`exercice3.html`)

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Exercice 3 - Bug Asynchrone</title>
</head>
<body>
    <h1>Profil Utilisateur</h1>
    <button id="loadBtn">Charger le Profil</button>
    <div id="userCard" style="margin-top: 15px;"></div>

    <script src="exercice3.js"></script>
</body>
</html>
```

### 2. JavaScript Défectueux (`exercice3.js`)

```javascript
document.getElementById('loadBtn').addEventListener('click', () => {
    let userData = fetchUserData(); // Placez un point d'arrêt ici !
    
    // BUG : Tentative de rendu des données avant la fin de l'opération asynchrone
    renderUser(userData);
});

function fetchUserData() {
    let user = null;
    
    // Simulation d'un appel API asynchrone avec setTimeout
    setTimeout(() => {
        user = {
            name: "Alex Dupont",
            role: "Développeur",
            email: "alex@example.com"
        };
    }, 1000);

    return user; // Renvoie null immédiatement avant la fin du setTimeout !
}

function renderUser(data) {
    let container = document.getElementById('userCard');
    if (!data) {
        container.innerHTML = `<p style="color:red;">Erreur : Aucune donnée utilisateur disponible !</p>`;
    } else {
        container.innerHTML = `<p><strong>Nom :</strong> ${data.name}</p>
                               <p><strong>Rôle :</strong> ${data.role}</p>`;
    }
}
```

### 🛠️ Étapes de Débogage

1. Placez un point d'arrêt à la ligne `2` (`let userData = fetchUserData();`) et à la ligne `18` (`return user;`).
2. Cliquez sur **Charger le Profil**.
3. Utilisez l'option **Pas à pas principal / Step Over (F10)** pour suivre l'exécution. Remarquez que `fetchUserData()` retourne `null` avant même que le rappel (callback) dans `setTimeout` ne soit exécuté.

### 💡 Solution

Utilisez des `Promises` avec `async/await` pour gérer le délai asynchrone correctement :

```javascript
document.getElementById('loadBtn').addEventListener('click', async () => {
    let userData = await fetchUserData();
    renderUser(userData);
});

function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Alex Dupont",
                role: "Développeur",
                email: "alex@example.com"
            });
        }, 1000);
    });
}
```