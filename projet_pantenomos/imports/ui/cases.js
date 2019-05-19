//importation des méthodes
import { Template } from 'meteor/templating';
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

//helpers = fonctions, on leur donne un paramètre et ils rendent un paramètre si nécéssaire
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

    'checked .cases'(event, instance) {
        //pourquoi event en opaque
        event.target
        instance.case.set(instance.case1.get() + 1 );
        votes.update({article: 72},{$inc : {votePour : 1 }})
    },

    'checked .cases'(event, instance){
        Cases.insert({
            value: instance.case1.get(),
            createdAt: new Date()
        });
    },
});

//comment faire en sorte que seule une case puisse être cochée?
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

