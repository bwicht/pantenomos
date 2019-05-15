//importation des méthodes
import  { Comments } from '../api/db_comments.js';

//ajout d'un commentaire dans la base de données
Template.vot_thirdPart.events({

  'submit .newComment'(event) {

    //empêche le navigateur par défaut de soumettre le formulaire
    event.preventDefault();

        // //insert un commentaire dans la collection
        // Comments.insert({
        //   text,
        //   createdAt: new Date(), // date actuelle
        //   owner: Meteor.userId(),
        //   username: Meteor.user().username,
        // });


    let newComment = {
      project_id: FlowRouter.getParam('_id'),
      text: document.getElementById("txtComment").value,
      pseudo: document.getElementById("pseudoComment").value,
      createdAt: new Date(),
    };

    //insert un commentaire dans la collection
    Meteor.call('comments.create', newComment);

    document.getElementById("txtComment").value = "";
    document.getElementById("pseudoComment").value = "";

  },
});

//extrait les données collectées dans la BD
Template.vot_thirdPart.helpers({
  
    comments: function() {

      //A modifier pour ne chercher que les commentaires propres au projet FlowRouter.getParam('_id')
      return Comments.find({"comment.project_id": FlowRouter.getParam('_id')}).fetch()
    },

});