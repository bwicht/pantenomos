//importation des méthodes
import { Projects } from '../api/db_projects.js';
import '../templates/votation.html';

let getProject = {

    project: function() {
        
        return Projects.findOne({_id: FlowRouter.getParam('_id')}).project;
    },
};

//extraie les données collectées dans la BD
Template.votation.helpers(getProject);
Template.vot_lawText.helpers(getProject);

//surligner et commenter les amendements
