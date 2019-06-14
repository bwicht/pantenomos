import { Projects } from '../api/db_projects.js';
import '../templates/sidebar.html';

//retourner sur la homePage

Template.sidebar.events({
    'click #home': function(event){
        event.preventDefault();
        FlowRouter.go('homePage');
    }
});

//accéder aux projets 
Template.sidebar.events({
    'click .projects': function(events){
        event.preventDefault();
        FlowRouter.go('votation',{_id: event.currentTarget.id})
    },
});

//extraie les données collectées dans la BD
Template.sidebar.helpers({
    projects() {     
        return Projects.find().fetch();
    },
});