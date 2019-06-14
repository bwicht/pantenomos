//importation des méthodes
import { Accounts } from 'meteor/accounts-base';
 
//création d'un compte utilisateur -> Si possible avec le SwissID
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});