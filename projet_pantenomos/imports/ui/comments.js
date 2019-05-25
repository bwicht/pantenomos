//importation des méthodes
import  { Comments } from '../api/db_comments.js';
import '../templates/vot_comments.html';

// Lignes 6-35 : event et helper pour récupérer le commentaire et l'id de l'utilisateur connecté 
Template.vot_comments.events({
  'submit .js-create-comment'(event,instance) {

    //empêche le navigateur par défaut de soumettre le formulaire
    event.preventDefault();

        // On récupère le contenu du commentaire 
      const content = event.target.content.value

    let commentDoc = {
      content: content,
      articleId: FlowRouter.getParam('articleId'),
      createdAt: new Date(),
      ownerId: Meteor.userId()
   }

   Comments.insert(commentDoc)

   event.target.content.value = "";
},  
  'submit .newComment'(event,instance){

    event.preventDefault();

    let newComment = {
        articleId: FlowRouter.getParam('articleId'),
        text: document.getElementById("txtComment").value,
        pseudo: document.getElementById("pseudoComment").value,
        createdAt: new Date(),
  };

  Meteor.call('comments.create', newComment);
 
  document.getElementById("txtComment").value = "";
  document.getElementById("pseudoComment").value = "";

  }
/*
  'submit .newComment'(event, instance) {
    //empêche le navigateur par défaut de soumettre le formulaire
    event.preventDefault();
 
    

   Meteor.call('comments.create', newComment);
 
   document.getElementById("txtComment").value = "";
   document.getElementById("pseudoComment").value = "";
   }
   */
});

Template.comment_list.helpers({
  comments(){
    return Comments.find({articleId: FlowRouter.getParam('articleId')});    
  },
});
// Lignes 37-64 : event et helper pour récupérer le commentaire et l'id de l'utilisateur connecté 


//extrait les données collectées dans la BD
/*Template.vot_comments2.helpers({
  
  comments: function() {

    //A modifier pour ne chercher que les commentaires propres au projet FlowRouter.getParam('_id')
    return Comments.find({"comment.project_id": FlowRouter.getParam('_id')}).fetch();
 },
});*/