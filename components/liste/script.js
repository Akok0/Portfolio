const templateFile = await fetch("./components/liste/template.html");
const template = await templateFile.text();
const templateLiFile = await fetch("./components/liste/templateLi.html");
const templateLi = await templateLiFile.text();

let LI = {};

LI.format = function(data){
    let html = template;

    let htmlLi = "";
    let total = 0;

    for (let project of data){
        let li = templateLi;
        li = li.replaceAll("{{id}}", project.id)
                .replaceAll("{{title}}", project.title)
                .replaceAll("{{description}}", project.description)
                .replaceAll("{{type}}", project.type)
                .replaceAll("{{image}}", project.image);
        htmlLi += li;
    }

    html = html.replaceAll("{{Li}}", htmlLi);
    return html;
}

LI.render= function(where, data){
    let node = document.querySelector(where);
    node.innerHTML += LI.format(data);
}

export { LI };