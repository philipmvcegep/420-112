+++
date = '2026-09-02T13:33:46-04:00'
draft = false
title = 'Classes'
weight = 2
+++

Dans le chapitre précédent, nous avons vu comment cibler des balises HTML de manière globale (comme `h1` ou `p`). Mais en pratique, on veut rarement que *tous* les paragraphes ou *tous* les boutons aient exactement la même apparence. C'est là que les **classes** deviennent indispensables.

### 1. Qu'est-ce qu'une classe ?
Une classe est un identifiant réutilisable que l'on crée et que l'on attribue librement à n'importe quel élément HTML grâce à l'attribut `class="..."`. 

* **Analogie** : Pensez à un uniforme ou à un badge de rôle. Plusieurs personnes (différents éléments HTML) peuvent porter le même badge "Membre VIP" ou "Admin" (la classe), ce qui leur donne le même style ou les mêmes droits, sans pour autant être la même personne ni avoir la même structure de base.

### 2. Exemple 1 : Une classe partagée sur différents éléments
Une classe n'est pas réservée à une seule balise. On peut appliquer la même classe sur un titre, un paragraphe ou un bouton.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Exemple de classes</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 class="mise-en-avant">Bienvenue sur mon site</h1>
    <p>Ceci est un paragraphe standard, sans style particulier.</p>
    <p class="mise-en-avant">Ce paragraphe est important et utilise la même classe que le titre !</p>
    <button class="mise-en-avant">Cliquez ici</button>
</body>
</html>
```

En CSS, on cible cette classe avec un point (`.`) :
```css
.mise-en-avant {
  color: #ff5722;
  background-color: #ffebee;
  padding: 5px;
  border-left: 4px solid #ff5722;
}
```

### 3. Exemple 2 : Cumuler plusieurs classes sur un même élément
En HTML, un élément peut posséder **plusieurs classes** en séparant leurs noms par un simple espace. C'est une technique extrêmement puissante et courante (utilisée dans des frameworks comme Bootstrap ou Tailwind).

Imaginons qu'on veuille créer des boutons de tailles ou de couleurs différentes :

```html
<!-- HTML -->
<button class="btn btn-rouge">Supprimer</button>
<button class="btn btn-vert">Confirmer</button>
<button class="btn btn-rouge grand">Alerte Critique</button>
```

Le code CSS correspondant sépare la logique générale (`.btn`) de la logique spécifique (`.btn-rouge`, `.btn-vert`, `.grand`) :

```css
/* Style de base commun à tous les boutons */
.btn {
  padding: 10px 20px;
  border: none;
  font-family: inherit;
  cursor: pointer;
}

/* Variantes de couleur */
.btn-rouge {
  background-color: #d32f2f;
  color: white;
}

.btn-vert {
  background-color: #388e3c;
  color: white;
}

/* Variante de taille */
.grand {
  font-size: 18px;
  font-weight: bold;
}
```

### 4. Bonnes pratiques de nommage
* **La casse** : Le CSS est sensible à la casse (`maClasse` et `maclasse` sont deux choses différentes). Par convention, on utilise plutôt le format *kebab-case* (des minuscules séparées par des tirets, ex: `texte-important`, `carte-produit`).
* **Sémantique visuelle** : Évitez de nommer vos classes selon leur couleur (ex: `.texte-rouge`), car si vous changez le design plus tard pour du bleu, le nom n'aura plus de sens. Préférez nommer selon le rôle (ex: `.alerte`, `.succes`, `.prix`).