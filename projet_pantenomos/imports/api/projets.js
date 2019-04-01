// base de données contenant les projets qui seront utilisés dans la partie II


import { Mongo } from 'meteor/mongo';


export const Projets = new Mongo.Collection('projets');