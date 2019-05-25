//importation des méthodes
import  { Cases } from '../api/db_cases.js';
import '../templates/vot_poll.html';

//initialisation des variables qui définiront le choix de l'utilisateur
//+ un compteur tuto
//Template.vot_poll.onCreated(function vot_pollOnCreated() {
    
//     this.case1 = new ReactiveVar (0);
//     this.case2 = new ReactiveVar (0);
//     this.case3 = new ReactiveVar (0);
//     this.case4 = new ReactiveVar (0);
//     this.counter = new ReactiveVar (0);

//});

//helpers = fonctions, on leur donne un paramètre et ils rendent un paramètre si nécessaire
Template.vot_poll.helpers({
    cases() {
        return Cases.find().fetch();
  
     },
     choix() {
        return Template.instance().case1.get();
     },
  });

//MERCI D'AJOUTER UN COMMENTAIRE
Template.vot_poll.events({

    'checked .poll'(event, instance) {
        event.target
        instance.case.set(instance.case1.get() + 1 );
        votes.update({article: 72},{$inc : {PourPrincipe : 1 }})
    },

    'checked .poll'(event, instance){
        Cases.insert({
            value: instance.case1.get(),
            createdAt: new Date()
        });
    },
});

