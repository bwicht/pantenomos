//importation des méthodes
import { Projects } from '../api/db_projects.js';
import '../templates/vot_lawText.html';

//surlignage en fonction du choix du sondage
Template.vot_lawText.events({

    'mouseup #laws'(event, instance) {
        
        let selection = document.getSelection();
        // console.log(selection.getRangeAt(0).startContainer.parentNode.innerHTML[selection.anchorOffset])
        let selection_text = selection.toString();
        // console.log(selection_text)

        // let parent = selection.getRangeAt(0).startContainer.parentNode
        // let textComplet = parent.innerHTML

        // arrTextComplet = textComplet.split("")
        // arrTextComplet.splice(selection.anchorOffset, 0, "<span class='highlightPour'>")
        // arrTextComplet.splice((selection.anchorOffset + selection.toString().length + 1), 0, "</span>")
        // let textFinal = arrTextComplet.join("")
        
        // console.log(textFinal)

        // parent.innerHTML = textFinal

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