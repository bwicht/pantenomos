// Base de données contenant les commentaires de la partie III

import { Mongo } from 'meteor/mongo';

export const Comments = new Mongo.Collection('comments');


