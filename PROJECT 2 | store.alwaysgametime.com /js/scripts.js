// Initializing variables
const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator");
let index = 0;

// Add event listener to prev element
prev.addEventListener("click", function () {
    prevSlide();
    updateCircleIndicator();
    resetTimer();
})

// Add event listener to next element
next.addEventListener("click", function () {
    nextSlide();
    updateCircleIndicator();
    resetTimer();
})

// creates the empty divs with onclick events for circle indicators
function circleIndicator() {
    for (let i = 0; i < slides.length; i++) {
        const div = document.createElement("div");
        div.setAttribute("onclick", "indicateSlide(this)")
        div.id = i;
        if (i == 0) {
            div.className = "active";
        }
        indicator.appendChild(div);
    }
}

circleIndicator();

function indicateSlide(element) {
    index = element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}

// updates active styling for circle indicators
function updateCircleIndicator() {
    for (let i = 0; i < indicator.children.length; i++) {
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}

// function sets index of slides
function prevSlide() {
    if (index == 0) {
        index = slides.length - 1;
    }
    else {
        index--;
    }
    changeSlide();
}

// function sets index of slides
function nextSlide() {
    if (index == slides.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    changeSlide();
}

// function removes active class from all slides and applies it to slide with 'index'
function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

// resets timer 
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoPlay, 10000);
}

// runs 'nextSlide' and 'updateCircleIndicator' every 8000
function autoPlay() {
    nextSlide();
    updateCircleIndicator();
}

let timer = setInterval(autoPlay, 8000);

// targets 'side-menu' element styling onClick
function openSlideMenu() {
    document.getElementById('side-menu').style.width = '30rem';
    document.getElementById('side-links').style.opacity = '1';
}

// targets 'side-menu' element styling onClick
function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('side-links').style.opacity = '0';
}