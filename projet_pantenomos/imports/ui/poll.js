//importation des méthodes
import { ReactiveVar } from 'meteor/reactive-var';
import  { Cases } from '../api/db_cases.js';
// nom de la database à remplir
import '../templates/vot_poll.html';


// initialisation des variables qui définiront le choix de l'utilisateur
Template.vot_poll.onCreated(function () {
    
    Pour =0;
    Contre =0;
    PourPrincipe=0;
    ContrePrincpe=0;
});


Template.vot_poll.helpers({
    choix() {
        return Template.instance().Pour.get()
  
     },
     
  });

//
Template.vot_poll.events({

    'checked .poll'(event, instance) {
        event.target;
        votes.update({article: 72},{$inc : {PourPrincipe : 1 }})
    },

    'checked .poll'(event, instance){
        Cases.insert({
            vote: choix,
            vote: document.getElementByName('choice').value,
            createdAt: new Date(),
            ownerId: Meteor.userId()
        });
    },
    

    'click #btnAddVote': function(event,instance) {
        event.preventDefault();
        let radio = document.getElementsByName('choice').value;
        alert(radio);
        let recuperation = document.getElementByName('choice').value;
        let recuperation2 = pollChoice.choice.value;
        alert(recuperation2);
        
        
        // let vote = {
        //     vote: document.getElementByName('choice').value,
        //     // ajouter pour quelle initiative il voté ?
        //     createdAt: new Date(),
        //     ownerId: Meteor.userId()
        //     }
    
        //     Cases.insert(vote)
        //     // Cases.update({initativeID: _id },{$inc : {document.getElementByName('choice').value : 1 },{$inc : {VotesTotal : 1}})
    
            
        },

});