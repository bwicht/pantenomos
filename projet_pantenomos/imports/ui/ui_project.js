import { Projects } from '../api/db_projects.js';

let amendementCount = 0;

Template.newProject.events({

    //Création d'un projet
    'submit #formNewProject': function(event, template){

        event.preventDefault();

        let projectTitle = document.getElementById("projectTitle").value;

        // Insert a task into the collection
        Projects.insert({
            projectTitle
        });

        // Clear form
        document.getElementById("projectTitle").value = '';
    },

    'click #addAmendement': function(event){

        event.preventDefault();
        
        amendementCount++;

        let newAmendement = document.createElement("div");
        let newAmendementTitle = document.createElement("input");

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

            articleCount++;

            let newArticle = document.createElement("div");

            let newArticleTitle = document.createElement("span");

            newArticleTitle.innerHTML = "Art. " + articleCount;

            newArticle.appendChild(newArticleTitle);

            newArticle.appendChild(document.createElement("br"));

            let newArticleTextArea = document.createElement("textarea");

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