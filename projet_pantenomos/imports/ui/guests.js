//importation de méthodes

//se rendre sur la page du projet
Template.homePage.events({

    'click #initiative': function(event){

        event.preventDefault();
        FlowRouter.go('votation');
    }

});