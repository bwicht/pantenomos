import { Projects } from '../api/db_projects.js';

Template.vot_secondPart.helpers({
    projects() {

      //console.log(Projects.find().fetch());

      return Projects.find().fetch();
    },
});