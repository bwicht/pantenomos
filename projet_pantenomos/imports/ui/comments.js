//importation des méthodes
import  { Comments } from '../api/db_comments.js';
import '../templates/vot_comments.html';

// Lignes 6-25 : Création de la variable du commentaire de l'utilisateur connecté 
Template.vot_comments.events({
  'submit .js-create-comment'(event,instance) {

    //empêche le navigateur par défaut de soumettre le formulaire
    event.preventDefault();

        // On récupère le contenu du commentaire 
      const content = event.target.content.value

    let commentDoc = {
      content: content,
      project_id: FlowRouter.getParam('_id'),
      createdAt: new Date(),
      ownerId: Meteor.userId()
   }

   Comments.insert(commentDoc)

   event.target.content.value = "";
},  

// Lignes 27-46 : Création de la variable du commentaire de l'utilisateur déconnecté 
  'submit .newComment'(event,instance){

    event.preventDefault();

    let newComment = {
        project_id: FlowRouter.getParam('_id'),
        text: document.getElementById("txtComment").value,
        pseudo: document.getElementById("pseudoComment").value,
        createdAt: new Date(),
        ownerId: Meteor.userId()
  };

  Comments.insert(newComment)

  document.getElementById("txtComment").value = "";
  document.getElementById("pseudoComment").value = "";

  }
});

Template.comment_list.helpers({
  comments(){
    return Comments.find({articleId: FlowRouter.getParam('articleId')});    
  },
});