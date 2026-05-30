const templateFile = await fetch("./components/detail/template.html");
const template = await templateFile.text();
const templateImageFile = await fetch("./components/detail/templateImage.html");
const templateImage = await templateImageFile.text();
const templateSecteurFile = await fetch("./components/detail/templateSecteur.html");
const templateSecteur = await templateSecteurFile.text();
const templateInfoFile = await fetch("./components/detail/templateInfo.html");
const templateInfo = await templateInfoFile.text();

let Detail = {};

Detail.format = function(data) {
    let html = template;
    
    let buttonHTML = "";
    if (data.link && data.link.trim() !== "") { 
        buttonHTML = `<a class="detail__btn" href="${data.link}" target="_blank">accéder au projet</a>`;
    }

    html = html.replaceAll("{{title}}", data.title)
               .replaceAll("{{description}}", data.description)
               .replaceAll("{{type}}", data.type)
               .replaceAll("{{image}}", data.image)
               .replaceAll("{{buttonProject}}", buttonHTML);


    let htmlImg = "";
    for (let i=0; i< (data.images).length; i++){
        let li = templateImage;
        li = li.replaceAll("{{image}}", data.images[i]);
        htmlImg += li;
    }
    let htmlSec = "";

    for (let i=0; i< (data.secteurs).length; i++){
        let li = templateSecteur;
        li = li.replaceAll("{{secteur}}", data.secteurs[i]);
        htmlSec += li;
    }

    let htmlInfo = "";
    for (let i=0; i< (data.infos).length; i++){
        let li = templateInfo;
        li = li.replaceAll("{{info}}", data.infos[i]);
        htmlInfo += li;
    }

    html = html.replaceAll("{{images}}", htmlImg).replaceAll("{{secteur}}", htmlSec).replaceAll("{{info}}", htmlInfo);
    return html;
}

Detail.render = function(where, data) {
    let node = document.querySelector(where);
    if (!node) return;

    const queryString = window.location.search; 
    const urlParams = new URLSearchParams(queryString);
    const projectId = urlParams.get('id');
    const projectType = urlParams.get('type');

    if (!projectId || !projectType) {
        node.innerHTML = "<h1>Erreur : Paramètres d'URL incomplets (id ou type manquant)</h1>";
        return;
    }

    const targetArray = data[projectType];

    if (!targetArray) {
        node.innerHTML = "<h1>Erreur : Type de projet inconnu</h1>";
        return;
    }

    const projectData = targetArray.find(projet => projet.id == parseInt(projectId));

    if (!projectData) {
        node.innerHTML = "<h1>Erreur : Projet introuvable</h1>";
        return;
    }

    node.innerHTML = Detail.format(projectData);
}

export { Detail };