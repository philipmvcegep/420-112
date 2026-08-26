var relearn_searchindex = [
  {
    "breadcrumb": "Sites Web \u003e Html",
    "content": "Ce chapitre aborde les bases du HTML, il vous aidera à comprendre et faire votre premier code HTML.",
    "description": "Ce chapitre aborde les bases du HTML, il vous aidera à comprendre et faire votre premier code HTML.",
    "tags": [],
    "title": "Bases",
    "uri": "/html/bases/index.html"
  },
  {
    "breadcrumb": "Sites Web \u003e Html \u003e Interactivite",
    "content": "À venir",
    "description": "À venir",
    "tags": [],
    "title": "Semantique",
    "uri": "/html/interactivite/semantique/index.html"
  },
  {
    "breadcrumb": "Sites Web \u003e Html \u003e Contenu",
    "content": "Les listes en HTML sont souvent de deux natures: ordonnée et non-ordonnée. On peut voir les deux simplement comme une énumération ou une bullet list.\nExemple d’énumération:\n\u003col\u003e \u003cli\u003eRemplir le formulaire en ligne\u003c/li\u003e \u003cli\u003eContacter un agent pour régler\u003c/li\u003e \u003cli\u003eOrganiser une rencontre avec un employé\u003c/li\u003e \u003c/ol\u003e\rExemple de bullet list:\n\u003cul\u003e \u003cli\u003ePoivrons\u003c/li\u003e \u003cli\u003eThé\u003c/li\u003e \u003cli\u003eCerises\u003c/li\u003e \u003c/ul\u003e\rOn peut voir que les deux listes sont composées de trois éléments: \u003cul\u003e, \u003col\u003e et \u003cli\u003e. \u003cul\u003e veut simplement dire Unordered List (liste non-ordonnée), tandis que \u003col\u003e signifie Ordered List (liste ordonnée). Chaque item dans la liste est un List Item, soit \u003cli\u003e.\nIl est important de bien fermer fermer les balises dans la hiérarchie. Ainsi, on ne ferme jamais une balise de cette manière: \u003ca\u003e\u003cb\u003e\u003c/a\u003e\u003c/b\u003e. Il faut toujours suivre cette formule: \u003ca\u003e\u003cb\u003e\u003c/b\u003e\u003c/a\u003e.",
    "description": "Les listes en HTML sont souvent de deux natures: ordonnée et non-ordonnée. On peut voir les deux simplement comme une énumération ou une bullet list.\nExemple d’énumération:\n\u003col\u003e \u003cli\u003eRemplir le formulaire en ligne\u003c/li\u003e \u003cli\u003eContacter un agent pour régler\u003c/li\u003e \u003cli\u003eOrganiser une rencontre avec un employé\u003c/li\u003e \u003c/ol\u003e\rExemple de bullet list:\n\u003cul\u003e \u003cli\u003ePoivrons\u003c/li\u003e \u003cli\u003eThé\u003c/li\u003e \u003cli\u003eCerises\u003c/li\u003e \u003c/ul\u003e\rOn peut voir que les deux listes sont composées de trois éléments: \u003cul\u003e, \u003col\u003e et \u003cli\u003e. \u003cul\u003e veut simplement dire Unordered List (liste non-ordonnée), tandis que \u003col\u003e signifie Ordered List (liste ordonnée). Chaque item dans la liste est un List Item, soit \u003cli\u003e.",
    "tags": [],
    "title": "Listes",
    "uri": "/html/contenu/listes/index.html"
  },
  {
    "breadcrumb": "Sites Web \u003e Html \u003e Bases",
    "content": "Une page HTML possède une structure de base qui indique au navigateur comment interpréter le document.\nLa structure minimale\r\u003c!DOCTYPE html\u003e \u003chtml\u003e \u003chead\u003e \u003ctitle\u003eMa page\u003c/title\u003e \u003c/head\u003e \u003cbody\u003e Bonjour! \u003c/body\u003e \u003c/html\u003e\r\u003c!DOCTYPE html\u003e\rIndique au navigateur que le document utilise HTML5 (version la plus récente).\n\u003chtml\u003e\rContient l’ensemble du document HTML.\n\u003chead\u003e\rContient des informations sur la page qui ne sont généralement pas affichées directement.\nOn y trouve notamment le titre de la page, des styles et d’autres informations.\n\u003cbody\u003e\rContient ce qui sera affiché dans la page.\n\u003cbody\u003e \u003ch1\u003eBonjour!\u003c/h1\u003e \u003cp\u003eBienvenue.\u003c/p\u003e \u003c/body\u003e\rLes sources\rUne page peut utiliser plusieurs types de fichiers :\npage.html style.css script.js image.png\rLe HTML peut faire référence à ces fichiers pour construire la page.\nPar exemple, un fichier CSS peut être chargé dans le \u003chead\u003e :\n\u003chead\u003e \u003clink rel=\"stylesheet\" href=\"style.css\"\u003e \u003c/head\u003e\rLe navigateur va alors utiliser style.css pour appliquer les styles à la page.\nUne page comme ensemble\rOn peut donc voir une page Web comme un ensemble de ressources :\npage.html │ ┌───────┼───────┐ ↓ ↓ ↓ style script images .css .js .png │ │ │ └───────┼───────┘ ↓ navigateur ↓ page affichée\rAinsi, une page HTML moderne ressemble à ceci:\n\u003c!DOCTYPE html\u003e \u003chtml lang=\"en\"\u003e \u003chead\u003e \u003cmeta charset=\"UTF-8\"\u003e \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003e \u003ctitle\u003eIntegrated Page\u003c/title\u003e \u003clink rel=\"stylesheet\" href=\"styles.css\"\u003e \u003c/head\u003e \u003cbody\u003e \u003ch1\u003eIntegrated Page\u003c/h1\u003e \u003cp\u003eThis is a paragraph on an integrated page.\u003c/p\u003e \u003cbutton id=\"myButton\"\u003eClick Me\u003c/button\u003e \u003cscript src=\"script.js\"\u003e\u003c/script\u003e \u003c/body\u003e \u003c/html\u003e\rLe fichier index.HTML ci-dessus décrit la structure de base d’une page web. Il fait référence à deux autres fichiers:\nle fichier des styles, styles.css, qui définit les styles dans le document (hauteur, position, couleur, etc.). le dossier des scripts, script.js, qui rend l’application interactive. Pour l’instant, nous allons voir comment faire fonctionner un document HTML seul. Bien savoir diviser nos balises nous aidera beaucoup quand nous apprendrons CSS et JS et c’est souvent une grande partie du travail.",
    "description": "Une page HTML possède une structure de base qui indique au navigateur comment interpréter le document.\nLa structure minimale\r\u003c!DOCTYPE html\u003e \u003chtml\u003e \u003chead\u003e \u003ctitle\u003eMa page\u003c/title\u003e \u003c/head\u003e \u003cbody\u003e Bonjour! \u003c/body\u003e \u003c/html\u003e\r\u003c!DOCTYPE html\u003e\rIndique au navigateur que le document utilise HTML5 (version la plus récente).",
    "tags": [],
    "title": "Structure",
    "uri": "/html/bases/structure/index.html"
  },
  {
    "breadcrumb": "Sites Web \u003e Html",
    "content": "Ce chapitre consolide les bases en y ajoutant les balises imbriquées. Ceci va nous permettre de faire des éléments plus complexes.",
    "description": "Ce chapitre consolide les bases en y ajoutant les balises imbriquées. Ceci va nous permettre de faire des éléments plus complexes.",
    "tags": [],
    "title": "Contenu",
    "uri": "/html/contenu/index.html"
  },
  {
    "breadcrumb": "Sites Web \u003e Html \u003e Interactivite",
    "content": "À venir",
    "description": "À venir",
    "tags": [],
    "title": "Formulaires",
    "uri": "/html/interactivite/formulaires/index.html"
  },
  {
    "breadcrumb": "Sites Web \u003e Html \u003e Contenu",
    "content": "Les tableaux suivent la logique des listes vues avant. Les éléments sont placés en hiérarchie, du plus gros élément (le plus englobant) vers l’élément le plus petit.\nNote: On appelle souvent l’élément le plus petit la granularité, ou plus familièrement le niveau de détail.\nExemple de tableau:\n\u003ctable\u003e \u003ctr\u003e \u003cth\u003eCompany\u003c/th\u003e \u003cth\u003eContact\u003c/th\u003e \u003cth\u003eCountry\u003c/th\u003e \u003c/tr\u003e \u003ctr\u003e \u003ctd\u003eAlfreds Futterkiste\u003c/td\u003e \u003ctd\u003eMaria Anders\u003c/td\u003e \u003ctd\u003eGermany\u003c/td\u003e \u003c/tr\u003e \u003ctr\u003e \u003ctd\u003eCentro comercial Moctezuma\u003c/td\u003e \u003ctd\u003eFrancisco Chang\u003c/td\u003e \u003ctd\u003eMexico\u003c/td\u003e \u003c/tr\u003e \u003c/table\u003e\r(tiré de w3schools)\nIci, \u003ctd\u003e représente un table data (donnée de table), alors que \u003ctr\u003e représente un table row (rangée de table) et \u003ctable\u003e est la table elle-même. On peut vérifier que la règle de fermeture est vérifiée: \u003ca\u003e\u003cb\u003e\u003cc\u003e\u003c/c\u003e\u003c/b\u003e\u003c/a\u003e\nAussi, \u003cth\u003e est table header (nom de la colonne). C’est seulement le titre d’une colonne, comme dans Excel.\nRegardez l’exemple suivant:\n\u003ctable\u003e \u003cthead\u003e \u003ctr\u003e \u003cth\u003eProduit\u003c/th\u003e \u003cth\u003ePrix\u003c/th\u003e \u003cth\u003eStock\u003c/th\u003e \u003c/tr\u003e \u003c/thead\u003e \u003ctbody\u003e \u003ctr\u003e \u003ctd\u003eClavier\u003c/td\u003e \u003ctd\u003e49,99 $\u003c/td\u003e \u003ctd\u003e12\u003c/td\u003e \u003c/tr\u003e \u003ctr\u003e \u003ctd\u003eSouris\u003c/td\u003e \u003ctd\u003e29,99 $\u003c/td\u003e \u003ctd\u003e25\u003c/td\u003e \u003c/tr\u003e \u003c/tbody\u003e \u003c/table\u003e\rLes balises \u003cthead\u003e et \u003ctbody\u003e servent à délimiter l’en-tête et le corps du texte. On peut commencer à deviner l’allure du tableau tout simplement en regardant la structure des balises HTML. Ils seront aussi utiles avec CSS, car ils définissent une catégorie.\nLorsque nos balises sont bien délimités et bien écrites, il est plus facile de comprendre la structure!",
    "description": "Les tableaux suivent la logique des listes vues avant. Les éléments sont placés en hiérarchie, du plus gros élément (le plus englobant) vers l’élément le plus petit.\nNote: On appelle souvent l’élément le plus petit la granularité, ou plus familièrement le niveau de détail.\nExemple de tableau:\n\u003ctable\u003e \u003ctr\u003e \u003cth\u003eCompany\u003c/th\u003e \u003cth\u003eContact\u003c/th\u003e \u003cth\u003eCountry\u003c/th\u003e \u003c/tr\u003e \u003ctr\u003e \u003ctd\u003eAlfreds Futterkiste\u003c/td\u003e \u003ctd\u003eMaria Anders\u003c/td\u003e \u003ctd\u003eGermany\u003c/td\u003e \u003c/tr\u003e \u003ctr\u003e \u003ctd\u003eCentro comercial Moctezuma\u003c/td\u003e \u003ctd\u003eFrancisco Chang\u003c/td\u003e \u003ctd\u003eMexico\u003c/td\u003e \u003c/tr\u003e \u003c/table\u003e\r(tiré de w3schools)",
    "tags": [],
    "title": "Tableaux",
    "uri": "/html/contenu/tableaux/index.html"
  },
  {
    "breadcrumb": "Sites Web \u003e Html \u003e Bases",
    "content": "Pour faire du HTML, on a besoin de deux choses principales :\nun éditeur de code pour écrire notre HTML; un navigateur pour voir le résultat. Les fichiers HTML\rUne page HTML est un fichier texte dont l’extension est .html.\nPar exemple :\nindex.html\rOn peut créer un fichier texte et changer son extension de .txt à .html.\nAttention : si les extensions sont masquées dans l’Explorateur de fichiers, index.txt pourrait apparaître simplement comme index. Activez l’affichage des extensions pour pouvoir réellement changer .txt en .html.\nDu fichier à la page\rLe fichier HTML est enregistré sur notre ordinateur. Le navigateur peut ensuite le lire et afficher son contenu.\nindex.html ↓ navigateur ↓ page affichée\rOn peut simplement ouvrir index.html dans un navigateur. L’adresse commencera généralement par C:/Users et aura souvent une indication File, ce qui indique que le navigateur ouvre un fichier local et non un vrai site sur Internet.\nNotre boucle de travail\rOn va constamment faire ceci :\nmodifier → enregistrer → actualiser → observer\rL’éditeur nous permet de modifier le fichier. On peut choisir Notepad, Notepad++ ou même Vim (un outil plus avancé pour naviguer dans un document avec le clavier au lieu de la souris).\nLe navigateur nous permet de voir ce que ce fichier produit. C’est simplement une application comme Google Chrome, Firefox, Microsoft Edge. Ils sont conçus pour afficher du contenu HTML (CSS et javascript également).\nSouvent, les développeurs aiment utiliser un outil qui permet de voir l’arborescence des dossiers et des fichiers, tout en pouvant modifier leur contenu. Ils facilitent aussi la boucle de travail et permettent de faire des projets plus complexes. C’est une IDE (environnement de développement)\nExemples: VSCode (ci-dessus), IntelliJ (java), Pycharm (python)\nIl y a un débat sur le fait que VSCode est réellement une IDE. D’autres logiciels offrent nativement un support aux langages (python, java), recommandent parfois des améliorations et repèrent aussi des bugs potentiels.",
    "description": "Pour faire du HTML, on a besoin de deux choses principales :\nun éditeur de code pour écrire notre HTML; un navigateur pour voir le résultat. Les fichiers HTML\rUne page HTML est un fichier texte dont l’extension est .html.\nPar exemple :\nindex.html\rOn peut créer un fichier texte et changer son extension de .txt à .html.",
    "tags": [],
    "title": "Environnements",
    "uri": "/html/bases/environnements/index.html"
  },
  {
    "breadcrumb": "Sites Web \u003e Html",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Interactivite",
    "uri": "/html/interactivite/index.html"
  },
  {
    "breadcrumb": "Sites Web \u003e Html \u003e Interactivite",
    "content": "À venir",
    "description": "À venir",
    "tags": [],
    "title": "Controle de formulaire",
    "uri": "/html/interactivite/controles_formulaire/index.html"
  },
  {
    "breadcrumb": "Sites Web \u003e Html \u003e Bases",
    "content": "Le navigateur ne fait pas qu’afficher une page. Il permet aussi de regarder comment cette page est construite.\nPour ouvrir les outils de développement (Dev tools), on peut :\nappuyer sur F12; faire un clic droit sur une partie de la page et choisir Inspecter. Les éléments\rDans les outils de développement, l’onglet Elements (ou Éléments) permet de voir le HTML de la page.\nOn peut y retrouver les différentes balises :\n\u003ch1\u003eBonjour\u003c/h1\u003e \u003cp\u003eBienvenue sur ma page!\u003c/p\u003e\rOn peut cliquer sur un élément dans la page pour voir directement le HTML qui lui correspond, après avoir appuyé sur le bouton ‘Inspecter l’élément’ (d)\nOn peut aussi cliquer sur une balise dans les outils de développement pour voir où elle se trouve dans la page.\nLes sources\rL’onglet Sources permet de voir les fichiers utilisés par la page.\nOn peut notamment y retrouver :\nles fichiers HTML; les fichiers CSS; les fichiers JavaScript; les images et autres ressources. Pour notre cours, les fichiers HTML que nous créons localement apparaîtront également dans les sources lorsque nous les ouvrons dans le navigateur.\nInspecter directement un élément\rLe bouton Inspecter permet de sélectionner un élément directement dans la page.\nOn peut ensuite observer :\npage ↓ élément sélectionné ↓ HTML correspondant\rC’est particulièrement utile pour comprendre la relation entre ce qu’on voit à l’écran et le code HTML qui le produit.\nPendant le cours, utilisez souvent Inspecter pour explorer les pages et faire des liens entre le code et le résultat visuel.",
    "description": "Le navigateur ne fait pas qu’afficher une page. Il permet aussi de regarder comment cette page est construite.\nPour ouvrir les outils de développement (Dev tools), on peut :\nappuyer sur F12; faire un clic droit sur une partie de la page et choisir Inspecter. Les éléments\rDans les outils de développement, l’onglet Elements (ou Éléments) permet de voir le HTML de la page.",
    "tags": [],
    "title": "Dev tools",
    "uri": "/html/bases/dev_tools/index.html"
  },
  {
    "breadcrumb": "Sites Web \u003e Html \u003e Interactivite",
    "content": "À venir",
    "description": "À venir",
    "tags": [],
    "title": "Selecteurs",
    "uri": "/html/interactivite/selecteurs/index.html"
  },
  {
    "breadcrumb": "Sites Web \u003e Html \u003e Contenu",
    "content": "Un peu comme nous avions fait avec les styles, on peut définir une référence Web sur une balise HTML.\nL’exemple suivant est le plus classique:\n\u003ca href=\"https://isp.example.net/\"\u003eISP™\u003c/a\u003e\rLa structure est toujours la suivante pour une balise: \u003ca attribut\u003etexte\u003c/a\u003e. On définit un attribut à \u003c\u003e pour la modifier, texte sera affiché à l’écran. Visuellement, href sera toujours dans la balise ouvrante, comme style l’était.",
    "description": "Un peu comme nous avions fait avec les styles, on peut définir une référence Web sur une balise HTML.\nL’exemple suivant est le plus classique:\n\u003ca href=\"https://isp.example.net/\"\u003eISP™\u003c/a\u003e\rLa structure est toujours la suivante pour une balise: \u003ca attribut\u003etexte\u003c/a\u003e. On définit un attribut à \u003c\u003e pour la modifier, texte sera affiché à l’écran. Visuellement, href sera toujours dans la balise ouvrante, comme style l’était.",
    "tags": [],
    "title": "Navigation",
    "uri": "/html/contenu/navigation/index.html"
  },
  {
    "breadcrumb": "Sites Web \u003e Html \u003e Bases",
    "content": "Le HTML permet de structurer le texte d’une page. Les balises indiquent au navigateur quel rôle joue chaque partie du contenu.\nParagraphes\rLa balise \u003cp\u003e permet de créer un paragraphe.\n\u003cp\u003e Ceci est un paragraphe. \u003c/p\u003e \u003cp\u003e Ceci est un autre paragraphe. \u003c/p\u003e\rChaque \u003cp\u003e forme un bloc distinct.\nTitres\rLes balises \u003ch1\u003e à \u003ch6\u003e permettent de créer des titres de différents niveaux.\n\u003ch1\u003eTitre principal\u003c/h1\u003e \u003ch2\u003eSous-titre\u003c/h2\u003e \u003ch3\u003eSous-sous-titre\u003c/h3\u003e\r\u003ch1\u003e est le niveau le plus important et \u003ch6\u003e le moins important.\nOn peut les voir comme une hiérarchie :\nh1 ├── h2 │ ├── h3 │ └── h3 └── h2 └── h3\rIl ne faut pas choisir un titre uniquement parce qu’il est plus gros ou plus petit. Le niveau du titre représente sa place dans la structure du document.\nLa police et la taille\rOn peut modifier l’apparence du texte avec style :\n\u003cp style=\"font-family: Arial;\"\u003e Texte en Arial \u003c/p\u003e \u003cp style=\"font-size: 24px;\"\u003e Texte plus grand \u003c/p\u003e\rOn peut combiner les deux :\n\u003cp style=\"font-family: Arial; font-size: 24px;\"\u003e Un texte personnalisé \u003c/p\u003e\rEn réalité, c’est un exemple de mauvais code. Avec un code plus long, il devient difficile de voir à quel endroit les styles sont appliqués.\nNous verrons plus tard comment faire ces changements avec CSS plutôt que directement dans le HTML. Ceci nous permettre d’appliquer un style à un groupe de balise plutôt que de le faire individuellement.\nLe HTML permet aussi de modifier la façon dont le texte est présenté.\nRetour à la ligne\rLa balise \u003cbr\u003e force un retour à la ligne.\n\u003cp\u003e Première ligne\u003cbr\u003e Deuxième ligne \u003c/p\u003e\rIl n’est généralement pas nécessaire d’utiliser plusieurs \u003cbr\u003e pour créer de l’espace entre des éléments.\nGras et italique\rPour mettre un texte en évidence, on peut utiliser \u003cstrong\u003e :\n\u003cp\u003eCeci est \u003cstrong\u003eimportant\u003c/strong\u003e.\u003c/p\u003e\rPour donner de l’emphase à un texte, on peut utiliser \u003cem\u003e :\n\u003cp\u003eCeci est \u003cem\u003eimportant\u003c/em\u003e.\u003c/p\u003e\rLe navigateur affiche généralement \u003cstrong\u003e en gras et \u003cem\u003e en italique.\nQuelques autres balises\r\u003cp\u003e\u003cstrong\u003eTexte important\u003c/strong\u003e\u003c/p\u003e \u003cp\u003e\u003cem\u003eTexte en emphase\u003c/em\u003e\u003c/p\u003e \u003cp\u003e\u003cu\u003eTexte souligné\u003c/u\u003e\u003c/p\u003e \u003cp\u003e\u003cs\u003eTexte barré\u003c/s\u003e\u003c/p\u003e\rModifier l’apparence avec style\rPour modifier directement l’apparence d’un élément, on peut utiliser l’attribut style.\n\u003cp style=\"color: red;\"\u003eTexte rouge\u003c/p\u003e \u003cp style=\"font-size: 24px;\"\u003eTexte plus grand\u003c/p\u003e \u003cp style=\"text-align: center;\"\u003eTexte centré\u003c/p\u003e\rOn peut combiner plusieurs propriétés :\n\u003cp style=\"color: blue; font-size: 24px;\"\u003e Bonjour! \u003c/p\u003e\rChaque propriété est séparée par un ;.\nÀ retenir\r\u003ch1\u003e → \u003ch6\u003e titres \u003cp\u003e paragraphes \u003cstrong\u003e importance \u003cem\u003e emphase \u003cbr\u003e retour à la ligne\rLe HTML sert d’abord à structurer le contenu. Son apparence sera de plus en plus prise en charge par CSS.",
    "description": "Le HTML permet de structurer le texte d’une page. Les balises indiquent au navigateur quel rôle joue chaque partie du contenu.\nParagraphes\rLa balise \u003cp\u003e permet de créer un paragraphe.\n\u003cp\u003e Ceci est un paragraphe. \u003c/p\u003e \u003cp\u003e Ceci est un autre paragraphe. \u003c/p\u003e\rChaque \u003cp\u003e forme un bloc distinct.\nTitres\rLes balises \u003ch1\u003e à \u003ch6\u003e permettent de créer des titres de différents niveaux.",
    "tags": [],
    "title": "Texte",
    "uri": "/html/bases/texte/index.html"
  },
  {
    "breadcrumb": "Sites Web \u003e Html \u003e Bases",
    "content": "Exercice 1\rCréez un fichier HTML avec votre nom et votre animal préféré. Ouvrez votre fichier HTML dans le navigateur de votre choix.\nBonus: Essayez d’ouvrir le document dans un autre navigateur.\nExercice 2\rTransformez les extraits de texte suivants en HTML en conservant leur structure et leur mise en forme.\nPar exemple, une information particulièrement importante peut être mise en évidence, alors qu’un mot peut être emphasé sans nécessairement être présenté comme une information importante.\nCertains changements peuvent être temporaires. Cette information n’est plus valide. La structure du document est importante. La présentation vient ensuite.\nExercice 3\rEssayez de reproduire l’affichage des trois premières sections de la page Wikipedia Page_Web.\nBonus 1 : N’utilisez pas \u003cbr\u003e.\nBonus 2 : Ajoutez les liens (voir la section navigation dans contenu).",
    "description": "Exercice 1\rCréez un fichier HTML avec votre nom et votre animal préféré. Ouvrez votre fichier HTML dans le navigateur de votre choix.\nBonus: Essayez d’ouvrir le document dans un autre navigateur.\nExercice 2\rTransformez les extraits de texte suivants en HTML en conservant leur structure et leur mise en forme.",
    "tags": [],
    "title": "Exercices",
    "uri": "/html/bases/exercices/index.html"
  },
  {
    "breadcrumb": "Sites Web \u003e Html \u003e Interactivite",
    "content": "À venir",
    "description": "À venir",
    "tags": [],
    "title": "Sujets avances",
    "uri": "/html/interactivite/sujets_avances/index.html"
  },
  {
    "breadcrumb": "Sites Web \u003e Html \u003e Contenu",
    "content": "Exercice 1\rFaites le tableau suivant:\nFeature React Vue Angular Learning Curve Medium Easy Hard Performance ⭐⭐⭐⭐ ⭐⭐⭐⭐⭐ ⭐⭐⭐ Ecosystem Rich Good Complete Enterprise Support Facebook Independent Google TypeScript ✅ ✅ ✅ Built-in Community Activity Very High High Medium Exercice 2\rCréez deux fichiers, source.html et fin.html. Mettre un lien hypertexte de source vers fin.\nBonus: faites les deux, pour pouvoir les appeler entre elles.\nExercice 3\rRepérez et corrigez les erreurs dans le code suivant, sans consulter en ligne.\n\u003ctable\u003e \u003cthead\u003e \u003ctr\u003e \u003cth\u003eHeader 1\u003c/th\u003e \u003cth\u003eHeader 2\u003cth\u003e \u003ctr\u003e \u003ctbody\u003e \u003cth\u003eData 1\u003c/th\u003e \u003cth\u003eData 2\u003c/th\u003e \u003ctbody\u003e \u003ctable\u003e\rExercice 4\rLe gnome tavernier vous donne les informations suivantes :\nNom : Potion de soin Prix : 15 pièces Stock : 8 Nom : Épée rouillée Prix : 30 pièces Stock : 3 Nom : Champignon magique Prix : 7 pièces Stock : 24\rRestructurez les informations pour lui faire un tableau HTML pour son site Web.\nBonus: La meilleure page HTML du groupe obtient le crédit de gagner.",
    "description": "Exercice 1\rFaites le tableau suivant:\nFeature React Vue Angular Learning Curve Medium Easy Hard Performance ⭐⭐⭐⭐ ⭐⭐⭐⭐⭐ ⭐⭐⭐ Ecosystem Rich Good Complete Enterprise Support Facebook Independent Google TypeScript ✅ ✅ ✅ Built-in Community Activity Very High High Medium Exercice 2\rCréez deux fichiers, source.html et fin.html. Mettre un lien hypertexte de source vers fin.",
    "tags": [],
    "title": "Exercices",
    "uri": "/html/contenu/exercices/index.html"
  },
  {
    "breadcrumb": "Sites Web",
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
    "title": "Sites Web",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Sites Web",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "Sites Web",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
