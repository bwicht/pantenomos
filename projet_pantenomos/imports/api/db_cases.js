//importation des méthodes
import { Mongo } from 'meteor/mongo';

//création de constantes qui serviront à référencer les BD dans le code pour la partie I
export const Cases = new Mongo.Collection('cases');



Meteor.methods({
    
    'cases.create'(case) {

        return Cases.insert({case});
    }
    
})

// Meteor.methods({
    
//     'cases.create'(case) {

//         let e = Cases.insert({case});


//         return Cases.insert({project});
//     }
// })