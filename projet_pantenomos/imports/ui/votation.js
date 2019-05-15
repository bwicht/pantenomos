//importation des méthodes
import { Projects } from '../api/db_projects.js';

//extraie les données collectées dans la BD
Template.vot_secondPart.helpers({
    
    project: function() {

        return Projects.findOne({_id: FlowRouter.getParam('_id')}).project;
    },
});

//surligner et commenter les amendements
