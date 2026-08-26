+++
date = '2026-08-25T15:35:45-04:00'
draft = false
title = 'Tableaux'
weight = 2
+++

Les tableaux suivent la logique des listes vues avant. Les éléments sont placés en hiérarchie, du plus gros élément (le plus englobant) vers l'élément le plus petit.

> Note: On appelle souvent l'élément le plus petit la granularité, ou plus familièrement le niveau de détail. 

Exemple de tableau: 

```html

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
```
(tiré de w3schools)

Ici, `<td>` représente un `table data` (donnée de table), alors que `<tr>` représente un `table row` (rangée de table) et `<table>` est la table elle-même. On peut vérifier que la règle de fermeture est vérifiée: `<a><b><c></c></b></a>`

Aussi, `<th>` est `table header` (nom de la colonne). C'est seulement le titre d'une colonne, comme dans Excel.


Regardez l'exemple suivant: 
```html
<table>
  <thead>
    <tr>
      <th>Produit</th>
      <th>Prix</th>
      <th>Stock</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Clavier</td>
      <td>49,99 $</td>
      <td>12</td>
    </tr>
    <tr>
      <td>Souris</td>
      <td>29,99 $</td>
      <td>25</td>
    </tr>
  </tbody>
</table>
```

Les balises `<thead>` et `<tbody>` servent à délimiter l'en-tête et le corps du texte. On peut commencer à deviner l'allure du tableau tout simplement en regardant la structure des balises HTML. Ils seront aussi utiles avec CSS, car ils définissent une catégorie.

Lorsque nos balises sont bien délimités et bien écrites, il est plus facile de comprendre la structure!