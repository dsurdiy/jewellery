"use strict";

window.addEventListener("load", windowLoad);

function windowLoad() {
   document.addEventListener("click", documentActions);
}

function documentActions(e) {
   const targetElement = e.target;
   const bodyEl = document.body;

   if (targetElement.closest(".menu-icon")) {
      bodyEl.classList.toggle("menu-open");
   }

   if (targetElement.closest(".menu__link") && bodyEl.classList.contains("menu-open")) {
      bodyEl.classList.remove("menu-open");
   }

   if (targetElement.hasAttribute("data-goto")) {
      e.preventDefault();

      const gotoElement = document.querySelector(`${targetElement.dataset.goto}`);
      const headerContainerEl = document.querySelector(".header__container");
      const headerContainerHeight = headerContainerEl ? headerContainerEl.offsetHeight : 0;

      if (gotoElement) {
         window.scrollTo({
            top: gotoElement.offsetTop - headerContainerHeight,
            behavior: "smooth",
         });
      }
   }
}

if (document.querySelector('.blog__slider')) {
   new Swiper('.blog__slider', {
      speed: 800,
      loop: true,
      navigation: {
         prevEl: '.blog__button--prev',
         nextEl: '.blog__button--next',
      },
      breakpoints: {
         320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
         },
         480: {
            slidesPerView: 1,
            spaceBetween: 10,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         992: {
            slidesPerView: 3,
            spaceBetween: 30,
         },
         1200: {
            slidesPerView: 3,
            spaceBetween: 44,
         },
      },
   });
}