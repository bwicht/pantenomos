import { Projects } from '../api/db_projects.js';

let amendementCount = 0;

//À AJOUTER: 1. Ajout de notes de bas de page 2. Mise en forme de base en Markup Language.

Template.newProject.events({

    //Création d'un projet
    'submit #formNewProject': function(event, template){

        event.preventDefault();

        let project =  {title: '', amendements: []};

        project.title = document.getElementById("projectTitle").value;

        let amendements = document.getElementsByClassName("amendement");

        for (let i = 1; i <= amendements.length; i++) {

            let newAmendement = {title: document.getElementById("am_" + i + "_title").value, articles: []};

            let articles = document.getElementsByClassName("article " + i);

            for (let j = 1; j <= articles.length; j++) {

                let newArticle = {title: document.getElementById("am_" + i + "_art_" + j + "_title").value, text: document.getElementById("am_" + i + "_art_" + j + "_text").value}
                
                newAmendement.articles.push({article: newArticle});
            }

            project.amendements.push({amendement: newAmendement});
        }

        // Insert un projet dans la collection
        Projects.insert({project});

        // Vide le formulaire
        document.getElementById("projectTitle").value = '';

        var topNode = document.getElementById("lawText");

        while (topNode.firstChild) {
            topNode.removeChild(topNode.firstChild);
        }
    },

    // Ajoute la fonction clic
    'click #addAmendement': function(event){

        event.preventDefault();

        amendementCount++;

        let newAmendement = document.createElement("div");

        newAmendement.className = "amendement";
        
        newAmendement.id = amendementCount;

        let newAmendementTitle = document.createElement("input");

        newAmendementTitle.id = "am_" + amendementCount + "_title";
        newAmendementTitle.type = "text";
        newAmendementTitle.size = 90;
        newAmendementTitle.value = amendementCount + ". ";

        newAmendement.appendChild(newAmendementTitle);

        newAmendement.appendChild(document.createElement("br"));

        let newAddArticle = document.createElement("input");

        newAddArticle.type = "button";
        newAddArticle.value = "+";

        newAmendement.appendChild(newAddArticle);

        newAmendement.appendChild(document.createElement("br"));

        let articleCount = 0;

        //Création de nouveaux articles
        newAddArticle.addEventListener("click", function() {

            articleCount++;;

            let newArticle = document.createElement("div");

            newArticle.className = "article " + amendementCount;

            newArticle.id = "am_" + newAmendement.id + "_art_" + articleCount

            let newArticleTitle = document.createElement("input");

            newArticleTitle.className = "articleTitle";

            newArticleTitle.id = newArticle.id + "_title";

            newArticleTitle.type = "text";
            newArticleTitle.size = 90;
            newArticleTitle.value = "Art. " + articleCount;

            newArticle.appendChild(newArticleTitle);

            newArticle.appendChild(document.createElement("br"));

            let newArticleTextArea = document.createElement("textarea");

            newArticleTextArea.id = newArticle.id + "_text";
            newArticleTextArea.className = "articleTextArea";

            newArticleTextArea.rows = 10;
            newArticleTextArea.cols = 100;

            newArticle.appendChild(newArticleTextArea);

            newArticle.appendChild(document.createElement("br"));

            let removeArticle = document.createElement("input");

            removeArticle.type = "button";
            removeArticle.value = "-";

            //Possibilité de supprimer les nouveaux articles
            removeArticle.addEventListener("click", function() {
        
                articleCount--;

                newAmendement.removeChild(newArticle);

            });

            newAmendement.removeChild(newAddArticle);

            newAmendement.appendChild(newArticle);

            newAmendement.appendChild(newAddArticle);

            newArticle.appendChild(removeArticle);

            newAmendement.appendChild(document.createElement("br"));

        });

        document.getElementById("lawText").appendChild(newAmendement);

        document.getElementById("lawText").appendChild(document.createElement("br"));

    }
});