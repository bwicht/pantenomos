//importation de méthodes


//À FAIRE: il serait mieux d'importer que les fichiers .js, qui eux-mêmes appeleraient les templates concernés.
import '../imports/templates/homePage.html';
import '../imports/templates/hp_copyright.html';
import '../imports/templates/loginButton.html';
import '../imports/templates/navbar.html';
import '../imports/templates/newProject.html';
import '../imports/templates/vot_lawText.html';


//importation de fichiers JavaScript
import '../imports/ui/cases.js';
import '../imports/ui/comments.js';
import '../imports/ui/homePage.js';
import '../imports/ui/newProject.js';
import '../imports/ui/votation.js';
import '../imports/ui/Navbar_logo.js';

//formatage date
import '../lib/routes.js';

Template.registerHelper('formateDate', function(date) {
    
    return moment(date).format('MM.DD.YYYY, à HH:mm');
});

//regexp pour les sauts de lignes
Template.registerHelper('addLineBreak', function (data) {
        
    return data.replace(/\n/g, "<br />");
});

