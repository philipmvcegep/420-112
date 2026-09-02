+++
date = '2026-09-02T13:35:59-04:00'
draft = false
title = 'Exercices'
weight = 5
+++



### Exercice 1 : Introduction au style direct et externe
* **Objectif** : Mettre en pratique la liaison d'une feuille de style et modifier l'apparence de base.
* **Consigne** :
  1. Créez une page HTML avec un titre `<h1>`, un sous-titre `<h2>` et deux paragraphes `<p>`.
  2. Liez un fichier `style.css` externe à votre page.
  3. Dans `style.css`, changez la couleur du texte du titre en bleu, donnez une couleur d'arrière-plan claire à votre page entière (sur la balise `body`), et modifiez la police de caractères (`font-family`).

### Exercice 2 : La réutilisabilité des classes
* **Objectif** : Apprendre à cibler des éléments précis sans modifier toutes les balises du même type.
* **Consigne** :
  1. Écrivez une liste de 4 éléments (`<ul>` et `<li>`).
  2. Créez une classe nommée `.important`.
  3. Appliquez cette classe à **deux** des quatre éléments de la liste de votre choix.
  4. Dans votre CSS, faites en sorte que les éléments possédant cette classe s'affichent en **gras** et avec une couleur de texte rouge ou orange.

### Exercice 3 : Cumuler les classes (Variantes)
* **Objectif** : Combiner une classe générale et une classe spécifique sur un même élément.
* **Consigne** :
  1. Créez trois boutons `<button>` sur votre page.
  2. Donnez à tous les boutons une classe de base `.btn` (qui applique une bordure, un espacement `padding` et supprime le fond par défaut).
  3. Donnez au premier bouton une classe supplémentaire `.btn-valider` (fond vert, texte blanc).
  4. Donnez au deuxième bouton une classe `.btn-annuler` (fond rouge, texte blanc).
  5. Laissez le troisième bouton avec seulement `.btn`.

### Exercice 4 : L'unicité de l'ID
* **Objectif** : Utiliser un identifiant unique pour structurer une zone clé de la page.
* **Consigne** :
  1. Créez un bloc de type `<header>` et donnez-lui un ID unique : `id="en-tete-site"`.
  2. À l'intérieur, ajoutez un titre et un petit texte de description.
  3. Dans votre CSS, ciblez cet ID pour lui donner un fond sombre, un texte blanc et un alignement centré.
  4. Essayez (mentalement ou dans le code) de voir pourquoi on ne remettrait pas cet ID sur un autre élément de la page.

### Exercice 5 : Sélecteurs avancés et interactions
* **Objectif** : Utiliser un combinateur, une pseudo-classe d'état (`:hover`) et une position (`:nth-child`).
* **Consigne** :
  1. Créez une liste de 5 éléments. Utilisez le sélecteur `:nth-child(even)` pour donner une couleur de fond gris clair à une ligne sur deux.
  2. Ajoutez un lien hypertexte `<a href="#">Cliquez-moi</a>`. Utilisez la pseudo-classe `:hover` pour que, lorsque la souris passe sur le lien, la couleur du texte change et le soulignement disparaisse (`text-decoration: none;`).
  3. Créez un titre `<h1>` suivi immédiatement d'un paragraphe `<p>`. Utilisez le combinateur de frère adjacent (`h1 + p`) pour grossir un peu le texte de ce paragraphe précis.