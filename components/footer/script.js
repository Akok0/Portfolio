const templateFile = await fetch("./components/footer/template.html");
const template = await templateFile.text();
const templateLiFile = await fetch("./components/footer/templateLi.html");
const templateLi = await templateLiFile.text();

let Footer = {};

Footer.format = function(data){
    let html = template;

    html = html.replaceAll("{{link}}", data.link);

    let htmlLi = "";

    for (let social of data.socials){
        let li = templateLi;
        li = li.replaceAll("{{link}}", social.link).replaceAll("{{logo}}", social.logo).replaceAll("{{name}}", social.name);
        htmlLi += li;
    }

    html = html.replaceAll("{{social}}", htmlLi);
    return html;
}

Footer.render= function(where, data){
    let node = document.querySelector(where);
    node.innerHTML += Footer.format(data);
}

export { Footer };