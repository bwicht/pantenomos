//importation de méthodes

//se rendre sur la page du projet
Template.homePage.events({

    'click #initiative': function(event){

        event.preventDefault();
        FlowRouter.go('votation');
    }

});

//se rendre sur la page principale
Template.header.events({

    'click #titleMain': function(event){

        event.preventDefault();
        FlowRouter.go('homePage');
    }

});