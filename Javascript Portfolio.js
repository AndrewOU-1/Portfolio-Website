// styling body
document.body.style.fontFamily = "franklin gothic";
document.body.style.textAlign = "center";
document.body.style.margin = "0px";
document.body.style.marginBottom = "0";
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
            event.target.style.backgroundColor = "#505050";
        }, false);

        listViewItem.addEventListener("mouseout", function (event) {
            event.target.style.backgroundColor = "#606060"
        }, false);

        //making classes for each element in list
        listViewItem.classList.add("list");
        
    }
    return listView;
}



const spaceCrafts = ['ABOUT', 'PROJECTS', 'CONTACT', 'RESUME']
const ul = createList(spaceCrafts)
document.body.appendChild(ul)

//find current list of elements, store in var, then clear element's txt
var lists = document.getElementsByClassName("list");
for (var i = 0; i < lists.length-2; i++) {

    var text = lists[i].textContent;

    lists[i].textContent = "";
    var a = document.createElement('a');
    a.href = "#" + text;
    a.textContent = text;
    lists[i].appendChild(a);
}

// loop just for contact (technically also hits resume, but did another fix for resume)
var lists2 = document.getElementsByClassName("list");
for (var i = 2; i < lists2.length; i++) {

    var text = lists2[i].textContent;

    lists2[i].textContent = "";
    var a = document.createElement('a');
    a.href = "Javascript Portfolio - Contact.html";
    a.target = "_blank";
    a.textContent = text;
    lists2[i].appendChild(a);
}

//make box clickable
function new_window() {
    var anchors = document.getElementsByTagName('a');
    for (var i = 0; i < anchors.length-3; i++) {
        anchors[i].style.display = "block";
        anchors[i].style.padding = "28px";
        anchors[i].style.color = "white";
        anchors[i].style.textDecoration = "none";
        anchors[i].style.paddingRight = "45px";
        anchors[i].style.paddingLeft = "45px";

    }
}
window.onload = new_window;




// ul styling | 1st part removes bullets
ul.style.listStyleType = "none";
ul.style.margin = "0";
ul.style.padding = "0";
ul.style.overflow = "hidden";
ul.style.backgroundColor = "#606060";



// about me start
document.createElement("h1")

const h1AboutMe = document.createElement("h1");
h1AboutMe.textContent = "ANDREW RAUCH";
h1AboutMe.style.fontFamily = "franklin gothic condensed";
h1AboutMe.style.marginTop = "70px";
document.body.append(h1AboutMe);

h1AboutMe.setAttribute("id", "ABOUT");

// TEMP A BUNCH OF <b/> FOR TESTING
document.createElement("p")
const pAboutMe = document.createElement("p");
pAboutMe.innerHTML = "My name is Andrew Rauch. I am an aspiring data scientist who enjoys connecting the dots be it ideas from different disciplines, people from different teams, or applications from different industries. I have strong technical skills and an academic background in data analysis, statistics, and system design.<br><br><br>My passion lies in a mix of data analytics and programming.Lately I’ve been enjoying coding in JavaScript, HTML, and CSS, but I plan to learn much more. I'm equipped with the tools to solve technical business problems through my courses and personal projects.<br><br><br>I'm graduating in Fall 2022, and I'm interested in internships in data science, data analytics, software development, web development, and machine learning roles.Feel free to contact me via the contact button on the website for more information!";
pAboutMe.style.maxWidth = "400px";
pAboutMe.style.textAlign = "justify";
pAboutMe.style.display = "inline-block";
document.body.append(pAboutMe);

// about me end


// resume link start
a.href = "Fall_2022_Resume.pdf";
// resume link end



// breaks for spacing
document.write("<br><br><br><br><br><br><br><br>");


// projects start

document.createElement("h1")
const h1Projects = document.createElement("h1");
h1Projects.textContent = "PROJECTS";
h1Projects.style.fontFamily = "franklin gothic condensed";
document.body.append(h1Projects);


h1Projects.setAttribute("id", "PROJECTS"); // set id for projects section

// project 1 start
const project1 = document.createElement("a");
project1.textContent = "Udacity Bikeshare Project";
project1.href = "https://github.com/AndrewOU-1/Udacity-Bikeshare-Project";
project1.target = "_blank";
project1.style.textDecoration = "none";
project1.style.color = "black";
project1.style.backgroundColor = "#DCDCDC";
project1.style.border = "2px solid";
project1.style.padding = "5px";


// making hover function to make link look clickable
project1.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "#C0C0C0";
}, false);

project1.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "#DCDCDC"
}, false);
// end of hover function

document.body.append(project1);
// project 1 end

document.write("<br><br>");

// project 2 start
const project2 = document.createElement("a");
project2.textContent = "Hobby Lobby Group Project";
project2.href = "https://github.com/alecamend/3033_Project";
project2.target = "_blank";
project2.style.textDecoration = "none";
project2.style.color = "black";
project2.style.backgroundColor = "#DCDCDC";
project2.style.border = "2px solid";
project2.style.padding = "5px";


// making hover function to make link look clickable
project2.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "#C0C0C0";
}, false);

project2.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "#DCDCDC"
}, false);
// end of hover function

document.body.append(project2);
// project 2 end


document.write("<br><br>");


// project 3 start
const project3 = document.createElement("a");
project3.textContent = "This Website!";
project3.href = "https://github.com/AndrewOU-1/Portfolio-Website";
project3.target = "_blank";
project3.style.textDecoration = "none";
project3.style.color = "black";
project3.style.backgroundColor = "#DCDCDC";
project3.style.border = "2px solid";
project3.style.padding = "5px";


// making hover function to make link look clickable
project3.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "#C0C0C0";
}, false);

project3.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "#DCDCDC"
}, false);
// end of hover function

document.body.append(project3);
// project 3 end

// projects end


// credits start

const credits = document.createElement("p");
credits.textContent = "This website was fully made by me and my friend google.";
credits.style.marginTop = "180px";
credits.style.fontSize = "13px";
document.body.append(credits);

