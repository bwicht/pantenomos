//importation des méthodes
import { Projects } from '../api/db_projects.js';
import '../templates/vot_lawText.html';

function findSubArticle(el) {

    while (el.parentNode) {

        el = el.parentNode;

        if (el.className === "subArticle") {

            return el;
        }
    }

    return null;
}


//surlignage en fonction du choix du sondage
Template.vot_lawText.events({

    'mouseup .subArticle'(event, instance) {

        let selection = document.getSelection();

        let selectionStart = findSubArticle(selection.anchorNode);

        let selectionText = selection.toString();

        if (selectionText.split('\n').length > 1) {

            selection.collapseToStart();

            let index = 0;

            //Etedons la sélection jusqu'à trouver un retour à la ligne...
            while (true) {

                if (selection.toString()[index] != "\n") {

                    try {
                                
                        selection.extend(selection.anchorNode, index++);
                    }

                    catch {

                        break;
                    }
                }
            }

            selectionText = selection.toString();

        }

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

        selectionText = selectionText.split('\n')[0];

        highlight.textContent = selectionText;

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

    //regexp pour les sauts de lignes
    addLineBreak: function (data) {
        
        return data.replace(/(.*)/g, "<div class=\"subArticle\">\$1</div>");

    },

});