import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import  { Cases } from '../api/db_cases.js';
import '../imports/templates/ui_vot_firstPart.html';


// initialisation des variables qui définiront le choix de l'utilisateur
// + un compteur tuto
Template.vot_firstPart.onCreated(function vot_firstPartOnCreated() {
    
    this.case1 = new ReactiveVar (0);
    this.case2 = new ReactiveVar (0);
    this.case3 = new ReactiveVar (0);
    this.case4 = new ReactiveVar (0);
    this.counter = new ReactiveVar (0);

});

// helpers = fonctions, on leur donne un paramètre et ils rendent un paramètre si nécéssaire

Template.vot_firstPart.helpers({
    cases() {
        return Cases.find().fetch();
  
     },
     choix() {
        return Template.instance().case1.get();
     },
  });

Template.vot_firstPart.events({
    'click .cases'(event, instance) {
        // pourquoi event en opaque

        instance.case1.set(instance.case1.get() + 1 );


    },
    'click .cases'(event, instance){
        
        Cases.insert({
            value: instance.case1.get(),
            createdAt: new Date()

        });

    },



});

