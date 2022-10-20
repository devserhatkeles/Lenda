const navTab = document.querySelector(".side-nav");
const navItems = document.querySelectorAll(".side-nav__item");
navTab.addEventListener("click", function (e) {
  const clicked = e.target.closest(".side-nav__item");
  if (!clicked) return;
  [...navItems].map((item) => {
    item.classList.remove("side-nav__item--active");
    item.classList.add("side-nav__item--inactive");
  });
  clicked.classList.add("side-nav__item--active");
  clicked.classList.remove("side-nav__item--inactive");
});

const slides = document.querySelectorAll(".gallery__item");
const btnRight = document.querySelector(".gallery__btn--right");
const btnLeft = document.querySelector(".gallery__btn--left");
let curSlide = 1;
const maxSlide = slides.length - 2;

/* const goToSlide = function (slide) {
  [...slides].map(
    (s, i) => (s.style.transform = `translateX(${33.3333 * (i + 1 - slide)}%)`)
  );
};
*/

const goToSlide = function (slide) {
  [...slides].map(
    (s, i) => (s.style.transform = `translateX(${100 * (i + 1 - slide)}%)`)
  );
};

goToSlide(1);

const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 1;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 1) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
