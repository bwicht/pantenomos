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

    //application de la classe choisie à la sélection
    highlighter.addClassApplier(rangy.createClassApplier(lastSelectedClassName, {
        ignoreWhiteSpace: true
    }));
}

Template.vot_lawText.events({

    'click .popupChoices'(event, instance) {

        //restaure la sélection de l'utilisateur (effacée par le click sur le choix d'avis)
        rangy.restoreSelection(savedSelection);

        //conserve le choix de l'avis
        lastSelectedClassName = event.target.classList[1];

        //masque la popup de choix
        event.target.parentNode.style.display = "none";

        changeHighlightColor();

        //partie du texte sélectionnée par l'utilisateur
        let selection = rangy.getSelection();

        //node de départ de la sélection
        let selectionNode = selection.anchorNode;
        let lastSelectedDiv;
        let lastSelectedP;

        //cherche récursivement le paragraphe puis le div qui contiennent la sélection en remontant les nœuds du DOM jusqu'à les trouver
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

        //mise en surbrillance de la sélection (restreinte à son div de départ)
        highlighter.highlightSelection(lastSelectedClassName, {containerElementId: lastSelectedDiv.id});
        document.getElementById("highlightSubmitButton").value = "Soumettre mon avis";

        //suppression de la sélection
        selection.removeAllRanges();
    },

    'mouseup .articlePoint'(event, instance) {
        //sélection de l'utilisateur
        let selectedText = rangy.getSelection();

        //force Safari a mettre à jour l'affichage du DOM en supprimant puis recréant la sélection
        savedSelection = rangy.saveSelection();

        rangy.getSelection().removeAllRanges();
        rangy.restoreSelection(savedSelection);

        //la sélection doit commencer d'un paragraphe; si elle part d'un DIV (ou que les avis moyens sont déjà affichés), on la supprime
        if (displaysAverageHighlights || selectedText.anchorNode.parentNode.tagName == "DIV") {
            selectedText.removeAllRanges();
        } else {
            //étend la sélection jusqu'au début et à la fin des mots
            selectedText.expand("word", { wordOptions: { wordRegex:/[a-z0-9\u00C0-\u00FF]+('[a-z0-9\u00C0-\u00FF]+)*/gi } } );

            //sauve la sélection (elle sera perdue lors du click sur le choix d'un avis dans la popup de sélection)
            savedSelection = rangy.saveSelection();

            //affiche la popup de sélection des avis
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
        //affichage des avis moyens
        displaysAverageHighlights = true;

        //récupère tous les articles du document
        let allArticles = document.getElementsByClassName("lawArticleContent");
        
        //parcourt chaque article du texte de loi
        for (let currentArticle of allArticles) {

            currentArticle.childNodes.forEach(function(element) {

                if (element.tagName == "P") {
                    //position du mot dans le paragraphe
                    let position = 0;

                    //parcourt les enfants du paragraphe en quête de sélection
                    element.childNodes.forEach(function(node) {

                        //sans tag, ce n'est pas une sélection
                        if(!node.tagName) {
                            //Compte le nombre de mots consécutifs qui ne sont pas soulignés et déplace le curseur
                            position += node.textContent.split(' ').length - 1;
                        }

                        //si l'enfant possède une classe, c'est que le passage est souligné
                        else if (node.classList[0] && node.className != "rangySelectionBoundary") {
                                                            
                            //nombre de mots soulignés = nombre de mot du noeud
                            let highlightedWords = node.textContent.split(' ');

                            //pour chaque mot souligné
                            highlightedWords.forEach(function(word) {

                                //si le mot n'est pas un espace
                                if (word != "") {

                                    //à faire: ajout de l'ID de l'utilisateur courant à la collection
                                    let highlightment = {project_id: FlowRouter.getParam('_id'), parent_id: element.id, position: null, score: null};

                                    //sélection du score en fonction de l'avis 
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

                                    //position du mot souligné dans le paragraphe
                                    highlightment.position = position++;

                                    if (highlightment.score) {
                                        //insertion des surlignages dans la BD
                                        Meteor.call('highlightments.create', highlightment);
                                    }
                                }
                            });
                        }
                    });
                }
            });
        }

        //après sauvegarde des surlignages, suppression des sélections de l'utilisateur
        highlighter.removeAllHighlights();
        document.getElementById("highlightSubmitButton").style.display = "none";

        //reconstitution des highlights "moyens"

        //pour chaque article du document
        for (let currentArticle of allArticles) {

            //pour chaque node de l'article
            currentArticle.childNodes.forEach(function(paragraph) {

                //si le node est un paragraphe
                if (paragraph.tagName == "P") {

                    //tous les mots du paragraphe
                    let listWords = paragraph.textContent.split(" ");
                    let wordNumber = 0;
                    let wordPosition = 0;

                    //suppression complète du texte du paragraphe afin de pouvoir le reconstituer mot à mot en fonction des surlignages des utilisateurs
                    paragraph.innerHTML = "";

                    //pour chaque mot du paragraphe
                    listWords.forEach(function(word) {

                        let wordScore = 0;

                        //recherche dans la BD des surlignages des utilisateurs relatifs à ce mot précis
                        let scores = Highlightments.find({
                            $and: [
                                {"highlightment.project_id": FlowRouter.getParam('_id') },
                                {"highlightment.parent_id": paragraph.id },
                                {"highlightment.position": wordNumber},
                            ]}).fetch();

                        //calcul du score moyen pour ce mot précis:
                        scores.forEach(function(score) {
                            //addition de tous les scores trouvés pour le mot
                            wordScore += score.highlightment.score;
                        });

                        //puis division par le nombre de scores trouvés pour le mot
                        wordScore /= scores.length;

                        //si le mot a été souligné au moins une fois par un utilisateur
                        if (scores.length > 0) {
                            let wordClass;

                            //attribution d'une classe en fonction du score moyen pour le mot
                            if (wordScore < -15) {
                                wordClass = "highlightContre";

                            } else if (wordScore >= -15 && wordScore < -5) {
                                wordClass = "highlightContrePrincipe";

                            } else if (wordScore >= -5 && wordScore < 5) {
                                wordClass = "highlightNeutral";

                            } else if (wordScore >= 5 && wordScore <= 15) {
                                wordClass = "highlightPourPrincipe";

                            } else if (wordScore > 15) {
                                wordClass = "highlightPour";
                            }

                            //insertion du mot dans une balise span (avec son score et le nombre d'avis comme titre)
                            paragraph.innerHTML += '<span class="' + wordClass + '" title="Score: ' + Math.round(wordScore * 100) / 100 + ' (' + scores.length + ' avis)">' + word + '</span> ';
                        }

                        //si le mot n'a jamais été souligné, on l'ajoute tel quel
                        else {
                            paragraph.innerHTML += word + " ";
                        }

                        //déplacement au mot suivant
                        wordPosition += word.length + 1;
                        wordNumber++;
                    });

                    //extension des surlignages jusqu'au mot suivant (s'il est également souligné) afin d'éviter les trous dans les surlignages
                    paragraph.innerHTML = paragraph.innerHTML.replace(/<\/span>(\s*|\n*)<span/gm, " </span><span");
                }
            });
        }
        document.getElementById("highlightSubmitButton").value = "Proposer un avis";
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
    displaysAverageHighlights = false;
    changeHighlightColor();
});