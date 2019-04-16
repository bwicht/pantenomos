//importation des méthodes
import { Projects } from '../api/db_projects.js';

//extraie les données collectées dans la BD

Template.vot_secondPart.helpers({

    addLineBreak: function (data) {
        
        return data.replace(/\n/g, "<br />");
    },

    project: function() {

        return Projects.findOne({_id: FlowRouter.getParam('_id')}).project;
    },
});