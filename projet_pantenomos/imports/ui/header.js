//se rendre sur la page principale
Template.header.events({

    'click #titleMain': function(event){

        event.preventDefault();
        FlowRouter.go('homePage');
    }

});