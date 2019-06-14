//importation des méthodes
import { Mongo } from 'meteor/mongo';

//création de constantes qui serviront à référencer les BD dans le code pour la partie III
export const Comments = new Mongo.Collection('comments');

Meteor.methods({
    'comments.create'(comment) {
        let e = Comments.insert({comment});
        return e;
    }
})