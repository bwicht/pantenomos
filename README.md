# PanteNomos - README

### *PanteNomos version 1.0*
Par *Antoine Lami, Caroline Roxana Rohrbach, Victor Vermot, Bertil Wicht & Léa Keller*

Projet réalisé dans le cadre du cours *Programmation pour Internet II – Meteor.js* donné par Isaac Pante et Loris Rimaz

Faculté des Lettres - Université de Lausanne - Semestre de printemps

## Qu'est-ce que Pantenomos?

Pantenomos est un projet qui s'adresse à tout citoyen suisse intéressé par la politique et souhaitant développer une réflexion plus approfondie que le traditionnel « OUI » et « NON » réservé aux bulletins de votes. Le projet propose une plateforme d'échanges relative aux initiatives et aux votations populaires en cours, sur laquelle il est possible de lire l'intégralité du texte de loi et de surligner les passages spécifiques que l'utilisateur souhaite mettre en évidence, et possiblement commenter dans l'espace réservé à cet usage.

## Comment l'utiliser?

Le site est minimaliste, mettant volontairement l'accent sur les textes de loi qui représentent l'enjeu véritable de la plateforme. Sur la page principale, l'utilisateur est invité à cliquer sur le projet qui l'intéresse:

La page relative au projet ouvert se divise en trois parties:

* Un sondage général, dans lequel l'utilisateur à la possibilité de donner un avis général (« OUI » et « NON ») ou un peu plus nuancé (« OUI SUR LE PRINCIPE » et « NON SUR LE PRINCIPE »). À titre indicatif, cette information délivre une information superficielle, qu'il est ensuite question de détailler.

* La partie principale du site est celle contenant le texte exhaustif de la votation ou de l'initiative en cours. Le texte se divise en amendements comportant plusieurs articles. L'utilisateur a la possibilité de surligner le contenu de ces articles, d'un unique mot à la totalité du paragraphe, et de sélectionner une couleur relative à son opinion. Une fois tous les éléments sélectionnés, il enregistre sa sélection au moyen du bouton « Soumettre son avis ». Une fois l'avis soumit, ou si l'utilisateur n'a aucune opinion particulière, il a également la possibilité de visualiser la sélection des autres au moyen du bouton « Afficher les avis moyens ». Dans une éthique de neutralité, cette visualisation n'apparaît que lorsque l'utilisateur en fait la demande.

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

Copyright © 2019 - l'équipe de développement de PanteNomos : *Antoine Lami – Caroline Roxana Rohrbach – Victor Vermot – Bertil Wicht – Léa Keller*
