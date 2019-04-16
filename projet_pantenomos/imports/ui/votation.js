//importation des méthodes
import { Projects } from '../api/db_projects.js';

let project;

//extraie les données collectées dans la BD
Template.vot_secondPart.helpers({

    project: function(){

        let projectId = FlowRouter.getParam('_id');

        project = Projects.findOne({_id: projectId}).project;

        console.log(project);

        return project;
    },
});