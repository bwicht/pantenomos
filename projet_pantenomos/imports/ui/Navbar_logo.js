//se rendre sur la page principale
Template.navbar.events({

    'click #logo': function(event){

        event.preventDefault();
        FlowRouter.go('homePage');
    }

});