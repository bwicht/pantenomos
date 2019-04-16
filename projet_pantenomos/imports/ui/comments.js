//importation des méthodes
import { Template } from 'meteor/templating'; 
import  { Comments } from '../api/db_comments.js';
import '../templates/vot_thirdPart.html';

//ajout de commentaires par l'utilisateur
Template.vot_thirdPart.helpers({
    comments() {
      return Comments.find({});
    },
});

//MERCI D'AJOUTER UN COMMENTAIRE
Template.vot_thirdPart.events({
  'submit .new-comment'(event) {
    //empêche le navigateur par défaut de soumettre le formulaire
    event.preventDefault();

    //va chercher la valeur entrée dans le formulaire
    const target = event.target;
    const text = target.text.value;

    //insert un commentaire dans la collection
    Comments.insert({
      text,
      createdAt: new Date(), // date actuelle
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });

    //vide le formulaire
    target.text.value = '';
  },
});
