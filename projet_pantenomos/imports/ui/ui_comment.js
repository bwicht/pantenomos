// Ajout de commentaires par l'utilisateur

import { Template } from 'meteor/templating';
 
// import { Commentaires } from '.db_comments';
import  { Commentaires } from '../api/db_comments.js';
 
import '../templates/vot_thirdPart.html';
import './ui_comments.js';

Template.body.helpers({
    commentaires() {
      return Commentaires.find({});
    },
});

  // 0
  Template.body.events({
   'submit .new-commentaire'(event) {
     // Prevent default browser form submit
     event.preventDefault();
  
     // Get value from form element
     const target = event.target;
     const text = target.text.value;
  
     // Insert a task into the collection
     Commentaires.insert({
       text,
       createdAt: new Date(), // current time
       owner: Meteor.userId(),
       username: Meteor.user().username,
     });
  
     // Clear form
     target.text.value = '';
   },
 });
