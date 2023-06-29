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

// ACCOMODATION IMAGES SLIDER
const nextBtns = document.querySelectorAll('.next');
const prevBtns = document.querySelectorAll('.prev');
const nextBtnStudio4 = document.querySelector('.next-btn-studio-4');
const prevBtnStudio4 = document.querySelector('.prev-btn-studio-4');
const nextBtnStudio5 = document.querySelector('.next-btn-studio-5');
const prevBtnStudio5 = document.querySelector('.prev-btn-studio-5');
const slide12 = document.querySelectorAll('.slide12');
const slide3 = document.querySelectorAll('.slide3');
const slide4 = document.querySelectorAll('.slide4');
const slide5 = document.querySelectorAll('.slide5');
const slideStudio4 = document.querySelectorAll('.slide-studio-4');
const slideStudio5 = document.querySelectorAll('.slide-studio-5');
const sliderDots = document.querySelectorAll('.dot');

let i = 0;

const nextSlide = slide => {
  for (let j = 0; j < slide.length; j++) {
    slide[j].classList.remove('slide-active');
  }

  slide[i].classList.add('slide-active');
  i++;

  if (i >= slide.length) {
    i = 0;
  }

  console.log(i);
};
const prevSlide = slide => {
  for (let j = 0; j < slide.length; j++) {
    slide[j].classList.remove('slide-active');
  }

  slide[i].classList.add('slide-active');
  i--;

  if (i < 0) {
    i = slide.length - 1;
  }

  console.log(i);
};

nextBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    if (doubleRoomContainer.classList.contains('rooms-show')) {
      nextSlide(slide12);
    } else if (tripleRoomContainer.classList.contains('rooms-show')) {
      nextSlide(slide3);
    } else if (fourRoomContainer.classList.contains('rooms-show')) {
      nextSlide(slide4);
    } else if (fiveRoomContainer.classList.contains('rooms-show')) {
      nextSlide(slide5);
    }
  });
});
prevBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    if (doubleRoomContainer.classList.contains('rooms-show')) {
      prevSlide(slide12);
    } else if (tripleRoomContainer.classList.contains('rooms-show')) {
      prevSlide(slide3);
    } else if (fourRoomContainer.classList.contains('rooms-show')) {
      prevSlide(slide4);
    } else if (fiveRoomContainer.classList.contains('rooms-show')) {
      prevSlide(slide5);
    }
  });
});

// /////////////// stavi da ako ta stranica ima show klasu onda ovo
// prevBtnStudio4.addEventListener('click', function () {
//   prevSlide(slideStudio4);
// });
// nextBtnStudio4.addEventListener('click', function () {
//   nextSlide(slideStudio4);
// });
// prevBtnStudio5.addEventListener('click', function () {
//   prevSlide(slideStudio5);
// });
// nextBtnStudio5.addEventListener('click', function () {
//   nextSlide(slideStudio5);
// });

// console.log();
// setInterval(function () {
//   nextSlide(slide12);
// }, 3000);
// setInterval(function () {
//   nextSlide(slide3);
// }, 3000);
// setInterval(function () {
//   nextSlide(slide4);
// }, 3000);
// setInterval(function () {
//   nextSlide(slide5);
// }, 3000);
// setInterval(function () {
//   nextSlide(slideStudio4);
// }, 4000);
// setInterval(function () {
//   nextSlide(slideStudio5);
// }, 3000);

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

// TEMPERATURE API
const headerTemperature = document.querySelector('.header__temperature');

const lat = 43.3194; // The latitude for the city of Niš
const lon = 21.8963; // The longitude for the city of Niš

const apiKey = '703ae055c436ad0f46e51092f07227a0';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

async function getWeatherData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const temperature = data.main.temp;
    const temperatureCelsius = `${(temperature - 273.15).toFixed(0)} °C`;

    headerTemperature.textContent = temperatureCelsius;
  } catch (error) {
    console.log('Došlo je do greške pri pozivu API-ja:', error);
  }
}

getWeatherData();
