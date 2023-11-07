let work_card_1 = document.querySelector('.more-work .first-col .work-card');
let work_card_2 = document.querySelector('.more-work .second-col .work-card');
let salt_bae = document.querySelector('.more-work img');

window.addEventListener('scroll', () => {
    factor = window.scrollY / window.innerHeight;
    parallax_3 = (factor - 5)*20;
    work_card_1.style.transform = 'translateY(' + parallax_3 + 'px)';
    work_card_2.style.transform = 'translateY(' + parallax_3 + 'px)';
    salt_bae.style.transform = 'translateY(' + parallax_3 + 'px)';
})