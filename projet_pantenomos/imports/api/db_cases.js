// Base de données contenant les cases de la partie 1

import { Mongo } from 'meteor/mongo';

export const Cases = new Mongo.Collection('cases');