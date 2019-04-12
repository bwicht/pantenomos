import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

// Il serait mieux d'importer que les fichiers .js, qui eux-mêmes appeleraient les templates concernés.

import './main.html';
import '../imports/templates/homePage.html';

import '../imports/templates/hp_project.html';
import '../imports/templates/hp_project_init.html';

import '../imports/templates/votation.html';
import '../imports/templates/form_new_project.html';

import '../imports/templates/loginButtons.html';

import '../imports/ui/ui_vot_firstPart.js';
import '../imports/templates/vot_secondPart.html';
import '../imports/templates/vot_thirdPart.html';

import '../imports/templates/hp_copyright.html';