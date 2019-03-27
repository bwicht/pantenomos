import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

//import '../imports/ui/body.js'; //pourquoi cela fait bugger le code ?

import './main.html';
import '../imports/templates/homePage.html';
import '../imports/templates/projet.html';
import '../imports/templates/firstPart.html';
import '../imports/templates/secondPart.html';
import '../imports/templates/thirdPart.html';
import '../imports/templates/copyright.html';
import '../imports/ui/body.js';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });


