var slide = document.querySelector(".slider");
var controls = document.querySelectorAll(".control-button");
var sliderSwitch = document.querySelector(".slider-switch");
var slider1 = document.querySelector(".slider1");
var slider2 = document.querySelector(".slider2");
var slider3 = document.querySelector(".slider3");


function activeSlideIndicator(clickedButton, button1, button2) {
    if (!clickedButton.classList.contains("active")) {
        button1.classList.remove("active");
        button2.classList.remove("active");
        clickedButton.classList.add("active");
    }
}

slider1.classList.add("slider-switch");

controls[0].addEventListener("click", function() {
    activeSlideIndicator(controls[0], controls[1], controls[2]);
    slider1.classList.add("slider-switch");
    slider2.classList.remove("slider-switch");
    slider3.classList.remove("slider-switch");
});
controls[1].addEventListener("click", function() {
    activeSlideIndicator(controls[1], controls[0], controls[2]);
    slider2.classList.add('slider-switch');
    slider1.classList.remove("slider-switch");
    slider3.classList.remove("slider-switch");
});
controls[2].addEventListener("click", function() {
    activeSlideIndicator(controls[2], controls[1], controls[0]);
    slider3.classList.add("slider-switch");
    slider1.classList.remove("slider-switch");
    slider2.classList.remove("slider-switch");
});