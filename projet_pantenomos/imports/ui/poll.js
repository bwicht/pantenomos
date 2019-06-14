//importation des méthodes
import { ReactiveVar } from 'meteor/reactive-var';
import  { Votes } from '../api/db_cases.js';
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

//récupération du choix de l'utilisateur en fonction de la case cochée
Template.vot_poll.events({

    'click #btnAddVote': function(event,instance) {

        let userVote = document.querySelector('.custom-control-input:checked').value;
        let newVote = {initiative_id: FlowRouter.getParam('_id'), vote: userVote};

        Meteor.call('votes.create', newVote);
        userChoice.set(userVote);

    },
});