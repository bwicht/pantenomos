//importation des méthodes
import { Projects } from '../api/db_projects.js';
import { Highlightments } from '../api/db_highlightments.js';

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

let displaysAverageHighlights;

function changeHighlightColor() {

    //Application de la classe choisie à la sélection
    highlighter.addClassApplier(rangy.createClassApplier(lastSelectedClassName, {

        ignoreWhiteSpace: true
    
    }));
}

Template.vot_lawText.events({

    'click .popupChoices'(event, instance) {

        //Restaure la sélection de l'utilisateur (effacée par le click sur le choix d'avis)
        rangy.restoreSelection(savedSelection);

        //Conserve le choix de l'avis
        lastSelectedClassName = event.target.classList[1];

        //Masque la popup de choix
        event.target.parentNode.style.display = "none";

        changeHighlightColor();

        //Partie du texte sélectionnée par l'utilisateur
        let selection = rangy.getSelection();

        //Node de départ de la sélection
        let selectionNode = selection.anchorNode;

        let lastSelectedDiv;

        let lastSelectedP;

        //Cherche récursivement le paragraphe puis le div qui contiennent la sélection en remontant les nœuds du DOM jusqu'à les trouver
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

        //Mise en surbrillance de la sélection (restreinte à son div de départ)
        highlighter.highlightSelection(lastSelectedClassName, {containerElementId: lastSelectedDiv.id});

        document.getElementById("highlightSubmitButton").value = "Soumettre mon avis";

        //Suppression de la sélection
        selection.removeAllRanges();
    },

    'mouseup .articlePoint'(event, instance) {

        //Sélection de l'utilisateur
        let selectedText = rangy.getSelection();

        //Force Safari a mettre à jour l'affichage du DOM en supprimant puis recréant la sélection
        savedSelection = rangy.saveSelection();

        rangy.getSelection().removeAllRanges();

        rangy.restoreSelection(savedSelection);

        //La sélection doit commencer d'un paragraphe; si elle part d'un DIV (ou que les avis moyens sont déjà affichés), on la supprime
        if (displaysAverageHighlights || selectedText.anchorNode.parentNode.tagName == "DIV") {

            selectedText.removeAllRanges();
        }

        else {

            //Etend la sélection jusqu'au début et à la fin des mots
            selectedText.expand("word", { wordOptions: { wordRegex:/[a-z0-9\u00C0-\u00FF]+('[a-z0-9\u00C0-\u00FF]+)*/gi } } );

            //Sauve la sélection (elle sera perdue lors du click sur le choix d'un avis dans la popup de sélection)
            savedSelection = rangy.saveSelection();

            //Affiche la popup de sélection des avis
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

        //Affichage des avis moyens
        displaysAverageHighlights = true;

        //Récupère tous les articles du document
        let allArticles = document.getElementsByClassName("lawArticleContent");
        
        //Parcourt chaque article du texte de loi
        for (let currentArticle of allArticles) {

            currentArticle.childNodes.forEach(function(element) {

                if (element.tagName == "P") {

                    //Position du mot dans le paragraphe
                    let position = 0;

                    //Parcourt les enfants du paragraphe en quête de sélection
                    element.childNodes.forEach(function(node) {

                        //Sans tag, ce n'est pas une sélection
                        if(!node.tagName) {

                            //Compte le nombre de mots consécutifs qui ne sont pas soulignés et déplace le curseur
                            position += node.textContent.split(' ').length - 1;
                        }

                        //Si l'enfant possède une classe, c'est que le passage est souligné
                        else if (node.classList[0] && node.className != "rangySelectionBoundary") {
                                                            
                            //Nombre de mots soulignés = nombre de mot du noeud
                            let highlightedWords = node.textContent.split(' ');

                            //Pour chaque mot souligné
                            highlightedWords.forEach(function(word) {

                                //Si le mot n'est pas un espace
                                if (word != "") {

                                    //A faire: ajout de l'ID de l'utilisateur courant à la collection
                                    let highlightment = {project_id: FlowRouter.getParam('_id'), parent_id: element.id, position: null, score: null};

                                    //Sélection du score en fonction de l'avis 
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

                                    //Position du mot souligné dans le paragraphe
                                    highlightment.position = position++;

                                    if (highlightment.score) {

                                        //Insertion des surlignages dans la BD
                                        Meteor.call('highlightments.create', highlightment);
                                    }
                                }
                            
                            });

                        }

                    });

                }
            });
        }

        //Après sauvegarde des surlignages, suppression des sélections de l'utilisateur
        highlighter.removeAllHighlights();

        document.getElementById("highlightSubmitButton").style.display = "none";

        //Reconstitution des highlights "moyens"

        //Pour chaque article du document
        for (let currentArticle of allArticles) {

            //Pour chaque node de l'article
            currentArticle.childNodes.forEach(function(paragraph) {

                //Si le node est un paragraphe
                if (paragraph.tagName == "P") {

                    //Tous les mots du paragraphe
                    let listWords = paragraph.textContent.split(" ");

                    let wordNumber = 0;

                    let wordPosition = 0;

                    //Suppression complète du texte du paragraphe afin de pouvoir le reconstituer mot à mot en fonction des surlignages des utilisateurs
                    paragraph.innerHTML = "";

                    //Pour chaque mot du paragraphe
                    listWords.forEach(function(word) {

                        let wordScore = 0;

                        //Recherche dans la BD des surlignages des utilisateurs relatifs à ce mot précis
                        let scores = Highlightments.find({
                            $and: [
                                {"highlightment.project_id": FlowRouter.getParam('_id') },
                                {"highlightment.parent_id": paragraph.id },
                                {"highlightment.position": wordNumber},
                            ]}).fetch();

                        //Calcul du score moyen pour ce mot précis:
                        scores.forEach(function(score) {

                            //Addition de tous les scores trouvés pour le mot
                            wordScore += score.highlightment.score;

                        });

                        //Puis division par le nombre de scores trouvés pour le mot
                        wordScore /= scores.length;

                        //Si le mot a été souligné au moins une fois par un utilisateur
                        if (scores.length > 0) {

                            let wordClass;

                            //Attribution d'une classe en fonction du score moyen pour le mot
                            if (wordScore < -15) {

                                wordClass = "highlightContre";
                            }

                            else if (wordScore >= -15 && wordScore < -5) {

                                wordClass = "highlightContrePrincipe";
                            }

                            else if (wordScore >= -5 && wordScore < 5) {

                                wordClass = "highlightNeutral";

                            }

                            else if (wordScore >= 5 && wordScore <= 15) {

                                wordClass = "highlightPourPrincipe";
                            }

                            else if (wordScore > 15) {

                                wordClass = "highlightPour";
                            }

                            //Insertion du mot dans une balise span (avec son score et le nombre d'avis comme titre)
                            paragraph.innerHTML += '<span class="' + wordClass + '" title="Score: ' + Math.round(wordScore * 100) / 100 + ' (' + scores.length + ' avis)">' + word + '</span> ';
                        
                        }

                        //Si le mot n'a jamais été souligné, on l'ajoute tel quel
                        else {

                            paragraph.innerHTML += word + " ";
                        }

                        //Déplacement au mot suivant
                        wordPosition += word.length + 1;

                        wordNumber++;

                    });

                    //Extension des surlignages jusqu'au mot suivant (s'il est également souligné) afin d'éviter les trous dans les surlignages
                    paragraph.innerHTML = paragraph.innerHTML.replace(/<\/span>(\s*|\n*)<span/gm, " </span><span");
                }
            });
        }

        document.getElementById("highlightSubmitButton").value = "Proposer un avis";
    },

});

//Extrait les données collectées dans la BD
Template.vot_lawText.helpers({

    project: function() {

        let currentProject = Projects.findOne({_id: FlowRouter.getParam('_id')});

        return currentProject && currentProject.project;
    },

});

Template.vot_lawText.onRendered(function() {
    
    rangy.init();

    highlighter = rangy.createHighlighter();

    displaysAverageHighlights = false;

    changeHighlightColor();

});