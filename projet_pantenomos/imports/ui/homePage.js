//importation des méthodes
import { Projects } from '../api/db_projects.js';

//se rendre sur la page du projet
Template.homePage.events({

    'click .card': function(event) {

        event.preventDefault();

        FlowRouter.go('votation', {_id: event.currentTarget.id});
    },

    'click #btnNewProject': function(event) {

        event.preventDefault();

        FlowRouter.go('newProject');
    }

});
  
//extraie les données collectées dans la BD
Template.homePage.helpers({
    projects() {

        return Projects.find().fetch();
    },
});
