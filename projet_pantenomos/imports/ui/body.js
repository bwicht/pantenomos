import { Meteor } from 'meteor/meteor';

import { Template } from 'meteor/templating';

import  { Commentaires } from '../api/commentaires.js';
import  { Projets } from '../api/projets.js';
import  { Cases } from '../api/cases.js';

import './body.html';
import './commentaire.js'; // ? 


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



 Template.body.helpers({
  projets() {
      return Projets.find({});

   },
      
  
});

Template.body.helpers({
  cases() {
      return Cases.find({});

   },
      
  
});