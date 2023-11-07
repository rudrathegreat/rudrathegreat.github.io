let astronomy_bg = document.querySelector('.astronomy .astronomy-bg');
let environment_bg = document.querySelector('.environment .environment-bg');
let video_bg = document.querySelector('.video .video-bg');
let hero_bg = document.querySelector('.hero .hero-bg');
let contact_bg = document.querySelector('.contact .contact-bg');

window.addEventListener('scroll', function() {
    if ((this.window.scrollY / this.window.innerHeight) === 0) {
        hero_bg.style.width = '98%';
        hero_bg.style.height = '98%';
        hero_bg.style.left = '1%';
        hero_bg.style.top = '1%';
        hero_bg.style.borderRadius = '2vw';
    }

    else if ((this.window.scrollY / this.window.innerHeight) > 1) {
        hero_bg.style.width = '100%';
        hero_bg.style.height = '100%';
        hero_bg.style.left = '0%';
        hero_bg.style.top = '0%';
        hero_bg.style.borderRadius = '0vw';
    }

    else {
        width = (((this.window.scrollY / this.window.innerHeight))*2) + 98;
        left = 1-(((this.window.scrollY / this.window.innerHeight)))
        borderRadius = 2 - (((this.window.scrollY / this.window.innerHeight))*2);
        hero_bg.style.width = width + '%';
        hero_bg.style.height = width + '%';
        hero_bg.style.left = left + '%';
        hero_bg.style.top = left + '%';
        hero_bg.style.borderRadius = + borderRadius + 'vw';
    }
})

window.addEventListener('scroll', function() {
    if ((this.window.scrollY / this.window.innerHeight) < 1.5) {
        astronomy_bg.style.width = '98%';
        astronomy_bg.style.height = '98%';
        astronomy_bg.style.left = '1%';
        astronomy_bg.style.top = '1%';
        astronomy_bg.style.borderRadius = '2vw';
    }

    else if ((this.window.scrollY / this.window.innerHeight) > 2.5) {
        astronomy_bg.style.width = '100%';
        astronomy_bg.style.height = '100%';
        astronomy_bg.style.left = '0%';
        astronomy_bg.style.top = '0%';
        astronomy_bg.style.borderRadius = '0vw';
    }

    else {
        width = (((this.window.scrollY / this.window.innerHeight) - 1.5)*2) + 98;
        borderRadius = 2 - (((this.window.scrollY / this.window.innerHeight) - 1.5)*2);
        left = 1-(((this.window.scrollY / this.window.innerHeight) - 1.5))
        astronomy_bg.style.width = width + '%';
        astronomy_bg.style.height = width + '%';
        astronomy_bg.style.left = left + '%';
        astronomy_bg.style.top = left + '%';
        astronomy_bg.style.borderRadius = + borderRadius + 'vw';
    }
})

window.addEventListener('scroll', function() {
    if ((this.window.scrollY / this.window.innerHeight) < 2.5) {
        environment_bg.style.width = '98%';
        environment_bg.style.height = '98%';
        environment_bg.style.left = '1%';
        environment_bg.style.top = '1%';
        environment_bg.style.borderRadius = '2vw';
    }

    else if ((this.window.scrollY / this.window.innerHeight) > 3.5) {
        environment_bg.style.width = '100%';
        environment_bg.style.height = '100%';
        environment_bg.style.left = '0%';
        environment_bg.style.top = '0%';
        environment_bg.style.borderRadius = '0vw';
    }

    else {
        width = (((this.window.scrollY / this.window.innerHeight) - 2.5)*2) + 98;
        left = 1-(((this.window.scrollY / this.window.innerHeight) - 2.5))
        borderRadius = 2 - (((this.window.scrollY / this.window.innerHeight) - 2.5)*2);
        environment_bg.style.width = width + '%';
        environment_bg.style.height = width + '%';
        environment_bg.style.left = left + '%';
        environment_bg.style.top = left + '%';
        environment_bg.style.borderRadius = + borderRadius + 'vw';
    }
})

window.addEventListener('scroll', function() {
    if ((this.window.scrollY / this.window.innerHeight) < 3.5) {
        video_bg.style.width = '98%';
        video_bg.style.height = '98%';
        video_bg.style.left = '1%';
        video_bg.style.top = '1%';
        video_bg.style.borderRadius = '2vw';
    }

    else if ((this.window.scrollY / this.window.innerHeight) > 4.5) {
        video_bg.style.width = '100%';
        video_bg.style.height = '100%';
        video_bg.style.left = '0%';
        video_bg.style.top = '0%';
        video_bg.style.borderRadius = '0vw';
    }

    else {
        width = (((this.window.scrollY / this.window.innerHeight) - 3.5)*2) + 98;
        left = 1-(((this.window.scrollY / this.window.innerHeight) - 3.5))
        borderRadius = 2 - (((this.window.scrollY / this.window.innerHeight) - 3.5)*2);
        video_bg.style.width = width + '%';
        video_bg.style.height = width + '%';
        video_bg.style.left = left + '%';
        video_bg.style.top = left + '%';
        video_bg.style.borderRadius = + borderRadius + 'vw';
    }
})

window.addEventListener('scroll', function() {
    if ((this.window.scrollY / this.window.innerHeight) < 9.5) {
        contact_bg.style.width = '98%';
        contact_bg.style.height = '98%';
        contact_bg.style.left = '1%';
        contact_bg.style.top = '1%';
        contact_bg.style.borderRadius = '2vw';
    }

    else if ((this.window.scrollY / this.window.innerHeight) >10.5) {
        contact_bg.style.width = '100%';
        contact_bg.style.height = '100%';
        contact_bg.style.left = '0%';
        contact_bg.style.top = '0%';
        contact_bg.style.borderRadius = '0vw';
    }

    else {
        width = (((this.window.scrollY / this.window.innerHeight) - 9.5)*2) + 98;
        left = 1-(((this.window.scrollY / this.window.innerHeight) - 9.5))
        borderRadius = 2 - (((this.window.scrollY / this.window.innerHeight) - 9.5)*2);
        contact_bg.style.width = width + '%';
        contact_bg.style.height = width + '%';
        contact_bg.style.left = left + '%';
        contact_bg.style.top = left + '%';
        contact_bg.style.borderRadius = + borderRadius + 'vw';
    }
})