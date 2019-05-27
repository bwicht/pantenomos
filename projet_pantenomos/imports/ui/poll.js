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
    this.nombrePour =new ReactiveVar(0);
    this.nombreContre =new ReactiveVar(0);
    this.nombrePourPrincipe=new ReactiveVar(0);
    this.nombreContrePrincipe=new ReactiveVar(0);
});


Template.vot_poll.helpers({
    nombreVote(){
            return Template.instance().nombreVote.get();
    },
    nombrePour(){
        return Template.instance().nombrePour.get();
    },
    nombreContre(){
        return Template.instance().nombreContre.get();
    },
    nombrePourPrincip(){
        return Template.instance().nombrePourPrincipe.get();
    },
    nombreContrePrincipe(){
        return Template.instance().nombreContrePrincipe.get();
    },
    
    
    // avis(){
    //    return this.avis.get();
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
                if(avis === "Pour"){
                   Pour = +1;
                   instance.nombrePour.set(instance.nombrePour.get()+1);
                } else if(avis === "Contre"){
                    Contre =+1;
                    instance.nombreContre.set(instance.nombreContre.get()+1);
                } else if(avis === "PourPrincipe"){
                    PourPrincipe =+1;
                    instance.nombrePourPrincipe.set(instance.nombrePourPrincipe.get()+1);
                } 
                
                
                else {
                    ContrePrincipe=+1;
                    instance.nombreContrePrincipe.set(instance.nombreContrePrincipe.get()+1);

                }
                let vote = {
                         avis: radios,
                    //     // ajouter pour quelle initiative il voté ?
                        createdAt: new Date(),
                        // ownerId: Meteor.userId()
                         };
                Votes.insert({vote});
                
                
                    // Cases.update({initativeID: _id },{$inc : {document.getElementByName('choice').value : 1 },{$inc : {VotesTotal : 1}})
               

                
                break;
            }
        
        
        
        
            // Cases.update({initativeID: _id },{$inc : {document.getElementByName('choice').value : 1 },{$inc : {VotesTotal : 1}})
            // votes.update({article: 72},{$inc : {PourPrincipe : 1 }})
        }    
        },

});