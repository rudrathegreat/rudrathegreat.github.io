let cursor = document.querySelector('.cursor');
let astronomy = document.querySelector('.astronomy');
let environment = document.querySelector('.environment');
let video = document.querySelector('.video');
let navbar_links = document.querySelectorAll('.navbar a');


window.addEventListener('mousemove', function(e) {
    cursor.animate({
        top:e.pageY + 'px',
        left:e.pageX + 'px'
    }, {duration:1000, fill:'forwards'});
});

astronomy.addEventListener('mouseenter', function() {
    cursor.style.background = 'white';
})

environment.addEventListener('mouseenter', function() {
    cursor.style.background = 'white';
})

video.addEventListener('mouseenter', function() {
    cursor.style.background = 'white';
})

astronomy.addEventListener('mouseleave', function() {
    cursor.style.background = 'black';
})

environment.addEventListener('mouseleave', function() {
    cursor.style.background = 'black';
})

video.addEventListener('mouseleave', function() {
    cursor.style.background = 'black';
})

window.addEventListener('scroll', function(e) {
    if (((this.window.scrollY / this.window.innerHeight) > 2) && ((this.window.scrollY / this.window.innerHeight) < 5)) {
        navbar_links.forEach(link => {
            link.style.color = 'white';
        })
    }
    else {
        navbar_links.forEach(link => {
            link.style.color = 'black';
        })
    }
});