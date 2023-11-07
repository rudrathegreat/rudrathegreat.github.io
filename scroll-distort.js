const content = document.querySelector(".scroll-distort");
let currentPos = window.scrollY;

const callDistort = function () {
    const newPos = window.scrollY;
    const diff = newPos - currentPos;
    const speed = diff * 0.0275;
    let rotate = diff * 0.01375;

    content.animate({
        transform: "skewY(" + speed + "deg) rotateY(" + rotate + 'deg)',
    }, {duration:650, fill:'forwards'});

    currentPos = newPos;
    requestAnimationFrame(callDistort);
};

callDistort();