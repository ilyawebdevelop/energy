import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

const mediaQuery575 = window.matchMedia('(max-width: 575px)');

// Инициализация слайдера intro-slider
const introSlider = document.querySelector('.intro-slider');
var mySwiperIntro = new Swiper(introSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  effect: 'fade',
  autoplay: {
    delay: 7000,
  },
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: document.querySelector('.intro .swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
});


if (mediaQuery575.matches) {

  // Инициализация слайдера services-slider
  document.querySelectorAll('.services').forEach(n => {
    const mySwiperServices = new Swiper(n.querySelector('.services-slider'), {
      slidesPerView: 1,
      speed: 800,
      spaceBetween: 20,
      pagination: {
        el: document.querySelector('.services .swiper-pagination'),
        clickable: true,
        type: 'bullets',
      },
      on: {
        slideChange: function () {
          var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
          let offer = document.querySelector('.slider-count');
          offer.innerHTML = `<span>` + (mySwiperServices.activeIndex + 1) + `</span>` + ` / ` + (slides_count.length);
        }
      },
    });

    function change() {

      setTimeout(function () {
        var slides_count = n.querySelectorAll(".swiper-slide");
        let offer_1 = n.querySelector('.slider-count');
        offer_1.innerHTML = `<span>` + (mySwiperServices.activeIndex + 1) + `</span>` + ` / ` + (slides_count.length);
      }, 1000);
    }
    change();
  });

}

// Инициализация слайдера projects-slider
const projectsSlider = document.querySelector('.projects-slider');
var mySwiperProjects = new Swiper(projectsSlider, {
  slidesPerView: 3,
  speed: 800,
  spaceBetween: 40,
  navigation: {
    nextEl: document.querySelector('.projects .slider-next'),
    prevEl: document.querySelector('.projects .slider-prev'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});

// Инициализация слайдера news-slider
const newsSlider = document.querySelector('.news-slider');
var mySwiperNews = new Swiper(newsSlider, {
  slidesPerView: 3,
  speed: 800,
  spaceBetween: 40,
  navigation: {
    nextEl: document.querySelector('.news .slider-next'),
    prevEl: document.querySelector('.news .slider-prev'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// projects-service-slider
const projectsSliderService = document.querySelector('.projects-service-slider');
var mySwiperProjectsService = new Swiper(projectsSliderService, {
  slidesPerView: 2,
  speed: 800,
  spaceBetween: 40,
  navigation: {
    nextEl: document.querySelector('.projects .slider-next'),
    prevEl: document.querySelector('.projects .slider-prev'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
  },
});

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.header-mob');
const searchMob = document.querySelector('.search-mob');
const menuClose = document.querySelector('.header-mob-close');
const searchBtnMob = document.querySelector('.header__search-btn-mob');
const searchBackMob = document.querySelector('.search-mob-back');
const bodyEl = document.querySelector('body');
let navItemAll = document.querySelectorAll('.headerNavList li a');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const menuCloseF = function () {
  menu.classList.remove('active');
  toggleBurger();
  bodyOverflow();
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
});
menuClose?.addEventListener('click', function (e) {
  menuCloseF();
});
searchBtnMob.addEventListener('click', function (e) {
  searchMob.classList.add('active');

});
searchBackMob.addEventListener('click', function (e) {
  searchMob.classList.remove('active');
});

// close menu in Landing page
$(document).on("click", ".headerNavList li a", function (e) {
  $('.header-mob').removeClass('active');
  $('body').removeClass('hidden');
  toggleBurger();
});