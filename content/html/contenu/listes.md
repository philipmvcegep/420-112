+++
date = '2026-08-25T15:35:16-04:00'
draft = false
title = 'Listes'
weight = 1
+++
Les listes en HTML sont souvent de deux natures: ordonnée et non-ordonnée. On peut voir les deux simplement comme une énumération ou une `bullet list`. 

Exemple d'énumération: 

```html
<ol>
  <li>Remplir le formulaire en ligne</li>
  <li>Contacter un agent pour régler</li>
  <li>Organiser une rencontre avec un employé</li>
</ol>
```

Exemple de `bullet list`: 

```html
<ul>
  <li>Poivrons</li>
  <li>Thé</li>
  <li>Cerises</li>
</ul>
```

On peut voir que les deux listes sont composées de trois éléments: `<ul>`, `<ol>` et `<li>`. `<ul>` veut simplement dire `Unordered List` (liste non-ordonnée), tandis que `<ol>` signifie  `Ordered List` (liste ordonnée). Chaque item dans la liste est un `List Item`, soit `<li>`. 

> Il est important de bien fermer fermer les balises dans la hiérarchie. Ainsi, on ne ferme jamais une balise de cette manière: `<a><b></a></b>`. Il faut toujours suivre cette formule: `<a><b></b></a>`.