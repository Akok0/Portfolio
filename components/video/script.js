const templateFile = await fetch("./components/video/template.html");
const template = await templateFile.text();
const templateVideoFile = await fetch("./components/video/templateVideo.html");
const templateVideo = await templateVideoFile.text();

let Video = {};

Video.format = function(data){
    let html = template;

    let htmlVideo = "";

    for (let project of data){
        let li = templateVideo;
        li = li.replaceAll("{{id}}", project.id).replaceAll("{{image}}", project.image);
        htmlVideo += li;
    }

    html = html.replaceAll("{{video}}", htmlVideo);
    return html;
}

Video.render= function(where, data){
    let node = document.querySelector(where);
    node.innerHTML += Video.format(data);
}

export { Video };