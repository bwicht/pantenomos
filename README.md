# Pantenomos - README

### *Pantenomos version 1.0*
Par *Antoine Lami, Caroline Roxana Rohrbach, Victor Vermot, Bertil Wicht & Léa Keller*

Projet réalisé dans le cadre du cours *Programmation pour Internet II – Meteor.js* donné par Isaac Pante et Loris Rimaz

Faculté des Lettres - Université de Lausanne - Semestre de printemps

## Qu'est-ce que Pantenomos?

Pantenomos est un projet qui s'adresse à tout citoyen suisse intéressé par la politique et souhaitant développer une réflexion plus approfondie que le traditionnel « OUI » et « NON » réservé aux bulletins de votes. Le projet propose une plateforme d'échanges relative aux initiatives et aux votations populaires en cours, sur laquelle il est possible de lire l'intégralité du texte de loi et de surligner les passages spécifiques que l'utilisateur souhaite mettre en évidence, et possiblement commenter dans l'espace réservé à cet usage.

## Comment l'utiliser?

Le site est minimaliste, mettant volontairement l'accent sur les textes de loi qui représentent l'enjeu véritable de la plateforme. Sur la page principale, l'utilisateur est invité à cliquer sur le projet qui l'intéresse:

La page relative au projet ouvert se divise en trois parties:

* Un sondage général, dans lequel l'utilisateur à la possibilité de donner un avis général (« Pour » et « Contre ») ou un peu plus nuancé (« Pour sur le principe » et « Contre sur le principe »). À titre indicatif, cette information délivre une information superficielle, qu'il est ensuite question de détailler.

* La partie principale du site est celle contenant le texte exhaustif de la votation ou de l'initiative en cours. Le texte se divise en amendements comportant plusieurs articles. L'utilisateur a la possibilité de surligner le contenu de ces articles, d'un unique mot à la totalité du paragraphe, et de sélectionner une couleur relative à son opinion. Une fois tous les éléments sélectionnés, il enregistre sa sélection au moyen du bouton « Soumettre son avis ». Une fois l'avis soumis, ou si l'utilisateur n'a aucune opinion particulière, il a également la possibilité de visualiser la sélection des autres au moyen du bouton « Afficher les avis moyens ». Dans une éthique de neutralité, cette visualisation n'apparaît que lorsque l'utilisateur en fait la demande.

* La troisième partie est un espace d’expression plus large autour des textes proposés, de type FAQ ou commentaires libres, afin de discuter du projet ou de la thématique plus générale.

Les textes des initiatives et votations populaires sont repris du site officiel admin.ch, auquel le logo renvoie.

## Interface de l'utilisateur

L'utilisateur peut se connecter à n'importe quel moment, via le bouton relatif dans le bandeau du site. S'il n'est pas encore enregistré, il peut le faire en remplissant un formulaire (la tranche d'âge, le sexe ainsi que le canton sont optionnels).

Une fois enregistré, l'utilisateur peut poster un commentaire rattaché à son ID, mais l'interface n'est pour l'instant pas particulièrement développée, n'ayant par exemple aucun espace privé et aucun historique de projets concertés et avec lesquels il a interagi. Les utilisateurs préférant l'anonymat ont la possibilité de s'inscrire au sondage, de surligner et de commenter de la même façon.

## Base de données

La base de données de l'application, MongoDB, contient quatre collections rattachées à l'ID de la cinquième collection, le projet auquel elles sont liées. Ces quatre premières collections sont:
* les utilisateurs inscrits (*user*)
* le sondage (*cases*)
* les surlignements (*highlitments*)
* les commentaires (*comments*)

Concernant la collection des projets (*projects*), un bouton « Nouveau projet » (destiné à disparaître dans une version aboutie du projet – l'option étant réservée à un administrateur) permet d'accéder au formulaire d'ajout d'un nouveau projet dans la base de données, avec certaines modalités comme le titre, une description, et enfin les différents amendements et articles relatifs. La saisie est manuelle et une fois le projet validé, la page relative est générée automatiquement.

## License
Ce programme est un logiciel gratuit.
Les principaux modules Meteor utilisés dans ce projet sont :

Le package suivant doit être installé par le terminal pour que l'application marche:
meteor add timdown:rangy
Puis :
meteor npm install --save rangy

## Screenshots des différents fonctionalités du site:

### Accueil du site avec tous les différents projets de lois

<img width="1039" alt="PN_homepage" src="https://user-images.githubusercontent.com/44426485/58439133-d8c83e00-80d2-11e9-881c-a23e9caadd23.png">

### Possibilité à un utilsateur de se login
<img width="1033" alt="PN_login" src="https://user-images.githubusercontent.com/44426485/58439134-d8c83e00-80d2-11e9-8430-98e9a8f1bb8f.png">
<img width="432" alt="PN_register" src="https://user-images.githubusercontent.com/44426485/58439139-d960d480-80d2-11e9-9918-64be72db8075.png">

### Présentation de la possibilité d'ajout des textes de lois (Sera par la suite seulement pour les admin)
<img width="1103" alt="PN_newproject" src="https://user-images.githubusercontent.com/44426485/58439135-d8c83e00-80d2-11e9-9b51-82dc88ae7a97.png">

### Le premier module permet de sonder l'avis des utlisateurs à propos du projet
<img width="1037" alt="PN_p1" src="https://user-images.githubusercontent.com/44426485/58439136-d960d480-80d2-11e9-9e8d-e649759e6204.png">

### Le second permet aux utilisateurs de surligner les passages par rapport auxquels ils ne sont pas d'accords
<img width="1034" alt="PN_p2" src="https://user-images.githubusercontent.com/44426485/58439137-d960d480-80d2-11e9-8d86-0538e8626751.png">

### Le dernier permet de donner un commentaire général par rapport au projet
<img width="1034" alt="PN_p3" src="https://user-images.githubusercontent.com/44426485/58439138-d960d480-80d2-11e9-9274-d7bed4730d50.png">



Copyright © 2019 - l'équipe de développement de Pantenomos : *Antoine Lami – Caroline Roxana Rohrbach – Victor Vermot – Bertil Wicht – Léa Keller*
