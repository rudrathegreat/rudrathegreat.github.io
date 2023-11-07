let about_paragraph_animation_1 = new SplitType('.why .importance p');
let about_title = document.querySelector('.why h1');
let about_boring = document.querySelector('.why .boring p');
let about_img = document.querySelector('.why img');
let why_section = document.querySelector('.why');

let astronomy_title = document.querySelector('.astronomy h1');
let astronomy_cells = document.querySelectorAll('.astronomy .cell');
let astronomy_section = document.querySelector('.astronomy')

let environment_title = document.querySelector('.environment h1');
let environment_cells = document.querySelectorAll('.environment .cell');
let environment_section = document.querySelector('.environment');

let video_title = document.querySelector('.video h1');
let video_cells = document.querySelectorAll('.video .cell');
let video_section = document.querySelector('.video');

let more_work_section = document.querySelector('.more-work');
let more_work_title = new SplitType('.more-work h1');
let more_work_gif = document.querySelector('.more-work img');
let more_work_cell_1 = document.querySelector('.more-work .second-col .work-card');
let more_work_cell_2 = document.querySelector('.more-work .first-col .work-card');
let more_work_text = new SplitType('.more-work .second-col p');

let me_section = document.querySelector('.about');
let me_title = new SplitType('.about h1');
let me_text = new SplitType('.about p');
let me_stats = new SplitType('.about h2');
let me_img = document.querySelector('.about img');

let featured_section = document.querySelector('.featured');
let featured_orgs = document.querySelectorAll('.featured img');
let featured_title = document.querySelector('.featured h1');

let awards_section = document.querySelector('.awards');
let awards_title = document.querySelector('.awards h1');
let awards_text = new SplitType('.awards .link p');
let awards_button = document.querySelector('.awards a');
let awards_list = document.querySelectorAll('.awards .awards-list p');

