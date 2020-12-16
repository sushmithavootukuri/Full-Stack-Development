//Reusable Methods

//Creates and returns an image element with src,class and alt as attributes
const getImgElement = (className, srcPath, altText) => {
    let img = document.createElement("img");
    img.setAttribute("class", className);
    img.setAttribute("src", srcPath);
    img.setAttribute("alt", altText);

    return img;
};

//Creates and returns html element with tagname,id and class as attributes
const getElement = (tag, id, className) => {
    let element = document.createElement(tag);
    id ? element.setAttribute("id", id) : false;
    className ? element.setAttribute("class", className) : false;

    return element;
};

//creates an input element of type range inside tr element
const getSkillAndRating = (skill, rating) => {
    let tr = getElement("tr");
    let td = getElement("td");
    td.innerText = skill;
    let input = getElement("input");
    input.setAttribute("type", "range");
    input.setAttribute("min", 1);
    input.setAttribute("max", 100);
    input.setAttribute("value", rating);
    input.disabled = true;
    tr.append(td, input);

    return tr;
}

//creates a table with 1 row and 2 columns
const getTable = (data1, data2) => {
    let table = getElement("table");
    let tbody = getElement("tbody");
    let tr = getElement("tr");
    let td1 = getElement("td", "", "left");
    let h4 = getElement("h4");
    h4.innerText = data1;
    let td2 = getElement("td", "", "right");
    td2.innerText = data2;
    td1.append(h4);
    tr.append(td1, td2);
    tbody.append(tr);
    table.append(tbody);

    return table;
}

let mainDiv = getElement("div", "", "main");
let profileImg = getImgElement("profile", "img/profile.png", "profile photo");
let subDiv = getElement("div", "", "sub-main");
let userName = getElement("h1", "name", "");
userName.innerText = "BRIAN DUDEY";
subDiv.appendChild(userName);
mainDiv.append(profileImg, subDiv);


let addressDiv = getElement("div");
let address = getElement("p", "", "address section-content");
address.innerText = "N.Damen Avenue, Chicago 99999| 999–999–9999 | hello@kickresume.com |www.kickresume.com";
let hr = getElement("hr")
addressDiv.append(address, hr);


let mainTable = getElement("table", "", "content");
let tbody = getElement("tbody");
let tr = getElement("tr");


let firstPartition = getElement("td", "", "first main");
//Profile section
let profile = getElement("section");
let profileIcon = getImgElement("icon", "img/profile icon.png", "profile photo");
let profileHeading = getElement("h2", "", "section-heading");
profileHeading.innerText = "Profile";
let profileContent = getElement("p", "", "section-content");
profileContent.innerText = "Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer.I am ambitious, adventurous, assiduos, animated, and a literation advocate.";

profile.append(profileIcon, profileHeading, profileContent);
//Skills section
let skills = getElement("section");
let skillsIcon = getImgElement("icon", "img/skills.png", "Skills icon");
let skillsHeading = getElement("h2", "", "section-heading");
skillsHeading.innerText = "Skills";

let technichalSkills = getElement("div");
let techHeading = getElement("h4", "", "sub-heading");
techHeading.innerText = "Technical Skills";
let techTable = getElement("table");
let techBody = getElement("tbody");
let javascript = getSkillAndRating("Javascript", 80);
let CSS = getSkillAndRating("CSS", 80);
let HTML = getSkillAndRating("HTML", 60);
let react = getSkillAndRating("React", 60);
let redux = getSkillAndRating("Redux", 80);
let mongo = getSkillAndRating("Mongo", 80);
let deployment = getSkillAndRating("Deployment", 100);


techBody.append(javascript, CSS, HTML, react, redux, mongo, deployment);
techTable.append(techBody);
technichalSkills.append(techHeading, techTable);


let additionalSkills = getElement("div");
let asHeading = getElement("h4", "", "sub-heading");
asHeading.innerText = "Additional Skills";
let asTable = getElement("table");
let asBody = getElement("tbody");
let management = getSkillAndRating("Project Management", 100);
let recruitment = getSkillAndRating("Recruitment", 80);
let bussiness = getSkillAndRating("Bussiness Development", 100);
let editing = getSkillAndRating("Editing", 80);
let fund = getSkillAndRating("Fundraising", 100);

