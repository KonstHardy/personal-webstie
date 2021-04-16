$(function () {
  //animation;
  $(".elements, .elements-gradient").addClass("elements--active");

  //swipper;
  let mySwiper = new Swiper(".slider", {
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
  let burger = document.querySelector(".header__btn-menu");
  let menu = document.querySelector(".header__menu");

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
    if (e.target == this || $(".menu--mobile .menu__item")) {
      //burger off;
      burger.classList.remove("header__btn-menu--active");
      //menu hide;
      menu.classList.remove("menu--mobile");
      //scroll off;
      $("html, body").removeClass("stop-scroll");
    }
  });

  //auto closing the mobile-menu when window width >= 1200px;
  $(window).on("resize", function () {
    if (
      window.innerWidth >= 1200 &&
      $(".header__menu").hasClass("menu--mobile")
    ) {
      //burger off;
      burger.classList.toggle("header__btn-menu--active");
      //menu hide;
      menu.classList.toggle("menu--mobile");
      //scroll off;
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
    clearInputForm(); //clearing input fields;
  });

  //form (close-popup);
  $(".form").on("click", function (event) {
    if (event.target == this) {
      $(this).fadeOut(200);
      $(".email, .deadline").removeClass("form__line--active");
      $("html, body").removeClass("stop-scroll"); //scroll-on;
      clearInputForm(); //clearing input fields;
    }
  });

  //checkbox check;
  let checkboxes = $("input[type=checkbox]");

  $(".form").on("submit", function (e) {
    let checker = false;
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

  //clearing input fields;
  function clearInputForm() {
    //name & validation class;
    $("input[type=text][name=name]").val("") &&
      $("input[type=text][name=name]").removeClass("error");

    //phone & validation class;
    $("input[type=tel][name=phone]").val("") &&
      $("input[type=tel][name=phone]").val("").removeClass("error");

    //email & validation class;
    $("input[type=email][name=mail]").val("") &&
      $("input[type=email][name=mail]").removeClass("error");

    //deadline;
    $("input[type=text][name=deadline").val("");

    //checkbox & validation class;
    $(".form__text").removeClass("form__text--error");
    $(".form__text").removeClass("checkbox-error");
  }
});
