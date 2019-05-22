//importation des méthodes
import { Projects } from '../api/db_projects.js';
import '../templates/vot_lawText.html';

let firstClickDiv;

//surlignage en fonction du choix du sondage
Template.vot_lawText.events({

    'mousedown .subArticle'(event, instance) {

        firstClickDiv = event.target;
    },

    'mouseup .subArticle'(event, instance) {

        if (firstClickDiv == event.target) {

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

            selection_text = selection_text.split('\n')[0];

            highlight.textContent = selection_text;

            let range = selection.getRangeAt(0);
        
            range.deleteContents();

            range.insertNode(highlight);
        }
    },
});

//extrait les données collectées dans la BD
Template.vot_lawText.helpers({
    
    project: function() {

        let currentProject = Projects.findOne({_id: FlowRouter.getParam('_id')});

        return currentProject && currentProject.project;
    },

    //regexp pour les sauts de lignes
    addLineBreak: function (data) {
        
        return data.replace(/(.*)/g, "<div class=\"subArticle\">\$1</div>");

    },

});