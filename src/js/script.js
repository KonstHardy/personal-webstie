$(function () {
  // animation
  $(".elements, .elements-gradient").addClass("elements--active");

  // swipper
  var mySwiper = new Swiper(".slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      756: {
        spaceBetween: 25,
      },
      992: {
        spaceBetween: 30,
      },
      1024: {
        spaceBetween: 35,
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".slider__arrow--right",
      prevEl: ".slider__arrow--left",
    },
    pagination: {
      el: ".slider__pagination",
      type: "bullets",
      clickable: true,
    },
  });

  // menu mobile
  var burger = document.querySelector(".header__btn-menu");
  var menu = document.querySelector(".header__menu");

  burger.addEventListener("click", function (e) {
    e.preventDefault();
    //burger on/off
    $(this).toggleClass("header__btn-menu--active");
    //показать/скрыть меню
    menu.classList.toggle("menu--mobile");
    //scroll on/off
    $("html, body").toggleClass("stop-scroll");
  });

  menu.addEventListener("click", function (e) {
    // при нажатии на popup или на пункт меню
    if (event.target == this || $(".menu__item")) {
      var mql = window.matchMedia("all and (max-width: 1199px)");
      if (mql.matches) {
        //burger on/off
        burger.classList.toggle("header__btn-menu--active");
        //показать/скрыть меню
        menu.classList.toggle("menu--mobile");
        //scroll on/off
        $("html, body").toggleClass("stop-scroll");
      }
    }
  });

  // form callback (ввод цифр и валидация)
  $('.form__input[type="tel"]').inputmask({ mask: "+7 999 999-99-99" });

  $(".form__callback").each(function () {
    $(this).validate({
      errorPlacement: function (error, element) {
        return true;
      },
      focusInvalid: true,
      rules: {
        name: {
          required: true,
        },
        phone: {
          required: true,
        },
        mail: {
          required: true,
        },
      },
    });
  });

  // form callback (open)
  $(".btn-callback").click(function () {
    $(".form").fadeIn(200);
    //scroll-off
    $("html, body").addClass("stop-scroll");
  });

  // form order project (open)
  $(".order--project").click(function () {
    $(".form").fadeIn(200);
    // email/deadline
    $(".email, .deadline").addClass("form__line--active");
    //scroll-off
    $("html, body").addClass("stop-scroll");
  });

  // form (close - button)
  $(".form__btn-close").click(function () {
    $(".form").fadeOut(200);
    $(".email, .deadline").removeClass("form__line--active");
    //scroll-on
    $("html, body").removeClass("stop-scroll");
  });

  // form (close - popup)
  $(".form").on("click", function (event) {
    if (event.target == this) {
      $(this).fadeOut(200);

      $(".email, .deadline").removeClass("form__line--active");
      //scroll-on
      $("html, body").removeClass("stop-scroll");
    }
  });

  // проверка чекбокса
  var checkboxes = $("input[type=checkbox]");

  $(".form").on("submit", function (e) {
    var checker = false;
    checkboxes.each(function () {
      if ($(this).prop("checked") == true) {
        checker = true;
      }
    });

    if (checker == false) {
      e.preventDefault();
      $(".form__text").addClass("form__text--error");
      $(".form__text").addClass("checkbox-error");
    }
  });
});
