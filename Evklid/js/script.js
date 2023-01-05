/* burger */
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop.scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')
  })
})

/* swiper */
const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper', {
  // Default parameters

  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return `<button class="btn_round ${className}" aria-label="Переключение слайда"></button>`
    }
  }

})


/* work-tabs */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.work__btn').forEach(function (e) {
    e.addEventListener('click', function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content').forEach(function (e) {
        e.classList.remove('tab-content--active')
        document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
      });
    });

    e.addEventListener('click', function (e) {
      const tabDefault = e.currentTarget.dataset.default;
      document.querySelectorAll('.work__btn').forEach(function (e) {
        e.classList.remove('work__btn--default')
        document.querySelector(`[data-path='${tabDefault}']`).classList.add('work__btn--default');
      });
    });
  });
})

// accordion
$(function () {
  $("#accordion").accordion({
    active: false,
    collapsible: true,
    heightStyle: 'content',
  });
});


// header__search
const searchBtn = document.querySelector('.link__loop');
const searchModal =  document.querySelector('.header__search');
const searchCloseBtn = document.querySelector('.header__form-close');

searchBtn.addEventListener('click', () => {
  searchModal.classList.add('header__search_opened');
});

searchCloseBtn.addEventListener('click', () => {
  searchModal.classList.remove('header__search_opened');
});
