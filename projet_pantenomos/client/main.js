//importation de méthodes
import '../imports/templates/homePage.html';
import '../imports/templates/copyright.html';
import '../imports/templates/navbar.html';
import '../imports/templates/newProject.html';
import '../imports/templates/sidebar.html';


//importation de fichiers JavaScript
import '../imports/ui/homePage.js';
import '../imports/ui/newProject.js';
import '../imports/ui/votation.js';
import '../imports/ui/navbar.js';
import '../imports/ui/poll.js';
import '../imports/ui/lawText.js';
import '../imports/ui/comments.js';
import '../imports/ui/Navbar_logo.js';

import '../both';

//formatage date
import '../lib/routes.js';

Template.registerHelper('formateDate', function(date) {
    
    return moment(date).format('MM.DD.YYYY, à HH:mm');
});

//regexp pour les sauts de lignes
Template.registerHelper('addLineBreak', function (data) {
        
    return data.replace(/\n/g, "<br />");
});

