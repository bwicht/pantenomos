//importation des méthodes
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import '../imports/api/db_comments.js';
import { Projects } from '../imports/api/db_projects.js';
import { Highlightments } from '../imports/api/db_highlightments';
import '../both';
import { Votes } from '../imports/api/db_cases.js';

//exécute le code au démarrage du serveur
Meteor.startup(() => {
	//NE PAS ENLEVER DES COMMENTAIRES — vide toute la base de données pour les projets /!\
	//Highlightments.remove({});
	Highlightments.rawCollection().createIndex({"highlightment.project_id": 1, "highlightment.parent_id": 1, "highlightment.position": 1, "highlightment.score": 1});
});