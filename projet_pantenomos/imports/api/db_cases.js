//importation des méthodes
import { Mongo } from 'meteor/mongo';

//création de constantes qui serviront à référencer les BD dans le code pour la partie I
export const Votes = new Mongo.Collection('votes');

Meteor.methods({
    'votes.create'(vote) {
        return Votes.insert({vote});
    },
})