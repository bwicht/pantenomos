// Création d'un compte utilisateur --> Si possible avec le SwissID

import { Accounts } from 'meteor/accounts-base';
 
Accounts.ui.config({

  passwordSignupFields: 'USERNAME_ONLY',
  
});