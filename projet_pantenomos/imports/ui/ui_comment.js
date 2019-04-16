// Ajout de commentaires par l'utilisateur

import { Template } from 'meteor/templating';
 
import { Comments } from '.db_comments';
import  { Comments } from '../api/db_comments.js';
 
import '../templates/vot_thirdPart.html';

Template.vot_thirdPart.helpers({
    comments() {
      return Comments.find({});
    },
});


  Template.vot_thirdPart.events({
   'submit .new-comment'(event) {
     // Prevent default browser form submit
     event.preventDefault();
  
     // Get value from form element
     const target = event.target;
     const text = target.text.value;
  
     // Insert a comment into the collection
     Comments.insert({
       text,
       createdAt: new Date(), // current time
       owner: Meteor.userId(),
       username: Meteor.user().username,
     });
  
     // Clear form
     target.text.value = '';
   },
 });
