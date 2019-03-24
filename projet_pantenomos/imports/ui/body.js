import {Template } from 'meteor/templating';

import  { Avis } from '../api/avis.js';

Template.body.helpers({
    aviss : [
        { text: 'avis de boulet 1'},
        { text: 'avis de boulet 1'},
        { text: 'avis de boulet 1'},
    ]

});