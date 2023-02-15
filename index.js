// var currentYear = new Date().getFullYear();
// document.getElementById("copyrightText").innerHTML = "&#9400 Cutting Edge Ammo " + currentYear;
// // Put in a script tag in index.html itself.

var numOfItems = 2;
document.querySelector("#numOfItems").innerHTML = "&#128722 " + numOfItems + " ITEMS";

// var slides = document.querySelectorAll(".mySlides");
// var prev = document.querySelector(".prev");
// var next = document.querySelector(".next");
// prev.addEventListener('click', () => advanceSlides(-1));
// next.addEventListener('click', () => advanceSlides(1));

// var slideIndex = 1;
// showSlides(slideIndex);

// function advanceSlides(n) {
//     showSlides(slideIndex += n);
// };

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// };

// function showSlides(n) {
//     var i;
//     if (n > slides.length) {
//         slideIndex = 1;
//     };
//     if (n < 1) {
//         slideIndex = slides.length;
//     };
//     for (i = 0; i < slides.length; i++) {
//         // console.log(slides[i]);
//         slides[i].style.display = "none";
//     };
//     slides[slideIndex - 1].style.display = "block";
// };





var slides = document.querySelectorAll(".mySlides");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
prev.addEventListener('click', () => slideIndex -= 1);
next.addEventListener('click', () => slideIndex += 1);

var slideIndex = 0;
console.log(slides);

function slideShow() {
    if (slideIndex < 0) {slideIndex = slides.length - 1};
    if (slideIndex > slides.length - 1) {slideIndex = 0};
    if (slideIndex === 0) {
        slides[0].style.display = "block";
        slides[1].style.display = "none";
        slides[2].style.display = "none";
        slides[3].style.display = "none";
        setTimeout(slideShow, 2000);
        slideIndex++
        // sleep(2000).then(() => {slideShow()});
        // setTimeout(() => { slideIndex += 1; }, 5000);
    }
    else if (slideIndex === 1) {
        slides[0].style.display = "none";
        slides[1].style.display = "block";
        slides[2].style.display = "none";
        slides[3].style.display = "none";
        setTimeout(slideShow, 2000);
        slideIndex++
    }
    else if (slideIndex === 2) {
        slides[0].style.display = "none";
        slides[1].style.display = "none";
        slides[2].style.display = "block";
        slides[3].style.display = "none";
        setTimeout(slideShow, 2000);
        slideIndex++
    }
    else if (slideIndex === 3) {
        slides[0].style.display = "none";
        slides[1].style.display = "none";
        slides[2].style.display = "none";
        slides[3].style.display = "block";
        setTimeout(slideShow, 2000);
        slideIndex++
    };
};

slideShow()