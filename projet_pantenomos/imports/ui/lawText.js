//importation des méthodes
import { Projects } from '../api/db_projects.js';
import '../templates/vot_lawText.html';

//surlignage en fonction du choix du sondage
Template.vot_lawText.events({

    'mouseup #laws'(event, instance) {
       
        let selection = document.getSelection();
        let selection_text = selection.toString();

        let highlight = document.createElement('span');
        
        let pollChoice = document.querySelector('.custom-control-input:checked').value;

        if (pollChoice == "Pour") {

            highlight.className = "highlightPour";
        }

        else if (pollChoice == "Contre") {

            highlight.className = "highlightContre";
        }

        else if (pollChoice == "PourPrincipe") {

            highlight.className = "highlightPourPrincipe";
        }

        else if (pollChoice == "ContrePrincipe") {

            highlight.className = "highlightContrePrincipe";
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