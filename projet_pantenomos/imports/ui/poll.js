//importation des méthodes
import { ReactiveVar } from 'meteor/reactive-var';
import  { Votes } from '../api/db_cases.js';
// nom de la database à remplir
import '../templates/vot_poll.html';


// initialisation des variables qui définiront le choix de l'utilisateur
Template.vot_poll.onCreated(function () {
    
    // avis est la valeur cochée par l'individu
    this.avis ="";
    // récupère le nombre de votes total (en faire un variable globale pour tous les utilisateurs)
    this.nombreVote = new ReactiveVar(0);
    // Sommes des différentes possibilités
    this.Pour =new ReactiveVar(0);
    this.Contre =new ReactiveVar(0);
    this.PourPrincipe=new ReactiveVar(0);
    this.ContrePrincpe=new ReactiveVar(0);
});


Template.vot_poll.helpers({
    nombreVote(){
            return Template.instance().nombreVote.get();
    },
    
    
    // avis(){
    //     return this.avis.get();
    //   },


 });

// récupération du choix de l'utilisateur en fonction de la case cochée
Template.vot_poll.events({

    'click #btnAddVote': function(event,instance) {
        event.preventDefault();
        instance.nombreVote.set(instance.nombreVote.get()+1);
        Votes.insert({
            totalVotes : instance.nombreVote.get()
        });
        var radios = document.getElementsByName('choice');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                
                // do whatever you want with the checked radio
                const avis = radios[i].value;
                console.log(avis);
                Votes.insert({avis:avis});
                
                // let vote = {
                //     avis: avis,
                //     // ajouter pour quelle initiative il voté ?
                //     createdAt: new Date(),
                //     ownerId: Meteor.userId()
                //     };
            
                //     Cases.insert(vote);
                    // Cases.update({initativeID: _id },{$inc : {document.getElementByName('choice').value : 1 },{$inc : {VotesTotal : 1}})
               

                
                break;
            }
        
        
        
        
            // Cases.update({initativeID: _id },{$inc : {document.getElementByName('choice').value : 1 },{$inc : {VotesTotal : 1}})
            // votes.update({article: 72},{$inc : {PourPrincipe : 1 }})
        }    
        },

});