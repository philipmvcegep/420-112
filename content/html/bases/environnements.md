+++
date = '2026-08-25T15:31:51-04:00'
draft = false
title = 'Environnements'
weight = 2
+++


Pour faire du HTML, on a besoin de deux choses principales :

- un **éditeur de code** pour écrire notre HTML;
- un **navigateur** pour voir le résultat.

## Les fichiers HTML

Une page HTML est un fichier texte dont l'extension est `.html`.

Par exemple :

```text
index.html
```

On peut créer un fichier texte et changer son extension de `.txt` à `.html`.

> **Attention :** si les extensions sont masquées dans l'Explorateur de fichiers, `index.txt` pourrait apparaître simplement comme `index`. Activez l'affichage des extensions pour pouvoir réellement changer `.txt` en `.html`.

## Du fichier à la page

Le fichier HTML est enregistré sur notre ordinateur. Le navigateur peut ensuite le lire et afficher son contenu.

```text
index.html
    ↓
navigateur
    ↓
page affichée
```


On peut simplement ouvrir `index.html` dans un navigateur. L'adresse commencera généralement par `C:/Users` et aura souvent une indication **File**, ce qui indique que le navigateur ouvre un fichier local et non un vrai site sur Internet.

## Notre boucle de travail

On va constamment faire ceci :

```text
modifier → enregistrer → actualiser → observer
```

L'**éditeur** nous permet de modifier le fichier. On peut choisir Notepad, Notepad++ ou même Vim (un outil plus avancé pour naviguer dans un document avec le clavier au lieu de la souris).

Le **navigateur** nous permet de voir ce que ce fichier produit. C'est simplement une application comme Google Chrome, Firefox, Microsoft Edge. Ils sont conçus pour afficher du contenu HTML (CSS et javascript également).

Souvent, les développeurs aiment utiliser un outil qui permet de voir l'arborescence des dossiers et des fichiers, tout en pouvant modifier leur contenu.  Ils facilitent aussi la boucle de travail et permettent de faire des projets plus complexes. C'est une `IDE` (environnement de développement)

![VSCode](https://code.visualstudio.com/assets/blogs/2021/10/20/vscode-dev.png "VS Code")

Exemples: VSCode (ci-dessus), IntelliJ (java), Pycharm (python)

Il y a un débat sur le fait que VSCode est réellement une `IDE`. D'autres logiciels offrent nativement un support aux langages (python, java), recommandent parfois des améliorations et repèrent aussi des bugs potentiels. 