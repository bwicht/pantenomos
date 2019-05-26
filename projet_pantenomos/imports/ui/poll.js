//importation des méthodes
import { ReactiveVar } from 'meteor/reactive-var';
import  { Cases } from '../api/db_cases.js';
// nom de la database à remplir
import '../templates/vot_poll.html';


// initialisation des variables qui définiront le choix de l'utilisateur
Template.vot_poll.onCreated(function () {
    
    this.avis ="";
    this.nombreVote = new ReactiveVar(0);
    
    Pour =0;
    Contre =0;
    PourPrincipe=0;
    ContrePrincpe=0;
});


Template.vot_poll.helpers({
    nombreVote(){
            return Template.instance().nombreVote.get();
    },
    
    
//     choix(){
//         return this.avis.get();
//       },
//       reponse(){
//         return radios;
//       }

 });

//
Template.vot_poll.events({

    'click #btnAddVote': function(event,instance) {
        event.preventDefault();
        instance.nombreVote.set(instance.nombreVote.get()+1);
        Cases.update({
            totalVotes : instance.nombreVote.get()
        });
        var radios = document.getElementsByName('choice');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                
                // do whatever you want with the checked radio
                const avis = radios[i].value;
                console.log(avis);
                Cases.insert({avis:avis});
                
                // let vote = {
                //     avis: avis,
                //     // ajouter pour quelle initiative il voté ?
                //     createdAt: new Date(),
                //     ownerId: Meteor.userId()
                //     };
            
                //     Cases.insert(vote);
                    // Cases.update({initativeID: _id },{$inc : {document.getElementByName('choice').value : 1 },{$inc : {VotesTotal : 1}})
               

                // only one radio can be logically checked, don't check the rest
                break;
            }
        
        
        
        
            // Cases.update({initativeID: _id },{$inc : {document.getElementByName('choice').value : 1 },{$inc : {VotesTotal : 1}})
            // votes.update({article: 72},{$inc : {PourPrincipe : 1 }})
        }    
        },

});