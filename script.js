'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1');
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We used cookies for improved functionality and analytics';
message.innerHTML =
  'We used cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

const header = document.querySelector('.header');
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes

const logo = document.querySelector('.nav__logo');
// // console.log(logo.src);
// // console.log(logo.alt);
// logo.alt = 'Beautiful Minimalistic logo';
// // console.log(logo.alt);
// logo.setAttribute('alt', 'Bankist');
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

//classes

logo.classList.add('c', 'j');

// Smooth Scrolling
document
  .querySelector('.btn--scroll-to')
  .addEventListener('click', function (e) {
    e.preventDefault();
    document
      .querySelector('#section--1')
      .scrollIntoView({ behavior: 'smooth' });
  });

// //rgb(255,255,255)
// //rgb(179,24,175)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   // e.stopPropagation();
//   this.style.backgroundColor = randomColor();
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // e.stopPropagation();
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//   },
//   true
// );

//Page Scrolling

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// // sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);
//   if (window.screenY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });
