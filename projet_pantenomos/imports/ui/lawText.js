//importation des méthodes
import { Projects } from '../api/db_projects.js';
import '../templates/vot_lawText.html';

let lastClickedPoint;
let lastSelectedClassName;

//surlignage en fonction du choix du sondage
Template.vot_lawText.events({

    'mouseover .showPopup'(event, instance) {

        let hoveringDiv = document.getElementById("hoveringDiv");

        event.target.innerHTML = "+";

        // hasUserClicked = false;

        lastClickedPoint = event.target.parentNode;

        let left  = event.clientX + "px";
        let top  = event.clientY + 10 + "px";

        hoveringDiv.style.left = left;
        hoveringDiv.style.top = top;

        hoveringDiv.style.display = "block";
    },

    'click .showPopup'(event, instance) {

        if (document.getElementById("hoveringDiv").style.display == "block") {

            document.getElementById("hoveringDiv").style.display = "none";

            event.target.innerHTML = "+";
        }

    },

    'mouseover .popupChoices'(event, instance) {

        // if (event.target.classList.length > 1) {

        //     lastClickedPoint.classList.add(event.target.classList[1]);
        // }

        // else {

        //     lastClickedPoint.className = lastClickedPoint.classList[0];
        // }
    },

    'mouseout .popupChoices'(event, instance) {

        // if (!hasUserClicked) {

        //     if (event.target.classList.length > 1) {
           
        //         lastClickedPoint.classList.remove(event.target.classList[1]);
        //     }

        //     else {

        //         lastClickedPoint.className = lastClickedPoint.classList[0];
        //     }
        // }
    },

    'click .popupChoices'(event, instance) {

        // hasUserClicked = true;

        //lastClickedPoint.classList.add(event.target.classList[1]);

        lastSelectedClassName = event.target.classList[1];

        event.target.parentNode.style.display = "none";
    },

    'mouseup .articlePoint'(event, instance) {

        let selection = document.getSelection();

        let selectionText = selection.toString();

        //
        if (selectionText.split('\n').length > 1) {

            selection.collapseToStart();

            let index = 0;

            //étendons la sélection jusqu'à trouver un retour à la ligne...
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
        }
        
        //selection.modify("extend", "forward", "word");

        selectionText = selection.toString();

         //définition des variables pour créer un span selon l'élément sélecionné dans le sondage
         let highlight = document.createElement('span');

         highlight.className = lastSelectedClassName;

         selectionText = selectionText.split('\n')[0];

         highlight.textContent = selectionText;

         let range = selection.getRangeAt(0);

         range.deleteContents();

         range.insertNode(highlight);

    }

});

//extrait les données collectées dans la BD
Template.vot_lawText.helpers({

    project: function() {

        let currentProject = Projects.findOne({_id: FlowRouter.getParam('_id')});

        return currentProject && currentProject.project;
    },

    //regexp pour les sauts de lignes
    // addLineBreak: function (data) {
        
    //     return data.replace(/(.*)/g, "<div class=\"articlePoint\">\$1</div>");

    // },

});