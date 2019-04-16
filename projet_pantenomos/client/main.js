//importation de méthodes
import { Meteor } from 'meteor/meteor'
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

//À FAIRE: il serait mieux d'importer que les fichiers .js, qui eux-mêmes appeleraient les templates concernés.
import '../imports/templates/header.html';
import '../imports/templates/homePage.html';
import '../imports/templates/hp_copyright.html';
import '../imports/templates/hp_project_init.html';
import '../imports/templates/hp_project.html';
import '../imports/templates/loginButtons.html';
import '../imports/templates/newProject.html';
import '../imports/templates/vot_firstPart.html';
import '../imports/templates/vot_secondPart.html';
import '../imports/templates/vot_thirdPart.html';
import '../imports/templates/votation.html';

//importation de fichiers JavaScript
import '../imports/ui/ui_body.js';
import '../imports/ui/comments.js';
import '../imports/ui/newProject.js';
import '../imports/ui/cases.js';

import '../lib/routes.js';