const templateFile = await fetch("./components/bento/template.html");
const template = await templateFile.text();
const templateCardFile = await fetch("./components/bento/templateCard.html");
const templateCard = await templateCardFile.text();

let Bento = {};

Bento.format = function(data){
    let html = template;

    html = html.replaceAll("{{link}} ");

    let htmlCard = "";
    let total = 0;

    for (let card of data){
        let li = templateCard;
        li = li.replaceAll("{{id}}", card.id).replaceAll("{{image}}", card.image).replaceAll("{{title}}", card.title).replaceAll("{{description}}", card.description).replaceAll("{{link}}", card.link);
        htmlCard += li;
        total += 1;
    }
    html = html.replaceAll("{{projects}}", htmlCard);
    return html;
}

Bento.render= function(where, data){
    let node = document.querySelector(where);
    node.innerHTML += Bento.format(data);
}

export { Bento };