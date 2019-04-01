import { Meteor } from 'meteor/meteor';

import { Template } from 'meteor/templating';

import  { Commentaires } from '../api/commentaires.js';

import './body.html';
import './commentaire.js';


 Template.body.helpers({
    commentaires() {
        return Commentaires.find({});

     },
        
    
});




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

