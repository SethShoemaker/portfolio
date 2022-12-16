import { skills } from "../../data/skills";

const skillsList = document.querySelector("section#skills ul");
const skillImagePath = "/images/skills/";

for (let i = 0; i < skills.length; i++) {
    const skill = skills[i];
    
    var listItem = document.createElement("li");

    var iconImage = document.createElement("img");
    iconImage.src = skillImagePath + skill.image;
    iconImage.draggable = false;
    listItem.appendChild(iconImage)

    var nameSpan = document.createElement("span");
    nameSpan.innerText = skill.name;
    listItem.append(nameSpan);

    skillsList.appendChild(listItem);
}