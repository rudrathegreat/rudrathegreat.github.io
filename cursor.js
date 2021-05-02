let mouseCursor = document.querySelector(".cursor");
let buttons = document.querySelectorAll("a");
let positionTitles = document.querySelectorAll(".work h2");
let projectTitles = document.querySelectorAll(".work h3");

window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

buttons.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('grow');
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('grow');
    });
});

workTitle.addEventListener('mouseover', () => {
        mouseCursor.classList.add('bg');
        workTitle.classList.add('black-work-title');
    });

workTitle.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('bg');
        workTitle.classList.remove('black-work-title');
    });

positionTitles.forEach(title => {
    title.addEventListener('mouseover', () => {
            mouseCursor.classList.add('bg');
            title.classList.add('black-work-title');
        });

    title.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove('bg');
            title.classList.remove('black-work-title');
        });
});

projectTitles.forEach(title => {
    title.addEventListener('mouseover', () => {
            mouseCursor.classList.add('bg');
            title.classList.add('black-work-title');
        });

    title.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove('bg');
            title.classList.remove('black-work-title');
        });
});