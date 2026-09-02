+++
date = '2026-09-02T13:34:06-04:00'
draft = false
title = 'Ids'
weight = 3
+++

Après les classes qui servent à regrouper et réutiliser, passons aux **IDs**. Contrairement aux classes, un ID sert à cibler un élément **unique** sur toute la page.

### 1. Qu'est-ce qu'un ID ?
Un ID (pour identifiant) est une balise d'unicité absolue. 

* **Analogie** : Pensez au numéro de passeport ou au NAS (numéro d'assurance sociale). Il ne peut y avoir qu'une seule personne avec ce numéro exact sur toute la planète. En HTML, un ID ne peut être présent qu'**une seule fois** par page web.

### 2. Utilisation en HTML
On utilise l'attribut `id="..."` pour nommer un élément unique (comme un en-tête principal, un pied de page, ou un formulaire de contact spécifique).

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Exemple d'ID</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header id="entete-principal">
        <h1>Mon Site Web</h1>
    </header>

    <main>
        <p>Un paragraphe normal.</p>
    </main>

    <footer id="pied-de-page">
        <p>&copy; 2026 - Tous droits réservés</p>
    </footer>
</body>
</html>