let hero = document.querySelector('.hero');
let work = document.querySelector('.work');
let about = document.querySelector('.about');
let contacts = document.querySelector('.contacts');
let news = document.querySelector('.news');

let heroNumber = document.querySelector("#slide1");
let workNumber = document.querySelector("#slide2");
let aboutNumber = document.querySelector("#slide3");
let contactsNumber = document.querySelector("#slide5");
let newsNumber = document.querySelector("#slide4");

let aboutParagraph = document.querySelector(".about p");
let aboutImage = document.querySelector(".about .me")

let mainNews = document.querySelector(".news .main");
let smallNews = document.querySelectorAll(".news .small-news .cell");

let workTitle = document.querySelector(".work .title")
let positions = document.querySelectorAll(".work .position")

window.addEventListener('scroll', function () {
	if (work.getBoundingClientRect().top < (window.innerHeight-100) && work.getBoundingClientRect().bottom > (window.innerHeight-100)) {
    	workNumber.classList.add("selected");
        workTitle.classList.add("appear-title");
        positions.forEach(position => {
            if (position.getBoundingClientRect().top < (window.innerHeight-100) && position.getBoundingClientRect().bottom > (window.innerHeight-100)){
                let positionTitle = position.querySelector("h2");
                let positionHr = position.querySelector("hr");
                let projects = position.querySelectorAll(".cell");
                positionTitle.classList.add("appear-position-title");
                positionHr.classList.add("appear-position-hr");
                projects.forEach(project => {
                    project.classList.add('appear-project');
                });
            }
        });
    }
    else {
    	workNumber.classList.remove("selected");
    }
    if (about.getBoundingClientRect().top < (window.innerHeight-200) && about.getBoundingClientRect().bottom > (window.innerHeight-100)) {
    	aboutNumber.classList.add("selected");
    	aboutParagraph.classList.add("appear-about-text");
    	aboutImage.classList.add('appear-about-image');
    }
    else {
    	aboutNumber.classList.remove("selected");
    }
    if (news.getBoundingClientRect().top < (window.innerHeight-100) && news.getBoundingClientRect().bottom > (window.innerHeight-100)) {
    	newsNumber.classList.add("selected");
    	mainNews.classList.add("appear-main-news");
    	smallNews.forEach(news => {
    		news.classList.add('appear-small-news');
    	});
    }
    else {
    	newsNumber.classList.remove("selected");
    }
    if (contacts.getBoundingClientRect().top < (window.innerHeight-100) && contacts.getBoundingClientRect().bottom > (window.innerHeight-100)) {
    	contactsNumber.classList.add("selected");
        contacts.classList.add("appear-contacts");
    }
    else {
    	contactsNumber.classList.remove("selected");
    }
    if (window.scrollY == 0) {
    	heroNumber.classList.add("selected");
    }
    else {
    	heroNumber.classList.remove("selected");
    }
});
