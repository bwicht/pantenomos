import { Template } from 'meteor/templating';

import  { Commentaires } from '../api/commentaires.js';

import './body.html';

Template.body.helpers({
     commentaires() {
        return Commentaires.find({});

     },
        
    
});

