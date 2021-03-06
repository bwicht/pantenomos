//importation de méthodes
import '../imports/templates/homePage.html';
import '../imports/templates/copyright.html';
import '../imports/templates/navbar.html';
import '../imports/templates/newProject.html';

//importation de fichiers JavaScript
import '../imports/ui/homePage.js';
import '../imports/ui/newProject.js';
import '../imports/ui/votation.js';
import '../imports/ui/navbar.js';
import '../imports/ui/poll.js';
import '../imports/ui/lawText.js';
import '../imports/ui/comments.js';
import '../imports/ui/Navbar_logo.js';
import '../imports/ui/sidebar.js';
import '../imports/ui/globalHelpers';
import '../both';

//formatage date
import '../lib/routes.js';

Template.registerHelper('formateDate', function(date) {
    return moment(date).format('MM.DD.YYYY, à HH:mm');
});

import { Votes,Projects,Comments } from '../imports/api'

if (Meteor.isDevelopment){
    window.Votes = Votes;
    window.Projects = Projects;
    window.Comments = Comments;
}



