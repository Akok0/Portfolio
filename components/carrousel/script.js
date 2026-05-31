const templateFile = await fetch("./components/carrousel/template.html");
const template = await templateFile.text();
const templateCardFile = await fetch("./components/carrousel/templateCard.html");
const templateCard = await templateCardFile.text();

let Cards = {};

Cards.format = function(data){
    let html = template;

    html = html.replaceAll("{{link}} ");

    let htmlCard = "";
    let total = 0;

    for (let card of data){
        if(card.id < 7){
            let li = templateCard;
            li = li.replaceAll("{{id}}", card.id).replaceAll("{{image}}", card.image).replaceAll("{{link}}", card.link).replaceAll("{{title}}", card.title);
            htmlCard += li;
            total += 1;
        }
    }

    html = html.replaceAll("{{total}}", total);
    html = html.replaceAll("{{projects}}", htmlCard);
    return html;
}

Cards.render= function(where, data){
    let node = document.querySelector(where);
    node.innerHTML += Cards.format(data);
}

export { Cards };