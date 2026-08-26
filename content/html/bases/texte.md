+++
date = '2026-08-25T15:31:30-04:00'
draft = false
title = 'Texte'
weight = 4
+++



Le HTML permet de structurer le texte d'une page. Les balises indiquent au navigateur quel rôle joue chaque partie du contenu.

## Paragraphes

La balise `<p>` permet de créer un paragraphe.

```html
<p>
  Ceci est un paragraphe.
</p>

<p>
  Ceci est un autre paragraphe.
</p>
```

Chaque `<p>` forme un bloc distinct.

## Titres

Les balises `<h1>` à `<h6>` permettent de créer des titres de différents niveaux.

```html
<h1>Titre principal</h1>

<h2>Sous-titre</h2>

<h3>Sous-sous-titre</h3>
```

`<h1>` est le niveau le plus important et `<h6>` le moins important.

On peut les voir comme une hiérarchie :

```text
h1
├── h2
│   ├── h3
│   └── h3
└── h2
    └── h3
```

Il ne faut pas choisir un titre uniquement parce qu'il est plus gros ou plus petit. Le niveau du titre représente sa **place dans la structure du document**.

## La police et la taille

On peut modifier l'apparence du texte avec `style` :

```html
<p style="font-family: Arial;">
  Texte en Arial
</p>

<p style="font-size: 24px;">
  Texte plus grand
</p>
```

On peut combiner les deux :

```html
<p style="font-family: Arial; font-size: 24px;">
  Un texte personnalisé
</p>
```


En réalité, c'est un exemple de mauvais code. Avec un code plus long, il devient difficile de voir à quel endroit les styles sont appliqués. 

Nous verrons plus tard comment faire ces changements avec CSS plutôt que directement dans le HTML. Ceci nous permettre d'appliquer un style à un groupe de balise plutôt que de le faire individuellement. 

Le HTML permet aussi de modifier la façon dont le texte est présenté.

## Retour à la ligne

La balise `<br>` force un retour à la ligne.

```html
<p>
  Première ligne<br>
  Deuxième ligne
</p>
```

Il n'est généralement pas nécessaire d'utiliser plusieurs `<br>` pour créer de l'espace entre des éléments. 

## Gras et italique

Pour mettre un texte en évidence, on peut utiliser `<strong>` :

```html
<p>Ceci est <strong>important</strong>.</p>
```

Pour donner de l'emphase à un texte, on peut utiliser `<em>` :

```html
<p>Ceci est <em>important</em>.</p>
```

Le navigateur affiche généralement `<strong>` en **gras** et `<em>` en *italique*.


## Quelques autres balises

```html
<p><strong>Texte important</strong></p>

<p><em>Texte en emphase</em></p>

<p><u>Texte souligné</u></p>

<p><s>Texte barré</s></p>
```

## Modifier l'apparence avec `style`

Pour modifier directement l'apparence d'un élément, on peut utiliser l'attribut `style`.

```html
<p style="color: red;">Texte rouge</p>

<p style="font-size: 24px;">Texte plus grand</p>

<p style="text-align: center;">Texte centré</p>
```

On peut combiner plusieurs propriétés :

```html
<p style="color: blue; font-size: 24px;">
  Bonjour!
</p>
```

Chaque propriété est séparée par un `;`.

## À retenir

```text
<h1> → <h6>   titres
<p>            paragraphes
<strong>       importance
<em>           emphase
<br>           retour à la ligne
```

Le HTML sert d'abord à **structurer le contenu**. Son apparence sera de plus en plus prise en charge par CSS.

