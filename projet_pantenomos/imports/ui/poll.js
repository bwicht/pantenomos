//importation des méthodes
import { ReactiveVar } from 'meteor/reactive-var';
import  { Votes } from '../api/db_cases.js';
// nom de la database à remplir
import '../templates/vot_poll.html';

let userChoice;

Template.vot_poll.onCreated(function() {

  userChoice = new ReactiveVar(false);

});

Template.vot_poll.helpers({

    nombreVote: function() {

        return Votes.find({}, {"initiative_id": FlowRouter.getParam('_id')}).fetch().length;
    },

    choixUtilisateur: function() {

        return userChoice.get();
    },


 });