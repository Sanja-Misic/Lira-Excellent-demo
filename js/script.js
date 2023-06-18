'use strict';

// PRELOADER
const preloader = document.querySelector('.preloader');

const hideloader = () => {
  preloader.classList.add('preloader-hide');
};

window.addEventListener('load', hideloader);

// MOB MENY FUNCTIONALITY
const mobMenyBtn = document.querySelector('.mob-navigation-icon');
const mobCloseBtn = document.querySelector('.mob-navigation-close');
const mobNavContainer = document.querySelector('.mob-navigation');
const body = document.querySelector('body');
const html = document.querySelector('html');

mobMenyBtn.addEventListener('click', function () {
  mobNavContainer.classList.add('mob-navigation-show');
  body.classList.add('u-hidden-overflow');
  html.classList.add('u-hidden-overflow');
});

mobCloseBtn.addEventListener('click', function () {
  mobNavContainer.classList.remove('mob-navigation-show');
  body.classList.remove('u-hidden-overflow');
  html.classList.remove('u-hidden-overflow');
});

//STICKY HEADER
const header = document.querySelector('.header');

const sectionHero = document.querySelector('.hero');
const headerHeight = header.getBoundingClientRect().height;

const navItemsColor = document.querySelectorAll('.navigation-item');
const languageColor = document.querySelector('.header__language');
let logoImg = document.querySelector('.header__logo-img');

const mobNavIconColor = document.querySelector('.mob-navigation-icon-shape');

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add('header-sticky');
    navItemsColor.forEach(item => item.classList.add('navigation-item-sticky'));
    languageColor.classList.add('header__language-sticky');

    if (mobNavIconColor !== null) {
      mobNavIconColor.classList.add('mob-navigation-icon-shape-sticky');
    }
    if (body.id === 'home') {
      logoImg.src = './img/logo-header-sticky.png';
    } else {
      logoImg.src = '../img/logo-header-sticky.png';
    }
    sectionHero.style.marginTop = headerHeight + 'px';
  } else if (entry.isIntersecting) {
    header.classList.remove('header-sticky');
    navItemsColor.forEach(item =>
      item.classList.remove('navigation-item-sticky')
    );
    languageColor.classList.remove('header__language-sticky');
    if (mobNavIconColor !== null) {
      mobNavIconColor.classList.remove('mob-navigation-icon-shape-sticky');
    }

    if (body.id === 'home') {
      logoImg.src = './img/logo-header.png';
    } else {
      logoImg.src = '../img/logo-header.png';
    }

    sectionHero.style.marginTop = '0px';
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

headerObserver.observe(sectionHero);

// ACCOMODATION FUNCIONALITY
const doubleRoomBtn = document.querySelector('.double-room');
const tripleRoomBtn = document.querySelector('.triple-room');
const fourRoomBtn = document.querySelector('.four-bed-room');
const fiveRoomBtn = document.querySelector('.five-bed-room');
const studioRoomBtn = document.querySelector('.studio-room');

const accomodationContainer = document.querySelector('.accomodation-about');
const doubleRoomContainer = document.querySelector('.double-room-container');
const tripleRoomContainer = document.querySelector('.triple-room-container');
const fourRoomContainer = document.querySelector('.four-bed-room-container');
const fiveRoomContainer = document.querySelector('.five-bed-room-container');
const studioRoomContainer = document.querySelector('.accomodation-studio');

const roomBtns = [
  doubleRoomBtn,
  tripleRoomBtn,
  fourRoomBtn,
  fiveRoomBtn,
  studioRoomBtn,
];

const roomContainers = [
  doubleRoomContainer,
  tripleRoomContainer,
  fourRoomContainer,
  fiveRoomContainer,
  studioRoomContainer,
];

roomBtns.forEach(btn => {
  if (btn !== null) {
    btn.addEventListener('click', function () {
      accomodationContainer.classList.add('accomodation-about-hidden');
      studioRoomContainer.classList.remove('accomodation-studio-show');

      roomBtns.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.classList.remove('secondary-nav-item-clicked');
        }
      });

      roomContainers.forEach(container => {
        console.log(container);
        container.classList.remove('rooms-show');
      });

      switch (btn) {
        case doubleRoomBtn:
          doubleRoomContainer.classList.add('rooms-show');
          btn.classList.add('secondary-nav-item-clicked');
          break;
        case tripleRoomBtn:
          tripleRoomContainer.classList.add('rooms-show');
          btn.classList.add('secondary-nav-item-clicked');
          break;
        case fourRoomBtn:
          fourRoomContainer.classList.add('rooms-show');
          btn.classList.add('secondary-nav-item-clicked');
          break;
        case fiveRoomBtn:
          fiveRoomContainer.classList.add('rooms-show');
          btn.classList.add('secondary-nav-item-clicked');
          break;
        case studioRoomBtn:
          studioRoomContainer.classList.add('accomodation-studio-show');
          btn.classList.add('secondary-nav-item-clicked');
          break;
      }
    });
  }
});

// BACK TO TOP BUTTON
const backToTopBtn = document.querySelector('.back-to-top-btn');

const backToTopHendler = () => {
  const position = document.documentElement.scrollTop;

  if (position > 100) {
    backToTopBtn.classList.add('back-to-top-btn-show');
  } else {
    backToTopBtn.classList.remove('back-to-top-btn-show');
  }
};

window.onscroll = backToTopHendler;
window.onload = backToTopHendler;
