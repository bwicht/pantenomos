
//création des events liés aux boutons "Connexion" et "Déconnexion" de la navbar
import '../templates/navbar.html';

Template.navbar.events({

    "click .js-open-login-modal"(event,instance){
        Modal.show("login_modal");
    },

    "click .js-logout"(event,instance){
        Meteor.logout();
    }
});

//pour que la modal disparaisse une fois que l'utilisateur s'est logué
Template.login_modal.onCreated(function(){

    this.autorun(() => {
        if(Meteor.userId()){
            Modal.hide('login_modal');
        }
    });
});
