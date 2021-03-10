$(function () {
  //animation;
  $(".elements, .elements-gradient").addClass("elements--active");

  //swipper;
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

  //mobile-menu;
  var burger = document.querySelector(".header__btn-menu");
  var menu = document.querySelector(".header__menu");

  burger.addEventListener("click", function (e) {
    e.preventDefault();
    //burger on/off;
    $(this).toggleClass("header__btn-menu--active");
    //menu show/hide;
    menu.classList.toggle("menu--mobile");
    //scroll on/off;
    $("html, body").toggleClass("stop-scroll");
  });

  //closing the mobile-menu when clicking on the background or menu item;
  menu.addEventListener("click", function (e) {
    if (e.target == this || $(".menu__item")) {
      //burger on/off;
      burger.classList.toggle("header__btn-menu--active");
      //menu show/hide;
      menu.classList.toggle("menu--mobile");
      //scroll on/off;
      $("html, body").toggleClass("stop-scroll");
    }
  });

  //form callback (input of numbers and validation);
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

  //form callback (open);
  $(".btn-callback").click(function () {
    $(".form").fadeIn(200);
    $("html, body").addClass("stop-scroll"); //scroll-off;
  });

  //form order-project (open);
  $(".order--project").click(function () {
    $(".form").fadeIn(200);
    $(".email, .deadline").addClass("form__line--active"); //email/deadline;
    $("html, body").addClass("stop-scroll"); //scroll-off;
  });

  //form (close-button);
  $(".form__btn-close").click(function () {
    $(".form").fadeOut(200);
    $(".email, .deadline").removeClass("form__line--active");
    $("html, body").removeClass("stop-scroll"); //scroll-on;
  });

  //form (close-popup);
  $(".form").on("click", function (event) {
    if (event.target == this) {
      $(this).fadeOut(200);
      $(".email, .deadline").removeClass("form__line--active");
      $("html, body").removeClass("stop-scroll"); //scroll-on;
    }
  });

  //checkbox test;
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
