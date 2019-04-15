import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import '../imports/api/db_comments.js';
import { Projects } from '../imports/api/db_projects.js';

Meteor.startup(() => {
  // code to run on server at startup

  //Clear all the projects
  //Projects.remove({});
});
