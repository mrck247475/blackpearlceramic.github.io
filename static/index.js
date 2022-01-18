// for fixed navbar when scroll

// const { filter } = require("swig/lib/tags");


window.addEventListener('scroll', function () {
    let navbar = document.querySelector('nav')

    if (window.pageYOffset > 142) {
        navbar.classList.add('navigation');

    }
    else {
        navbar.classList.remove('navigation');

    }
});

// for slide-container
let showimg = 1;
let t;


function controller(x) {
    showimg = showimg + x;
    slideshow(showimg);

};


function dot_slider(x) {
    showimg = x - 1;
    slideshow(showimg);

};
function autoslide() {
    showimg = showimg + 1;
    slideshow(showimg);

};

slideshow(showimg);

function slideshow(num) {


    let slides = document.getElementsByClassName('slide');
    let slidedots = document.getElementsByClassName('dot');

    if (num == slides.length) {
        showimg = 0;
        num = 0;
    }


    if (num < 0) {
        showimg = slides.length - 1;
        num = slides.length - 1;

    }


    for (let y of slides) {
        y.style.display = "none";
    }
    for (let y of slidedots) {
        y.style.background = "transparent";
    }

    slides[num].style.display = "block";
    slidedots[num].style.background = "rgb(246, 190, 0)";
    clearTimeout(t);
    t = setTimeout(autoslide, 10000);


}

(function () {
    ('.next').trigger('click');
});





// ---------------------animation framworks--------------

const observe1 = new IntersectionObserver(entrie1 => {

    entrie1.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('anime-top')
        }
    });
});

observe1.observe(document.querySelector('.info-left-container h1 '))


const observe2 = new IntersectionObserver(entrie2 => {
    entrie2.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('anime-bottom2')
        }

    });
});

observe2.observe(document.querySelector('.wall-img'))

const observe3 = new IntersectionObserver(entrie3 => {
    entrie3.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('anime-bottom1')
        }
    });
});

observe3.observe(document.querySelector('.exploreall-btn'))



const observe4 = new IntersectionObserver(entrie4 => {
    entrie4.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('anime-left')
        }
    });
});

observe4.observe(document.querySelector('.info-left-container h2'))

const observe5 = new IntersectionObserver(entrie5 => {
    entrie5.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('anime-left') }
    });
});
observe5.observe(document.querySelector('.info-left-container p'))



const observe6 = new IntersectionObserver(entrie6 => {
    entrie6.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('anime-right') }
    });
});
observe6.observe(document.querySelector('.specify-tile-top'))


const observe7 = new IntersectionObserver(entrie7 => {
    entrie7.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('anime-right') }
    });
});
observe7.observe(document.querySelector('.specify-tile-bottom'))



// -----------------------flor-tiles----------------

const observe8 = new IntersectionObserver(entrie8 => {
    entrie8.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('anime-top')
        }
    });
});

observe8.observe(document.querySelector('.info-right-container2 h1 '))


const observe9 = new IntersectionObserver(entrie9 => {
    entrie9.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('anime-bottom2')
        }

    });
});

observe9.observe(document.querySelector('.floor-img'))

const observe10 = new IntersectionObserver(entrie10 => {
    entrie10.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('anime-bottom1')
        }
    });
});

observe10.observe(document.querySelector('.exploreall-btn2'))



const observe11 = new IntersectionObserver(entrie11 => {
    entrie11.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('anime-right2')
        }
    });
});

observe11.observe(document.querySelector('.info-right-container2 h2'))

const observe12 = new IntersectionObserver(entrie12 => {
    entrie12.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('anime-right') }
    });
});
observe12.observe(document.querySelector('.info-right-container2 p'))



const observe13 = new IntersectionObserver(entrie13 => {
    entrie13.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('anime-left') }
    });
});
observe13.observe(document.querySelector('.specify-tile-top2'))


const observe14 = new IntersectionObserver(entrie14 => {
    entrie14.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('anime-left') }
    });
});
observe14.observe(document.querySelector('.specify-tile-bottom2'))







           