import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

// Il serait mieux d'importer que les fichiers .js, qui eux-mêmes appeleraient les templates concernés.

import './main.html';
import '../imports/templates/homePage.html';
import '../imports/templates/hp_project.html';
import '../imports/templates/votation.html';
import '../imports/templates/vot_firstPart.html';
import '../imports/templates/vot_secondPart.html';
import '../imports/templates/vot_thirdPart.html';
import '../imports/templates/hp_copyright.html';