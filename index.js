// var currentYear = new Date().getFullYear();
// document.getElementById("copyrightText").innerHTML = "&#9400 Cutting Edge Ammo " + currentYear;
// // Put in a script tag in index.html itself.

var numOfItems = 2;
document.querySelector("#numOfItems").innerHTML = "&#128722 " + numOfItems + " ITEMS";



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
    var slides = document.querySelector(".mySlides");
    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next");
    prev.addEventListener (onclick, advanceSlides(-1));
    next.addEventListener (onclick, advanceSlides(1));
    if (n > slides.length) {
        slideIndex = 1;
    };
    if (n < 1) {
        slideIndex = slides.length;
    };
    for (i = 0; i < slides.length; i++) {
        (slides[i]).display = "none";
    };
    (slides[slideIndex - 1]).display = "block";
};

HTMLElement.addEventListener (eventType, callback)