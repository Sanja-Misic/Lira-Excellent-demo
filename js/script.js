// PRELOADER
const preloader = document.querySelector('.preloader');

const hideloader = () => {
  preloader.classList.add('preloader-hide');
};

window.addEventListener('load', hideloader);

//ACCOMODATION FUNCIONALITY
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
  btn.addEventListener('click', function () {
    console.log('radi');
    accomodationContainer.classList.add('accomodation-about-hidden');

    roomContainers.forEach(container => {
      console.log(container);
      container.classList.remove('rooms-show');
    });

    switch (btn) {
      case doubleRoomBtn:
        doubleRoomContainer.classList.add('rooms-show');
        break;
      case tripleRoomBtn:
        tripleRoomContainer.classList.add('rooms-show');
        break;
      case fourRoomBtn:
        fourRoomContainer.classList.add('rooms-show');
        break;
      case fiveRoomBtn:
        fiveRoomContainer.classList.add('rooms-show');
        break;
      case studioRoomBtn:
        studioRoomContainer.classList.add('accomodation-studio-show');
        break;
    }

    // console.log(btn === doubleRoomBtn);
    // if (btn === doubleRoomBtn) {
    //   doubleRoomContainer.classList.add('rooms-show');
    // } else if (btn === tripleRoomBtn) {
    //   tripleRoomContainer.classList.add('rooms-show');
    // }
  });
});

// doubleRoomBtn.addEventListener('click', function () {
//   accomodationContainer.classList.add('accomodation-about-hidden');
//   doubleRoomContainer.classList.add('rooms-show');
//   tripleRoomContainer.classList.remove('rooms-show');
//   fourRoomContainer.classList.remove('rooms-show');
//   fiveRoomContainer.classList.remove('rooms-show');
//   studioRoomContainer.classList.remove('rooms-show');
// });

//da napravim niz svih kontejnera i ond funkciju kad se klikne na neki iz niza svi ostali nestanu a samo taj se pojavi

// tripleRoomBtn.addEventListener('click', function () {
//   accomodationContainer.classList.add('accomodation-about-hidden');
//   tripleRoomContainer.classList.add('rooms-show');
//   doubleRoomContainer.classList.remove('rooms-show');
//   fourRoomContainer.classList.remove('rooms-show');
//   fiveRoomContainer.classList.remove('rooms-show');
//   studioRoomContainer.classList.remove('rooms-show');
// });
