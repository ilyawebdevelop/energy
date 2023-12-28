import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера intro-slider
const introSlider = document.querySelector('.intro-slider');
var mySwiperIntro = new Swiper(introSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: document.querySelector('.intro .swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
});

// Инициализация слайдера 
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
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Инициализация слайдера 
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
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
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
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },   
  },
});