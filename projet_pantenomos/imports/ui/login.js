import '../templates/loginButtons.html';

Template.loginButtons.events({
    "click .js-open-login"(event,instance){
        Modal.show('login');
    }
});