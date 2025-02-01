// Console message
console.log('%c Developed by: Eng. Kareem Elramady https://github.com/kareem-m', 'background: white; color: black; padding: 10px; border: 1px solid black; font-size: 16px; border-radius: 10px;');

// Loading
const loading = document.createElement("div")
loading.classList.add("loading");
document.body.appendChild(loading);

const texts = ["اهلا", "hello", "Bonjour", "Merhaba", "Ciao", "नमस्ते", "你好", "こんにちは", "Привет"];
let index = 0;

function changeText() {
    if (index < texts.length) {
        loading.textContent = texts[index];
        index++;
        setTimeout(changeText, 250);
    } else if (index == texts.length) {
        loading.classList.add("hidden");
    }
}
changeText();

// scroll progress
const scroll = document.createElement("div");
scroll.classList.add("scroll");
document.body.appendChild(scroll);

const updateScroll = () => {
    let height = document.documentElement.scrollHeight - window.innerHeight;
    let scrolltop = document.documentElement.scrollTop;
    scroll.style.width = `${(scrolltop / height) * 100}%`;
};

window.addEventListener("scroll", updateScroll);
window.addEventListener("resize", updateScroll);
updateScroll();

// Initialize AOS
AOS.init();


// Creators
const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: false,
    breakpoints: {
        350: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    },
});