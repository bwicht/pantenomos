import { Projects } from '../api/db_projects.js';

import '../templates/sidebar.html';


Template.sidebar.events({

    'click #home': function(event){

        event.preventDefault();
        FlowRouter.go('homePage');
    }

});
Template.sidebar.events({
    'click #project.title': function(events){
        event.preventDefault();
        Flowrouter.go('votation')
    }
})

   



