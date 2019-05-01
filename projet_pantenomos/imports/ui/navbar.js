import '../templates/navbar.html';

Template.navbar.events({

    "click .js-open-login-modal"(event,instance){

        Modal.show('login_modal');
        
    }
});