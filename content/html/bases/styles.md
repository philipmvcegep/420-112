

Le HTML permet aussi de modifier la façon dont le texte est présenté.

## Retour à la ligne

La balise `<br>` force un retour à la ligne.

```html
<p>
  Première ligne<br>
  Deuxième ligne
</p>
```

Il n'est généralement pas nécessaire d'utiliser plusieurs `<br>` pour créer de l'espace entre des éléments. Nous verrons plus tard comment faire cela avec CSS.

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

Ces balises ne servent pas seulement à changer l'apparence : elles donnent aussi une information sur le sens du texte.

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

> 💡 `style=""` est pratique pour nos premiers essais. Plus tard, nous utiliserons **CSS** pour gérer les styles de manière plus propre et plus efficace.