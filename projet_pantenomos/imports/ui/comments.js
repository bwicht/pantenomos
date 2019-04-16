//importation des méthodes
import { Template } from 'meteor/templating'; 
import  { Comments } from '../api/db_comments.js';
import '../templates/vot_thirdPart.html';

//ajout d'un commentaire dans la base de données
Template.vot_thirdPart.events({

  'submit .newCcomment'(event) {
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

//extraie les données collectées dans la BD
Template.vot_thirdPart.helpers({
  comments() {
    return Comments.find().fetch();
  },
});
