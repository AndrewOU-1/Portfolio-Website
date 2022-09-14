// styling body
document.body.style.fontFamily = "franklin gothic";
document.body.style.textAlign = "center";
document.body.style.margin = "0px";
document.body.style.lineHeight = "1.5";


/*  used to add/remove elements (???)
element.classList.add('myclass')
element.classList.remove('myclass')
*/


// creating ul and li elements for home nav bar

const createList = (spaceCrafts) => {
    const listView = document.createElement('ul');
    for (const s of spaceCrafts) {
        const listViewItem = document.createElement('li');

        // setting id | didnt need
        //listViewItem.setAttribute("id","homeList");
        // styling listView
        listView.style.display = "inline-block";
        listView.style.listStyleType = "none";
        listView.style.textAlign = "center";
        listView.style.width = "100%";

        listViewItem.appendChild(document.createTextNode(s));
        listView.appendChild(listViewItem);

        listViewItem.style.display = "inline-block";
        listViewItem.style.float = "none";
        listViewItem.style.color = "white";

        //listViewItem.style.padding = "16px"; | took out so no boarder around 'buttons'

        // Mouse hover for home nav menu
        //let test = document.getElementById("homeList"); | didnt need
        listViewItem.addEventListener("mouseover", function (event) {
            event.target.style.backgroundColor = "#111111";
        }, false);

        listViewItem.addEventListener("mouseout", function (event) {
            event.target.style.backgroundColor = "#333333"
        }, false);

        //making classes for each element in list
        listViewItem.classList.add("list");

    }
    return listView;
}



const spaceCrafts = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT']
const ul = createList(spaceCrafts)
document.body.appendChild(ul)

//find current list of elements, store in var, then clear element's txt
var lists = document.getElementsByClassName("list");
for (var i = 0; i < lists.length; i++) {

    var text = lists[i].textContent;

    lists[i].textContent = "";
    var a = document.createElement('a');
    a.href = "#" + text;
    a.textContent = text;
    lists[i].appendChild(a);
}


//make box clickable
function new_window() {
    var anchors = document.getElementsByTagName('a');
    for (var i = 0; i < 4; i++) {
        anchors[i].style.display = "block";
        anchors[i].style.padding = "28px";
        anchors[i].style.color = "white";
        anchors[i].style.textDecoration = "none";
        anchors[i].style.paddingRight = "45px";
        anchors[i].style.paddingLeft = "45px";

    }
}
window.onload = new_window;

// contact link | TODO;etc: seperate HTML for Contact section

a.href = "Javascript Portfolio - Contact.html";
a.target = "_blank";

// end of contact link


// ul styling | 1st part removes bullets
ul.style.listStyleType = "none";
ul.style.margin = "0";
ul.style.padding = "0";
ul.style.overflow = "hidden";
ul.style.backgroundColor = "#333333";



// about me start
document.createElement("h1")

const h1AboutMe = document.createElement("h1");
h1AboutMe.textContent = "ANDREW RAUCH";
h1AboutMe.style.fontFamily = "franklin gothic condensed";
document.body.append(h1AboutMe);

h1AboutMe.setAttribute("id", "ABOUT");

// TEMP A BUNCH OF <b/> FOR TESTING
document.createElement("p")
const pAboutMe = document.createElement("p");
pAboutMe.innerHTML = "My name is Andrew Rauch. I'm a Senior at the University of Oklahoma who will graduate in December.<br/><br/><br/>";
pAboutMe.style.maxWidth = "400px";
pAboutMe.style.textAlign = "center";
pAboutMe.style.display = "inline-block";
document.body.append(pAboutMe);

// about me end

document.write("<br><br><br>");

// resume section start
var pdfResume = document.createElement('a');
pdfResume.href = "Fall_2022_Resume.pdf";

pdfResume.style.backgroundColor = "#333333";
pdfResume.style.padding = "24px";
pdfResume.style.maxWidth = "60px";
pdfResume.style.borderRadius = "8px";
pdfResume.style.border = "28px";
pdfResume.textContent = "Resume";
pdfResume.style.color = "white";
pdfResume.style.textDecoration = "none";
//pdfResume.style.display = "block";
pdfResume.style.textAlign = "center";



pdfResume.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "#111111";
}, false);

pdfResume.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "#333333"
}, false);

document.body.append(pdfResume);
// resume section end


// breaks for spacing
document.write("<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");


// projects start

document.createElement("h1")
const h1Projects = document.createElement("h1");
h1Projects.textContent = "PROJECTS";
h1Projects.style.fontFamily = "franklin gothic condensed";
document.body.append(h1Projects);



document.createElement("p")

h1Projects.setAttribute("id", "PROJECTS"); // set id for projects section

// utilize innerHTML 4 ez page breaks
const pProjects = document.createElement("p");
pProjects.innerHTML = "HTML Form Project<br/>Hobby Lobby Project<br/>Project 3";
document.body.append(pProjects);

// projects end


