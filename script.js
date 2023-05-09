const next = document.querySelector(".me-md-2"),
    back = document.querySelector(".btn-primary"),
    carousel = document.querySelector(".carousel__cards");
let angle = 0;
let i = 0;

const images = document.querySelectorAll(".carousel__img");
const texts = document.querySelectorAll(".card-body");

next.addEventListener("click", () => {
    if (images[0] == undefined)
        console.log("reut")
    angle -= 45;
    carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
    i++
    if (i <8) {
        console.log(i)
        images[i - 1].style.opacity = 0.3;
        texts[i - 1].style.visibility = "hidden";
        images[i].style.opacity = 1;
        texts[i].style.visibility = "visible"
    }
    else{
        images[0].style.opacity = 1;
        texts[0].style.visibility = "visible"
        images[7].style.opacity = 0.3;
        texts[7].style.visibility = "hidden";
        i = 0
    }
});

back.addEventListener("click", () => {
    angle += 45;
    carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
    if (i == 0) {
        images[7].style.opacity = 1;
        texts[7].style.visibility = "visible"
        images[0].style.opacity = 0.3
        texts[0].style.visibility = "hidden"
        i = 8
    }
    i--
    images[i + 1].style.opacity = 0.3
    texts[i + 1].style.visibility = "hidden"
    images[i].style.opacity = 1
    texts[i].style.visibility = "visible"
});

const ageSelect = document.getElementById('Planet-select');

ageSelect.addEventListener('change', () => {
    const index = ageSelect.selectedIndex;
    angle = index* -45;
    carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
    images[i].style.opacity = 0.3;
    texts[i].style.visibility = "hidden";
    i = index;
    images[i].style.opacity = 1;
    texts[i].style.visibility = "visible";
});