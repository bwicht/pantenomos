// base de données contenant les projets qui seront utilisés dans la partie II
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Projects = new Mongo.Collection('projects');