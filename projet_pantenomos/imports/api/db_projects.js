//importation des méthodes
import { Mongo } from 'meteor/mongo';

//création de constantes qui serviront à référencer les BD dans le code pour la partie II
export const Projects = new Mongo.Collection('projects');

Meteor.methods({
    'projects.create'(project) {
        return Projects.insert({project});
    },
})