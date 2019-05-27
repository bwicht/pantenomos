//se rendre sur la page principale
Template.navbar.events({

    'click #logo': function(event){

        event.preventDefault();
        FlowRouter.go('homePage');
    }

});
Template.navbar.events({

    'click #Title': function(event){

        event.preventDefault();
        FlowRouter.go('homePage');
    }

});
