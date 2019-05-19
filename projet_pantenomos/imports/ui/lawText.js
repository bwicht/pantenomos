//importation des méthodes
import { Projects } from '../api/db_projects.js';
import '../templates/vot_lawText.html';

Template.vot_lawText.events({

    'mouseup #laws'(event, instance) {
       
        let selection = document.getSelection();
        let selection_text = selection.toString();

        let highlight = document.createElement('span');
        
        let pollChoice = document.querySelector('.pollCheckBox:checked').value;

        if (pollChoice == "Pour") {

            highlight.className = "highlightPour";
        }

        else if (pollChoice == "Contre") {

            highlight.className = "highlightContre";
        }

        highlight.textContent = selection_text;

        let range = selection.getRangeAt(0);
        
        range.deleteContents();
        range.insertNode(highlight);
    },
});


//extrait les données collectées dans la BD

Template.vot_lawText.helpers({
    
    project: function() {

        let currentProject = Projects.findOne({_id: FlowRouter.getParam('_id')});

        return currentProject && currentProject.project;
    },

});