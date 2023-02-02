// var currentYear = new Date().getFullYear();
// document.getElementById("copyrightText").innerHTML = "&#9400 Cutting Edge Ammo " + currentYear;
// // Put in a script tag in index.html itself.

var numOfItems = 2;
document.querySelector("#numOfItems").innerHTML = "&#128722 " + numOfItems + " ITEMS";

var slides = document.querySelectorAll(".mySlides");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
prev.addEventListener('click', () => advanceSlides(-1));
next.addEventListener('click', () => advanceSlides(1));

var slideIndex = 1;
showSlides(slideIndex);

function advanceSlides(n) {
    showSlides(slideIndex += n);
};

function currentSlide(n) {
    showSlides(slideIndex = n);
};

function showSlides(n) {
    var i;
    if (n > slides.length) {
        slideIndex = 1;
    };
    if (n < 1) {
        slideIndex = slides.length;
    };
    for (i = 0; i < slides.length; i++) {
        // console.log(slides[i]);
        slides[i].style.display = "none";
    };
    slides[slideIndex - 1].style.display = "block";
};