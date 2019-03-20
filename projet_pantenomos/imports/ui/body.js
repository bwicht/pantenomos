import {Template } from 'meteor/templating';

import  { Avis } from '../api/avis.js';

import '.body/body.html';

Template.body.helpers({
    aviss : [
        { text: 'avis de boulet 1'},
        { text: 'avis de boulet 1'},
        { text: 'avis de boulet 1'},

    ],
       
    
});