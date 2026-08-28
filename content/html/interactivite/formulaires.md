+++
date = '2026-08-25T15:36:21-04:00'
draft = false
title = 'Formulaires'
weight = 2
+++
Le formulaire HTML est le principal moyen pour un utilisateur d'interagir avec une application web et d'envoyer des données au serveur. Tout part de la balise `<form>`.

```html
<form action="/traitement" method="POST">
  <!-- Champ texte classique -->
  <div>
    <label for="nom">Nom d'utilisateur :</label>
    <input type="text" id="nom" name="username" required>
  </div>

  <!-- Mot de passe -->
  <div>
    <label for="mdp">Mot de passe :</label>
    <input type="password" id="mdp" name="password" required>
  </div>

  <!-- Bouton de soumission -->
  <button type="submit">Envoyer</button>
</form>
```

Attributs indispensables dans un formulaire:

- `action` : L'URL du script (côté serveur) qui va traiter les données du formulaire.

- `method` : La méthode HTTP utilisée pour envoyer les données (GET pour les récupérer dans l'interface du serveur, POST pour les transmettre au serveur à distance).

- `name` : Attribut obligatoire sur chaque champ (input, select, textarea) pour que le serveur puisse identifier la variable reçue.

- `for` (sur le <label>) : Doit correspondre exactement à l'attribut id du champ associé pour des raisons d'accessibilité (permet de cliquer sur le texte pour focus le champ).

> note: pour l'instant, les formulaires ne seront pas interactifs. Pour communiquer réellement avec un serveur, nous allons avoir besoin de Javascript.

```html
  <!-- Choix multiples (Radio) -->
  <fieldset>
    <legend>Niveau d'études :</legend>
    <label><input type="radio" name="niveau" value="dec" checked> DEC</label>
    <label><input type="radio" name="niveau" value="aec"> AEC</label>
  </fieldset>

  <!-- Cases à cocher (Checkbox) -->
  <div>
    <label>
      <input type="checkbox" name="newsletter" value="oui"> S'abonner à l'infolettre
    </label>
  </div>

  <!-- Liste déroulante -->
  <div>
    <label for="cours-prefere">Cours préféré :</label>
    <select id="cours-prefere" name="cours">
      <option value="web">Développement Web</option>
      <option value="ai">Intelligence Artificielle</option>
      <option value="db">Bases de données</option>
    </select>
  </div>

  <!-- Zone de texte multiligne -->
  <div>
    <label for="commentaires">Commentaires :</label>
    <textarea id="commentaires" name="comm" rows="4" cols="50"></textarea>
  </div>

    <!-- Bouton de soumission -->
  <button type="submit">Envoyer</button>
</form>
```

On voit dans le bloc ci-haut différents types de formulaire:


- `type="text"` : Champ de texte standard sur une seule ligne.

- `type="password"` : Masque les caractères saisis (sécurité visuelle).

- `type="email"` / `type="number"` / `type="date"` : Ajoutent une validation native par le fureteur avant même l'envoi.

- `type="radio"` : Permet de sélectionner une seule option parmi un groupe (le lien se fait via le même attribut name).

- `type="checkbox"` : Permet de cocher zéro, une ou plusieurs options indépendantes.

- `type="submit"` : Déclenche l'envoi des données du formulaire vers le serveur.