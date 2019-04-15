import { Projects } from '../api/db_projects.js';

Template.vot_secondPart.helpers({
    projects() {
      return Projects.find().fetch();
    },
});