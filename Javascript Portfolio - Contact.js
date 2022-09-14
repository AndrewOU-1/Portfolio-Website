// styling body
document.body.style.fontFamily = "franklin gothic";
//document.body.style.fontFamily = 'Ubuntu', "sans-serif";
document.body.style.textAlign = "center";
document.body.style.margin = "auto";
document.body.style.marginTop = "80px";
document.body.style.lineHeight = "1.5";
document.body.style.padding = "25px";
document.body.style.border = "2px solid";
document.body.style.borderRadius = "5px";
document.body.style.maxWidth = "400px";


// importing script for icons
var script = document.createElement('script');

script.src = "https://kit.fontawesome.com/17841ac4c0.js";
script.crossOrigin = "anonymous";

document.body.appendChild(script);
// import end



// test
document.createElement("h1");

const h1AboutMe = document.createElement("h1");
h1AboutMe.textContent = "ANDREW RAUCH";
h1AboutMe.style.fontFamily = "franklin gothic condensed";
document.body.append(h1AboutMe);
// test end



// phone start
// creating MAIN div
document.createElement("div");
const mainDiv = document.createElement("div"); // li_wrap
mainDiv.setAttribute("id", "main");

mainDiv.classList.add("li_wrap");
//mainDiv.textContent = "ANDREW RAUCH "; | TEST
document.body.append(mainDiv);
// getting div id to append elements to it
var mainId = document.getElementById("main");



// div for <i>
document.createElement("div");
const divPhone = document.createElement("div");
divPhone.setAttribute("id", "iconId");

divPhone.classList.add("icon");
// appending icon div to main div
mainId.appendChild(divPhone);

// creating var to append <i> to
var iconId = document.getElementById("iconId");

document.createElement("i");
const iPhone = document.createElement("i"); // icon

//iPhone.textContent = "testing";
// adding class
iPhone.classList.add("fa-solid", "fa-mobile-screen");

iPhone.ariaHidden = "true";
// appending <i> to <div>
iconId.appendChild(iPhone);

// styling icon
iPhone.style.width = "50px";
iPhone.style.marginLeft = "-25px";
iPhone.style.fontSize = "32px";


document.createElement("div"); 
const divPhoneNumber = document.createElement("div"); // text
divPhoneNumber.classList.add("text");
divPhoneNumber.textContent = "(405) 323-2665";
// appending <div> to 'larger' <div>
mainId.appendChild(divPhoneNumber);

// styling text
//divPhoneNumber.style.width = "calc(25% - 50px)";
//divPhoneNumber.style.wordBreak = "break-word";

// phone end




// mail start

document.createElement("div");
const mainDiv2 = document.createElement("div"); // li_wrap
mainDiv2.setAttribute("id", "main");

mainDiv2.classList.add("li_wrap");

document.body.append(mainDiv2);
// getting div id to append elements to it
var mainId = document.getElementById("main");



// div for <i>
document.createElement("div");
const divMail = document.createElement("div");
divMail.setAttribute("id", "mailId");

divMail.classList.add("icon");
// appending icon div to body
mainDiv2.appendChild(divMail);

// creating var to append <i> to
var iconId = document.getElementById("mailId");

document.createElement("i");
const iMail = document.createElement("i"); // icon

iMail.classList.add("fa-regular", "fa-envelope");
iMail.ariaHidden = "true";
iconId.appendChild(iMail);

// styling mail
iMail.style.width = "50px";
iMail.style.marginLeft = "0";
iMail.style.fontSize = "32px";


document.createElement("div");
const divMailText = document.createElement("div"); // text
divMailText.classList.add("text");
divMailText.textContent = "arauch22@gmail.com";
// appending <div> to 'larger' <div>
mainDiv2.appendChild(divMailText);
// mail end


// linkedin start

document.createElement("div");
const mainDiv3 = document.createElement("div"); // li_wrap
mainDiv3.setAttribute("id", "main");

mainDiv3.classList.add("li_wrap");

document.body.append(mainDiv3);
// getting div id to append elements to it
var mainId = document.getElementById("main");



// div for <i>
document.createElement("div");
const divLinkedin = document.createElement("div");
divLinkedin.setAttribute("id", "linkedinId");

divLinkedin.classList.add("icon");
// appending icon div to body
mainDiv3.appendChild(divLinkedin);

// creating var to append <i> to
var iconId = document.getElementById("linkedinId");

//document.createElement("a"); | dont need
const iLinkedin = document.createElement("a"); // icon

iLinkedin.classList.add("fa-brands", "fa-linkedin");
iLinkedin.ariaHidden = "true";
iLinkedin.href = "https://www.linkedin.com/in/andrew-h-rauch";
iLinkedin.target = "_blank";
iLinkedin.style.textDecoration = "none";
iLinkedin.style.color = "black";
iconId.appendChild(iLinkedin);

// styling mail
iLinkedin.style.width = "50px";
iLinkedin.style.marginLeft = "0";
iLinkedin.style.fontSize = "32px";


//document.createElement("a"); | dont need
const divLinkedinText = document.createElement("a"); // text
divLinkedinText.classList.add("text");
divLinkedinText.textContent = "linkedin.com/in/andrew-h-rauch";
divLinkedinText.href = "https://www.linkedin.com/in/andrew-h-rauch";
divLinkedinText.target = "_blank";
divLinkedinText.style.textDecoration = "none";
divLinkedinText.style.color = "black";

// hover start
divLinkedinText.addEventListener("mouseover", function (event) {
    event.target.style.textDecoration = "underline";
}, false);

divLinkedinText.addEventListener("mouseout", function (event) {
    event.target.style.textDecoration = "none"
}, false);
// hover end

// appending <a> to 'larger' <div>
mainDiv3.appendChild(divLinkedinText);

// linkedin end



// styling all "li_wrap"
const wraps = document.querySelectorAll('.li_wrap');

wraps.forEach(wrap => {
    wrap.style.display = "flex";
    wrap.style.alignItems = "center";
    wrap.style.justifyContent = "center";
    wrap.style.width = "100%";
    wrap.style.marginBottom = "15px";

})




