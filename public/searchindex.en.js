var relearn_searchindex = [
  {
    "breadcrumb": "allo monde \u003e Html",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Bases",
    "uri": "/html/bases/index.html"
  },
  {
    "breadcrumb": "allo monde \u003e Html \u003e Interactivite",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Semantique",
    "uri": "/html/interactivite/semantique/index.html"
  },
  {
    "breadcrumb": "allo monde \u003e Html \u003e Contenu",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Listes",
    "uri": "/html/contenu/listes/index.html"
  },
  {
    "breadcrumb": "allo monde \u003e Html",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Contenu",
    "uri": "/html/contenu/index.html"
  },
  {
    "breadcrumb": "allo monde \u003e Html \u003e Interactivite",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Formulaires",
    "uri": "/html/interactivite/formulaires/index.html"
  },
  {
    "breadcrumb": "allo monde \u003e Html \u003e Contenu",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tableaux",
    "uri": "/html/contenu/tableaux/index.html"
  },
  {
    "breadcrumb": "allo monde \u003e Html",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Interactivite",
    "uri": "/html/interactivite/index.html"
  },
  {
    "breadcrumb": "allo monde \u003e Html \u003e Interactivite",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Controle de formulaire",
    "uri": "/html/interactivite/controles_formulaire/index.html"
  },
  {
    "breadcrumb": "allo monde \u003e Html \u003e Contenu",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Media",
    "uri": "/html/contenu/media/index.html"
  },
  {
    "breadcrumb": "allo monde \u003e Html \u003e Interactivite",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Selecteurs",
    "uri": "/html/interactivite/selecteurs/index.html"
  },
  {
    "breadcrumb": "allo monde \u003e Html \u003e Contenu",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Navigation",
    "uri": "/html/contenu/navigation/index.html"
  },
  {
    "breadcrumb": "allo monde \u003e Html \u003e Interactivite",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Sujets avances",
    "uri": "/html/interactivite/sujets_avances/index.html"
  },
  {
    "breadcrumb": "allo monde \u003e Html \u003e Bases",
    "content": "Structure\rUne page HTML possède une structure de base qui indique au navigateur comment interpréter le document.\nLa structure minimale\r\u003c!DOCTYPE html\u003e \u003chtml\u003e \u003chead\u003e \u003ctitle\u003eMa page\u003c/title\u003e \u003c/head\u003e \u003cbody\u003e Bonjour! \u003c/body\u003e \u003c/html\u003e\r\u003c!DOCTYPE html\u003e\rIndique au navigateur que le document utilise HTML5.\n\u003chtml\u003e\rContient l’ensemble du document HTML.\n\u003chead\u003e\rContient des informations sur la page qui ne sont généralement pas affichées directement.\nOn y trouve notamment le titre de la page, des styles et d’autres informations.\n\u003cbody\u003e\rContient ce qui sera affiché dans la page.\n\u003cbody\u003e \u003ch1\u003eBonjour!\u003c/h1\u003e \u003cp\u003eBienvenue.\u003c/p\u003e \u003c/body\u003e\rLes sources\rUne page peut utiliser plusieurs types de fichiers :\npage.html style.css script.js image.png\rLe HTML peut faire référence à ces fichiers pour construire la page.\nPar exemple, un fichier CSS peut être chargé dans le \u003chead\u003e :\n\u003chead\u003e \u003clink rel=\"stylesheet\" href=\"style.css\"\u003e \u003c/head\u003e\rLe navigateur va alors utiliser style.css pour appliquer les styles à la page.\nUne page comme ensemble\rOn peut donc voir une page Web comme un ensemble de ressources :\npage.html │ ┌───────┼───────┐ ↓ ↓ ↓ style script images .css .js .png │ │ │ └───────┼───────┘ ↓ navigateur ↓ page affichée\rLe fichier HTML constitue la structure de base. Les autres ressources peuvent venir compléter cette structure.",
    "description": "Structure\rUne page HTML possède une structure de base qui indique au navigateur comment interpréter le document.\nLa structure minimale\r\u003c!DOCTYPE html\u003e \u003chtml\u003e \u003chead\u003e \u003ctitle\u003eMa page\u003c/title\u003e \u003c/head\u003e \u003cbody\u003e Bonjour! \u003c/body\u003e \u003c/html\u003e\r\u003c!DOCTYPE html\u003e\rIndique au navigateur que le document utilise HTML5.",
    "tags": [],
    "title": "Structure",
    "uri": "/html/bases/structure/index.html"
  },
  {
    "breadcrumb": "allo monde \u003e Html \u003e Bases",
    "content": "Inspecter\rLe navigateur ne fait pas qu’afficher une page. Il permet aussi de regarder comment cette page est construite.\nPour ouvrir les outils de développement, on peut :\nappuyer sur F12; faire un clic droit sur une partie de la page et choisir Inspecter. Les éléments\rDans les outils de développement, l’onglet Elements (ou Éléments) permet de voir le HTML de la page.\nOn peut y retrouver les différentes balises :\n\u003ch1\u003eBonjour\u003c/h1\u003e \u003cp\u003eBienvenue sur ma page!\u003c/p\u003e\rOn peut cliquer sur un élément dans la page pour voir directement le HTML qui lui correspond.\nOn peut aussi cliquer sur une balise dans les outils de développement pour voir où elle se trouve dans la page.\nLes sources\rL’onglet Sources permet de voir les fichiers utilisés par la page.\nOn peut notamment y retrouver :\nles fichiers HTML; les fichiers CSS; les fichiers JavaScript; les images et autres ressources. Pour notre cours, les fichiers HTML que nous créons localement apparaîtront également dans les sources lorsque nous les ouvrons dans le navigateur.\nInspecter directement un élément\rLe bouton Inspecter permet de sélectionner un élément directement dans la page.\nOn peut ensuite observer :\npage ↓ élément sélectionné ↓ HTML correspondant\rC’est particulièrement utile pour comprendre la relation entre ce qu’on voit à l’écran et le code HTML qui le produit.\n💡 Pendant le cours, utilisez souvent Inspecter pour explorer les pages et faire des liens entre le code et le résultat visuel.",
    "description": "Inspecter\rLe navigateur ne fait pas qu’afficher une page. Il permet aussi de regarder comment cette page est construite.\nPour ouvrir les outils de développement, on peut :\nappuyer sur F12; faire un clic droit sur une partie de la page et choisir Inspecter. Les éléments\rDans les outils de développement, l’onglet Elements (ou Éléments) permet de voir le HTML de la page.",
    "tags": [],
    "title": "Inspect",
    "uri": "/html/bases/inspect/index.html"
  },
  {
    "breadcrumb": "allo monde \u003e Html \u003e Bases",
    "content": "Environnement\rPour faire du HTML, on a besoin de deux choses principales :\nun éditeur de code pour écrire notre HTML; un navigateur pour voir le résultat. Les fichiers HTML\rUne page HTML est un fichier texte dont l’extension est .html.\nPar exemple :\nindex.html\rOn peut créer un fichier texte et changer son extension de .txt à .html.\nAttention : si les extensions sont masquées dans l’Explorateur de fichiers, index.txt pourrait apparaître simplement comme index. Activez l’affichage des extensions pour pouvoir réellement changer .txt en .html.\nDu fichier à la page\rLe fichier HTML est enregistré sur notre ordinateur. Le navigateur peut ensuite le lire et afficher son contenu.\nindex.html ↓ navigateur ↓ page affichée\rIl n’y a pas besoin d’Internet ou d’un serveur pour commencer.\nOn peut simplement ouvrir index.html dans un navigateur. L’adresse commencera généralement par file://, ce qui indique que le navigateur ouvre un fichier local.\nNotre boucle de travail\rOn va constamment faire ceci :\nmodifier → enregistrer → actualiser → observer\rL’éditeur nous permet de modifier le fichier.\nLe navigateur nous permet de voir ce que ce fichier produit.",
    "description": "Environnement\rPour faire du HTML, on a besoin de deux choses principales :\nun éditeur de code pour écrire notre HTML; un navigateur pour voir le résultat. Les fichiers HTML\rUne page HTML est un fichier texte dont l’extension est .html.\nPar exemple :",
    "tags": [],
    "title": "Environnements",
    "uri": "/html/bases/environnements/index.html"
  },
  {
    "breadcrumb": "allo monde \u003e Html \u003e Bases",
    "content": "Texte\rLe HTML permet de structurer le texte d’une page. Les balises indiquent au navigateur quel rôle joue chaque partie du contenu.\nParagraphes\rLa balise \u003cp\u003e permet de créer un paragraphe.\n\u003cp\u003e Ceci est un paragraphe. \u003c/p\u003e \u003cp\u003e Ceci est un autre paragraphe. \u003c/p\u003e\rChaque \u003cp\u003e forme un bloc distinct.\nTitres\rLes balises \u003ch1\u003e à \u003ch6\u003e permettent de créer des titres de différents niveaux.\n\u003ch1\u003eTitre principal\u003c/h1\u003e \u003ch2\u003eSous-titre\u003c/h2\u003e \u003ch3\u003eSous-sous-titre\u003c/h3\u003e\r\u003ch1\u003e est le niveau le plus important et \u003ch6\u003e le moins important.\nOn peut les voir comme une hiérarchie :\nh1 ├── h2 │ ├── h3 │ └── h3 └── h2 └── h3\rIl ne faut pas choisir un titre uniquement parce qu’il est plus gros ou plus petit. Le niveau du titre représente sa place dans la structure du document.\nLa police et la taille\rOn peut modifier l’apparence du texte avec style :\n\u003cp style=\"font-family: Arial;\"\u003e Texte en Arial \u003c/p\u003e \u003cp style=\"font-size: 24px;\"\u003e Texte plus grand \u003c/p\u003e\rOn peut combiner les deux :\n\u003cp style=\"font-family: Arial; font-size: 24px;\"\u003e Un texte personnalisé \u003c/p\u003e\rNous verrons plus tard comment faire ces changements avec CSS plutôt que directement dans le HTML.\nÀ retenir\r\u003ch1\u003e → \u003ch6\u003e titres \u003cp\u003e paragraphes \u003cstrong\u003e importance \u003cem\u003e emphase \u003cbr\u003e retour à la ligne\rLe HTML sert d’abord à structurer le contenu. Son apparence sera de plus en plus prise en charge par CSS.",
    "description": "Texte\rLe HTML permet de structurer le texte d’une page. Les balises indiquent au navigateur quel rôle joue chaque partie du contenu.\nParagraphes\rLa balise \u003cp\u003e permet de créer un paragraphe.\n\u003cp\u003e Ceci est un paragraphe. \u003c/p\u003e \u003cp\u003e Ceci est un autre paragraphe. \u003c/p\u003e\rChaque \u003cp\u003e forme un bloc distinct.",
    "tags": [],
    "title": "Texte",
    "uri": "/html/bases/texte/index.html"
  },
  {
    "breadcrumb": "allo monde",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Html",
    "uri": "/html/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "allo monde",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "allo monde",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "allo monde",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
