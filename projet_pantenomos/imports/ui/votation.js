//importation des méthodes
import { Projects } from '../api/db_projects.js';
import '../templates/votation.html';

//extraie les données collectées dans la BD
Template.votation.helpers({
    
    project: function() {

        let currentProject = Projects.findOne({_id: FlowRouter.getParam('_id')});

        return currentProject && currentProject.project;
    },
});

//surligner et commenter les amendements
