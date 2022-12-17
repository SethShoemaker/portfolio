import { projects } from '../../data/projects';
const projectsList = document.querySelector("section#projects ul#projects-list");
const projectImagePath = "/images/projects/";
const laptopBackgroundImagePath = "/images/backgrounds/laptop.png";

for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    var listItem = document.createElement("li");
    listItem.classList.add("project");


    var listItemLeft = document.createElement("div");
    listItemLeft.classList.add("project-left");
    listItem.appendChild(listItemLeft);

    var nameHeading = document.createElement("h3");
    nameHeading.innerText = project.name;
    listItemLeft.appendChild(nameHeading);

    var techListLabel = document.createElement("label");
    techListLabel.id = project.name + "-tech-list-label";
    techListLabel.innerText = "Technologies"
    listItemLeft.appendChild(techListLabel);

    var techList = document.createElement("ul");
    techList.setAttribute("aria-labelledby", techListLabel.id);

    for (let i = 0; i < project.technologies.length; i++) {
        const technology = project.technologies[i];
        
        var techListItem = document.createElement("li");
        techListItem.innerText = technology;
        techList.appendChild(techListItem);
    }
    listItemLeft.appendChild(techList);

    var descriptionParagraph = document.createElement("p");
    descriptionParagraph.innerText = project.description;
    listItemLeft.appendChild(descriptionParagraph);

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

    listItemLeft.appendChild(buttonRow);


    var listItemRight = document.createElement("div");
    listItemRight.classList.add("project-right");
    listItem.appendChild(listItemRight);

    var imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    imageContainer.style.backgroundImage = `url(${laptopBackgroundImagePath})`;
    listItemRight.appendChild(imageContainer);

    var image = document.createElement("div");
    image.classList.add("image");
    image.role = "img";
    image.style.backgroundImage = `url(${projectImagePath + project.image})`;
    imageContainer.appendChild(image);

    projectsList.appendChild(listItem);
}