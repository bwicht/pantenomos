//importation des méthodes
import { Mongo } from 'meteor/mongo';

export const Highlightments = new Mongo.Collection('highlightments');

Meteor.methods({
    
    'highlightments.create'(highlightment) {

        return Highlightments.insert({highlightment});
    },

})