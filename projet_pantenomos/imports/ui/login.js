import '../templates/loginButtons.html';

Template.loginButtons.events({
    "click .js-open-login-modal"(event,instance){
        Modal.show('login_modal');
    }
});