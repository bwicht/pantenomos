//importation des méthodes
import { ReactiveVar } from 'meteor/reactive-var';
import  { Votes } from '../api/db_cases.js';
// nom de la database à remplir
import '../templates/vot_poll.html';

let userChoice;

Template.vot_poll.onCreated(function() {

  userChoice = new ReactiveVar(false);
  this.nombreVote = new ReactiveVar(0);

});

Template.vot_poll.helpers({

    nombreVote: function() {

        return Votes.find({}, {"initiative_id": FlowRouter.getParam('_id')}).fetch().length;
    },

    choixUtilisateur: function() {

        return userChoice.get();
    },


 });





 // récupération du choix de l'utilisateur en fonction de la case cochée
Template.vot_poll.events({

    'click #btnAddVote': function(event,instance) {
        event.preventDefault();
        instance.nombreVote.set(instance.nombreVote.get()+1);
        var radios = document.getElementsByName('choice');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                
                // do whatever you want with the checked radio
                const avis = radios[i].value;
                console.log(avis);

                Votes.insert({avis : avis});
                if(avis === "Pour"){
                   Pour = +1;
                   
                } else if(avis === "Contre"){
                    Contre =+1;
                    
                } else if(avis === "PourPrincipe"){
                    PourPrincipe =+1;
                    
                } 
                
                
                else {
                    ContrePrincipe=+1;
                    

                }
                // let vote = {
                //          avis: radios,
                //     //     // ajouter pour quelle initiative il voté ?
                //         createdAt: new Date(),
                //         // ownerId: Meteor.userId()
                //          };
                // Votes.insert({vote});
                
                
                    // Cases.update({initativeID: _id },{$inc : {document.getElementByName('choice').value : 1 },{$inc : {VotesTotal : 1}})
               

                
                break;
            }
        
        
        
        
            // Cases.update({initativeID: _id },{$inc : {document.getElementByName('choice').value : 1 },{$inc : {VotesTotal : 1}})
            // votes.update({article: 72},{$inc : {PourPrincipe : 1 }})
        }    
        },

});
