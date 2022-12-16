import { projects } from '../../data/projects';
const projectsList = document.querySelector("section#projects ul#projects-list");

for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    var listItem = document.createElement("li");
    listItem.classList.add("project");


    var nameHeading = document.createElement("h3");
    nameHeading.innerText = project.name;
    listItem.appendChild(nameHeading);


    var techListLabel = document.createElement("label");
    techListLabel.id = project.name + "-tech-list-label";
    techListLabel.innerText = "Technologies"
    listItem.appendChild(techListLabel);


    var techList = document.createElement("ul");
    techList.setAttribute("aria-labelledby", techListLabel.id);

    for (let i = 0; i < project.technologies.length; i++) {
        const technology = project.technologies[i];
        
        var techListItem = document.createElement("li");
        techListItem.innerText = technology;
        techList.appendChild(techListItem);
    }
    listItem.appendChild(techList);


    var descriptionParagraph = document.createElement("p");
    descriptionParagraph.innerText = project.description;
    listItem.appendChild(descriptionParagraph);

    var buttonRow = document.createElement("div");
    buttonRow.classList.add("button-row");

        var liveLink = document.createElement("a");
        liveLink.href = project.live;
        liveLink.target = "_blank";
        liveLink.innerText = "Live";
        buttonRow.appendChild(liveLink);

        var repoLink = document.createElement("a");
        repoLink.href = project.repo;
        repoLink.target = "_blank";
        repoLink.innerText = "Repo";
        buttonRow.appendChild(repoLink);

    listItem.appendChild(buttonRow);

    projectsList.appendChild(listItem);
}