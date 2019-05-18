//importation des méthodes
import { Projects } from '../api/db_projects.js';

//extraie les données collectées dans la BD
Template.vot_secondPart.helpers({
    
    project: function() {

        return Projects.findOne({_id: FlowRouter.getParam('_id')}).project;
    },
});

// //surligner et commenter les amendements
// Template.vot_secondPart.helpers({

//     laws: function getSelectedText() {

//         t = (document.all) ? document.selection.createRange().text : document.getSelection();
    
//         return t;
//     },
// });

// Template.vot_secondPart.helpers({

// laws: function highlightText() {
    
//     var selection = getSelectedText();
//     var selection_text = selection.toString();

//     // How do I add a span around the selected text?

//     var highlight = document.createElement('mark');
//     highlight.textContent = selection_text;

//     var range = selection.getRangeAt(0);
//     range.deleteContents();
//     range.insertNode(highlight);

//     },
// });

// document.getElementById("laws").addEventListener("mouseup", highlightText);