document.addEventListener('DOMContentLoaded', () => {

  const modal = new GraphModal();
  const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  });

  //
  let burger = document.querySelector('.burger');
  let nav = document.querySelector('.up-nav');
  let navLink = document.querySelectorAll('.up-nav__link');
  let secondNav = document.querySelector('.down-nav');
  let borderContainer = document.querySelector('.header__down');
  let header = document.querySelector(".header");
  let headerSongs = document.querySelectorAll('.header__down-players');
  let headerMoreBtn = document.querySelector('.header__down-mobbtn');

  burger.addEventListener('click', function () {
    burger.classList.toggle('burger--active');
    nav.classList.toggle('up-nav--active');
    secondNav.classList.toggle('down-nav--active');
    header.classList.toggle('header-active');
    borderContainer.classList.toggle('white-bg-color');

    headerMoreBtn.classList.remove('header__down-mobbtn--active');
    borderContainer.classList.remove('mobile-background');
    headerSongs.forEach(item => item.classList.remove('header__down-players--active'));
    document.body.classList.toggle('stop-scroll');
  })

  navLink.forEach(item => {
    item.addEventListener('click', function () {
      burger.classList.remove('burger--active')
      nav.classList.remove('up-nav--active');
      secondNav.classList.remove('down-nav--active');
      header.classList.remove('header-active');
      borderContainer.classList.remove('white-bg-color');
      document.body.classList.remove('stop-scroll');
    })
  })

  headerMoreBtn.addEventListener('click', function () {
    headerMoreBtn.classList.toggle('header__down-mobbtn--active');
    borderContainer.classList.toggle('mobile-background');
    headerSongs.forEach(item => item.classList.toggle('header__down-players--active'));
  })
  //

  document.querySelector('.btn1-player').addEventListener('click', function () {
    document.querySelector('.btn1-player .pause').classList.toggle('btn-active')
  });

  document.querySelector('.btn2-player').addEventListener('click', function () {
    document.querySelector('.btn2-player .pause').classList.toggle('btn-active')
  });

  let btnPlay = document.querySelectorAll('.card-content__btnplay');
  btnPlay.forEach(function (el) {
    el.addEventListener('click', function (ev) {
      ev.stopPropagation();
      btnPlay.forEach(el => { if (el != this) { el.classList.remove('btn-active') }; });
      this.classList.toggle('btn-active');
    });
  });

  document.querySelector('.podcasts__more-btn').addEventListener('click', function () {
    var elements = document.getElementsByClassName('podcasts__item');
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.toggle("podcasts__item--active");
    }
  });

  const btnClose = document.querySelector('.podcasts__more-btn');
  btnClose.addEventListener('click', function () {
    btnClose.innerHTML =
      (btnClose.innerHTML === 'Скрыть') ? btnClose.innerHTML = 'Ещё подкасты' : btnClose.innerHTML = 'Скрыть';
  })

  $(".accordion-list").accordion({
    heightStyle: "content",
    active: 0,
    collapsible: true,
    icons: false
  });

  document.querySelectorAll('.guests-list__btn').forEach(function (guestsBtn) {
    guestsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.guests-list__btn').forEach(function (btn) {
        btn.classList.remove('guests-list__btn--active')
      });
      e.currentTarget.classList.add('guests-list__btn--active');
      document.querySelectorAll('.guests__cards').forEach(function (guestsBtn) {
        guestsBtn.classList.remove('guests__cards--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('guests__cards--active');
    });
  });

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 2.3,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpointsBase: '.swiper-container',
    breakpoints: {
      370: {
        spaceBetween: 20,
        grabCursor: true
      },
      598: {
        spaceBetween: 20,
        grabCursor: true
      },
      992: {
        spaceBetween: 30
      },
      1110: {
        slidesPerView: 2.0,
        spaceBetween: 30
      },
    }
  });

  new JustValidate('.about__form', {
    colorWrong: 'var(--color-thunderbird)',

    rules: {
      text: {
        required: true,
        minLength: 3,
        maxLength: 50
      },
      name: {
        required: true,
        minLength: 2,
        maxLength: 11
      },
      mail: {
        required: true,
        email: true
      },
    },
    messages: {
      text: {
        required: 'Ошибка',
        minLength: 'Минимум 3 символа',
        maxLength: 'Максимум 50 символов'
      },
      name: {
        required: 'Ошибка',
        minLength: 'Минимум 2 символа',
        maxLength: 'Максимум 11 символов'
      },
      mail: {
        required: 'Ошибка',
        email: 'Введите пожалуйста корректный email'
      },
    },
  });


});