window.addEventListener('scroll', function() {
    if (why_section.getBoundingClientRect().top < (window.innerHeight/3)) {
        about_title.style.transform = 'translateY(0)';
        about_title.style.opacity = 1;
        this.setTimeout(() => {
            about_boring.style.transform = 'translateY(0)';
            about_boring.style.opacity = 1;
        }, 100)
        let i = 4;
        this.document.querySelectorAll('.why .importance .line').forEach(line => {
            line.querySelectorAll('.char').forEach(char => {
                char.style.transform = "translateY(0)";
                char.style.transitionDelay = i*50 + 'ms';
            })
            i++;
        })
        this.setTimeout(() => {
            about_img.style.transform = 'scale(1)';
            about_img.style.opacity = 1;
        }, 500)
    }

    if (astronomy_section.getBoundingClientRect().top < (window.innerHeight/3)) {
        astronomy_title.style.transform = 'translateY(0)';
        astronomy_title.style.opacity = 1;
        let i = 2;
        astronomy_cells.forEach(cell => {
            cell.style.transform = "translateY(0)";
            cell.style.opacity = 1;
            cell.style.transitionDelay = i*100 + 'ms';
            i++;
        })
    }

    if (environment_section.getBoundingClientRect().top < (window.innerHeight/3)) {
        environment_title.style.transform = 'translateY(0)';
        environment_title.style.opacity = 1;
        let i = 2;
        environment_cells.forEach(cell => {
            cell.style.transform = "translateY(0)";
            cell.style.opacity = 1;
            cell.style.transitionDelay = i*100 + 'ms';
            i++;
        })
    }

    if (video_section.getBoundingClientRect().top < (window.innerHeight/3)) {
        video_title.style.transform = 'translateY(0)';
        video_title.style.opacity = 1;
        let i = 2;
        video_cells.forEach(cell => {
            cell.style.transform = "translateY(0)";
            cell.style.opacity = 1;
            cell.style.transitionDelay = i*100 + 'ms';
            i++;
        })
    }

    if (more_work_section.getBoundingClientRect().top < (window.innerHeight/3)) {
        let i=0;
        this.document.querySelectorAll('.more-work h1 .line').forEach(line => {
            line.querySelectorAll('.char').forEach(char => {
                char.style.transform = "translateY(0)";
                char.style.transitionDelay = i*50 + 'ms';
            })
            i++;
        })
        this.setTimeout(() => {
            more_work_gif.style.opacity = 1;
        }, 300);
        this.setTimeout(() => {
            more_work_cell_1.style.opacity = 1;
        }, 400);
    }

    if (more_work_cell_2.getBoundingClientRect().top < (window.innerHeight/3)) {
        more_work_cell_2.style.opacity = 1;
    }

    if (this.document.querySelector('.more-work .second-col p').getBoundingClientRect().top < (window.innerHeight/3)) {
        let i=0;
        this.document.querySelectorAll('.more-work .second-col p .line').forEach(line => {
            line.querySelectorAll('.char').forEach(char => {
                char.style.transform = "translateY(0)";
                char.style.transitionDelay = i*50 + 'ms';
            })
            i++;
        })
        this.setTimeout(() => {
            this.document.querySelector('.more-work .second-col .text a').style.transform = 'translateY(0)';
            this.document.querySelector('.more-work .second-col .text a').style.opacity = 1;
        }, 200)
    }

    if (me_section.getBoundingClientRect().top < (window.innerHeight/3)) {
        let i=0;
        this.document.querySelectorAll('.about h1 .line').forEach(line => {
            line.querySelectorAll('.char').forEach(char => {
                char.style.transform = "translateY(0)";
                char.style.transitionDelay = i*50 + 'ms';
            })
            i++;
        })
        this.document.querySelectorAll('.about p .line').forEach(line => {
            line.querySelectorAll('.char').forEach(char => {
                char.style.transform = "translateY(0)";
                char.style.transitionDelay = i*50 + 'ms';
            })
            i++;
        })
        this.document.querySelectorAll('.about h2 .line').forEach(line => {
            line.querySelectorAll('.char').forEach(char => {
                char.style.transform = "translateY(0)";
                char.style.transitionDelay = i*50 + 'ms';
            })
            i++;
        })
        this.setTimeout(() => {
            me_img.style.transform = 'scale(1)';
            me_img.style.opacity = 1;
        }, 400)
    }

    if (featured_section.getBoundingClientRect().top < (window.innerHeight/3)) {
        featured_title.style.transform = 'translateY(0)';
        featured_title.style.opacity = 1;
        let i=1;
        featured_orgs.forEach(org => {
            org.style.transform = "translateY(0)";
            org.style.opacity = 1;
            org.style.transitionDelay = i*50 + 'ms';
            i++;
        })
        this.setTimeout(() => {
            this.document.querySelector('.more-work .second-col .text a').style.transform = 'translateY(0)';
            this.document.querySelector('.more-work .second-col .text a').style.opacity = 1;
        }, 200)
    }

    if (awards_section.getBoundingClientRect().top < (window.innerHeight/3)) {
        awards_title.style.transform = 'translateY(0)';
        awards_title.style.opacity = 1;
        let i=1;
        awards_list.forEach(award => {
            award.style.transform = "translateY(0)";
            award.style.opacity = 1;
            award.style.transitionDelay = i*50 + 'ms';
            i++;
        })
    }

    if (this.document.querySelector('.awards .link p').getBoundingClientRect().top < (window.innerHeight/1.5)) {
        let i=0;
        this.document.querySelectorAll('.awards .title p .line').forEach(line => {
            line.querySelectorAll('.char').forEach(char => {
                char.style.transform = "translateY(0)";
                char.style.transitionDelay = i*50 + 'ms';
            })
            i++;
        })
        this.setTimeout(() => {
            awards_button.style.transform = 'translateY(0)';
            awards_button.style.opacity = 1;
        }, 200)
    }
});