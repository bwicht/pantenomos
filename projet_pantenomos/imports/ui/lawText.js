//importation des méthodes
import { Projects } from '../api/db_projects.js';
import '../templates/vot_lawText.html';

import rangy from 'rangy'
import 'rangy/lib/rangy-selectionsaverestore'
import 'rangy/lib/rangy-classapplier'
import 'rangy/lib/rangy-highlighter'
import 'rangy/lib/rangy-textrange'
import 'rangy/lib/rangy-serializer'

let lastSelectedClassName = "highlightPour";

let savedSelection;

let highlighter;

function changeHighlightColor() {

    highlighter.addClassApplier(rangy.createClassApplier(lastSelectedClassName, {

        ignoreWhiteSpace: true
    
    }));
}

//surlignage en fonction du choix du sondage
Template.vot_lawText.events({

    'click .showPopup'(event, instance) {

        if (document.getElementById("hoveringDiv").style.display == "block") {

            document.getElementById("hoveringDiv").style.display = "none";

            event.target.innerHTML = "+";
        }

    },

    'click .popupChoices'(event, instance) {

        rangy.restoreSelection(savedSelection);

        lastSelectedClassName = event.target.classList[1];

        event.target.parentNode.style.display = "none";

        changeHighlightColor();

        let selection = rangy.getSelection();

        let selectionNode = selection.anchorNode;

        let lastSelectedDiv;

        let lastSelectedP;

        //On cherche le div parent
        while (selectionNode.parentNode) {
            
            selectionNode = selectionNode.parentNode;

            if (selectionNode.tagName == "P") {

                lastSelectedP = selectionNode;

                continue;
            }
            
            if (selectionNode.tagName === "DIV") {

                lastSelectedDiv = selectionNode;
                
                break;   
            }
        }

        highlighter.highlightSelection(lastSelectedClassName, {containerElementId: lastSelectedDiv.id});

        selection.removeAllRanges();
    },

    'mouseup .articlePoint'(event, instance) {

        let selectedText = rangy.getSelection();

        if (selectedText.anchorNode.parentNode.tagName == "DIV") {

            selectedText.removeAllRanges();
        }

        else {

            selectedText.expand("word", { wordOptions: { wordRegex:/[a-z0-9\u00C0-\u00FF]+('[a-z0-9\u00C0-\u00FF]+)*/gi } } );

            savedSelection = rangy.saveSelection();

            let hoveringDiv = document.getElementById("hoveringDiv");

            lastSelectedPoint = event.target.parentNode;

            let left  = event.clientX + "px";
            let top  = event.clientY + 10 + "px";

            hoveringDiv.style.left = left;
            hoveringDiv.style.top = top;

            hoveringDiv.style.display = "block";
        }

    },

    'mouseup .lawArticleTitle'(event, instance) {

        rangy.getSelection().removeAllRanges();
    },

    'mouseup .lawAmendementTitle'(event, instance) {

        rangy.getSelection().removeAllRanges();
    },

    'click #highlightSubmitButton'(event, instance) {

        let highlightments = [];

        let allArticles = document.getElementsByClassName("lawArticleContent");
        
        for (let currentArticle of allArticles) {

            currentArticle.childNodes.forEach(function(element) {

                if (element.tagName == "P") {

                    let position = 0;

                    element.childNodes.forEach(function(node) {

                        if(!node.tagName) {

                            //Compte le nombre de mots pas souligné
                            position += node.textContent.split(' ').length - 1;
                        }

                        //Si lep assage est souligné
                        else if (node.classList[0]) {

                            let highlightedWords = node.textContent.split(' ');

                            highlightedWords.forEach(function(word) {

                                if (word != "") {

                                    //TODO: add user ID
                                    let highlightment = {project: FlowRouter.getParam('_id'), parent: element.id, position: null, score: null};

                                    switch(node.classList[0]) {

                                        case "highlightContre": 

                                            highlightment.score = -20;
                                            break;

                                        case "highlightContrePrincipe":

                                            highlightment.score = -10;
                                            break;
                                
                                        case "highlightPasDavis":

                                            highlightment.score = null;
                                            break;

                                        case "highlightPourPrincipe":

                                            highlightment.score = 10;
                                            break;

                                        case "highlightPour":

                                            highlightment.score = 20;
                                            break;
                                    }

                                    highlightment.position = position++;

                                    if (highlightment.score) {

                                        highlightments.push(highlightment);
                                    }
                                }
                            
                            });

                        }

                    });

                }
            });
        }

        console.log(highlightments);
    },

});

//extrait les données collectées dans la BD
Template.vot_lawText.helpers({

    project: function() {

        let currentProject = Projects.findOne({_id: FlowRouter.getParam('_id')});

        return currentProject && currentProject.project;
    },

});

Template.vot_lawText.onRendered(function() {
    
    rangy.init();

    highlighter = rangy.createHighlighter();

    changeHighlightColor();

});