asBody.append(management, recruitment, bussiness, editing, fund);
asTable.append(asBody);
additionalSkills.append(asHeading, asTable);

skills.append(skillsIcon, skillsHeading, technichalSkills, additionalSkills);

//Work Experience
let workExperience = getElement("section");
let experienceIcon = getImgElement("icon", "img/experience.png", "Experience icon");
let experienceHeading = getElement("h2", "", "section-heading");
experienceHeading.innerText = "Work Experience";
let expTable = getTable("Event Manager", "03/2014–02/2017")
let company1 = "C3 Presents, Washington DC";
let roleList = getElement("ul");
let list1 = getElement("li");
list1.innerText = "Lead and execute all phases of event planning and production spanning committee recruitment,training,vendor relationships and on-site facilitation";
let list2 = getElement("li");
list2.innerText = "Brought new business to the organization through relentless networking and stewardship which helped the complany win the bid for the state Department Summit on the Middle East and the companies largest civic event to date, the United State of Women";
let list3 = getElement("li");
list3.innerText = "Excercise fiscal control over budget creation, tracking and reporting Collaborate with employees at all organizational levels to advance cohesive operations";
roleList.append(list1, list2, list3);
workExperience.append(experienceIcon, experienceHeading, expTable, company1, roleList);


firstPartition.append(profile, skills, workExperience);
let secondPartition = getElement("td", "", "main");
//Work Experience
workExperience = getElement("section");
experienceIcon = getImgElement("icon", "img/experience.png", "Experience icon");
experienceHeading = getElement("h2", "", "section-heading");
experienceHeading.innerText = "Work Experience";
expTable = getTable("Community Relations Manager", "06/2011–01/2014");
company1 = "Gay & Lesbian Elder Housing, Los Angeles";
roleList = getElement("ul");
list1 = getElement("li");
list1.innerText = "Arranging presentations and pitch deck";
list2 = getElement("li");
list2.innerText = "Designing a PR plan and establishing important focus points.";
list3 = getElement("li");
list3.innerText = "Designing, creating and managing content across multiple communication platforms"
let list4 = getElement("li");
list4.innerText = "Building relationships with key media players.";

roleList.append(list1, list2, list3, list4);
workExperience.append(experienceIcon, experienceHeading, expTable, company1, roleList);

//Education
let education = getElement("section");
let educationIcon = getImgElement("icon", "img/education.png", "Education icon");
let educationHeading = getElement("h2", "", "section-heading");
educationHeading.innerText = "Education";
let eduTable = getTable("Engineering Immersion Program", "11/2018–06/2018");
let institute = "Thinkful, Chicago, IL";
let description = getElement("p");
description.innerText = "Project-focused intensive program with emphasis on Mongo, Express, React, and JavaScript (MERN) technical stack."
let list = getElement("ul");
let li1 = getElement("li");
li1.innerText = "Developed a full-stack web application, 'RenewU' using React that allows users to explore various aspects of meditation. Users progress is stored on a backend created using Node and MongobB.";
let li2 = getElement("li");
li2.innerText = "Developed a language learning app, \"Foodie Phonetics\" using spaced repetition and a linked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data.";
let li3 = getElement("li");
li3.innerText = "Developed a concierge app, \"Pley', for individuals looking for curated suggestions when visiting a new place. React was used to develop the front end which includes realtime chat, drag and drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well developed RESTful API, Geospatial searching, and user authentication with JWT.";
list.append(li1, li2, li3);
let eduTable2 = getTable("BA, English", "09/2001–09/2005");
let description2 = "University of California, Los Angles";
education.append(educationIcon, educationHeading, eduTable, institute, description, list, eduTable2, description2);

secondPartition.append(workExperience, education);


tr.append(firstPartition, secondPartition);
tbody.append(tr);
mainTable.append(tbody);
document.body.append(mainDiv, addressDiv, mainTable);