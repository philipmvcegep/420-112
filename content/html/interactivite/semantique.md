+++
date = '2026-08-25T15:36:32-04:00'
draft = false
title = 'Semantique'
weight = 1
+++
Les balises sémantiques sont un ajout en HTML5. Ils permettent aux personnes non-voyantes de bien identifier les blocs HTML et permettent aussi un meilleur placement dans les moteurs de recherche comme Google. On parle ainsi de `SEO`, le `search engine optimization`.

En gros, on n'utilise pas de `<div>` partout.

Voici les balises les plus courantes: 

```html
<header>
  <!-- En-tête de la page ou d'une section (logo, titre principal, etc.) -->
</header>

<nav>
  <!-- Zone contenant les liens de navigation principaux -->
</nav>

<main>
  <!-- Le contenu central et unique de la page -->
</main>

<footer>
  <!-- Le pied de page (copyrights, liens légaux, contact) -->
</footer>
```

Dans la page, on peut aussi structurer le contenu textuel avec les balises suivantes: 

```html
<section>
  <!-- Une section thématique du contenu -->
  
  <article>
    <!-- Un contenu autonome et indépendant (ex: un article de blog, un post) -->
  </article>

  <aside class="sidenote">
    <!-- Un contenu tangentiel ou une note en marge (ex: encadré, info-bulle) -->
  </aside>
</section>
```

Voici un exemple de page avant les balises sémantiques:

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Exemple avec Divs</title>
</head>
<body>

    <div class="header">
        <h1>Mon Cours de Programmation</h1>
        <p>Semaine 3 : HTML Sémantique</p>
    </div>

    <div class="nav">
        <ul>
            <li><a href="#cours">Cours</a></li>
            <li><a href="#exercices">Exercices</a></li>
        </ul>
    </div>

    <div class="main">
        <div id="cours" class="section">
            <h2>Organisation du contenu</h2>
            <p>On utilise des balises explicites pour structurer la page de manière logique.</p>
            
            <div class="sidenote">
                <p><strong>Note :</strong> Avec des div, rien n'indique au navigateur ou aux lecteurs d'écran le rôle réel de ce bloc.</p>
            </div>
        </div>
    </div>

    <div class="footer">
        <p>&copy; 2026 - Département d'informatique</p>
    </div>

</body>
</html>
```

Voici le même code avec les balises sémantiques:

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Exemple Sémantique</title>
</head>
<body>

    <header>
        <h1>Mon Cours de Programmation</h1>
        <p>Semaine 3 : HTML Sémantique</p>
    </header>

    <nav>
        <ul>
            <li><a href="#cours">Cours</a></li>
            <li><a href="#exercices">Exercices</a></li>
        </ul>
    </nav>

    <main>
        <section id="cours">
            <h2>Organisation du contenu</h2>
            <p>On utilise des balises explicites pour structurer la page de manière logique.</p>
            
            <aside class="sidenote">
                <p><strong>Note :</strong> La balise <code>&lt;aside&gt;</code> permet de créer facilement une sidenote en marge du texte principal.</p>
            </aside>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 - Département d'informatique</p>
    </footer>

</body>
</html>
```
