$(function(){

// animation
$('.elements, .elements-gradient').addClass('elements--active');

// swipper 
	var mySwiper = new Swiper ('.slider', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,

		breakpoints: {
			576: {
				slidesPerView: 2,		
			},
			756: {
				slidesPerView: 2,
				spaceBetween: 25,		
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 30,		
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 35,		
			},			
			1366: {
				slidesPerView: 3,
				spaceBetween: 30,		
			},
		},		
		navigation: {
			nextEl: '.slider__arrow--right',
			prevEl: '.slider__arrow--left',
		},
		pagination: {
			el: '.slider__pagination',
			type: 'bullets',
			clickable: true,
		},		
	});

// menu mobile
	let burger = document.querySelector('.header__btn-menu');
	let menu = document.querySelector('.header__menu');	

	burger.addEventListener('click', function (e) {
		e.preventDefault();
		//burger on/off
		$(this).toggleClass('header__btn-menu--active');
		//показать/скрыть меню
		menu.classList.toggle('menu--mobile');
		//scroll on/off
		$('html, body').toggleClass('stop-scroll');		
	});


	menu.addEventListener('click', function (e) {
		// при нажатии на popup или на пункт меню
		if(event.target == this || $('.menu__item')) {
			var mql = window.matchMedia('all and (max-width: 1199px)');
			if (mql.matches) {
			  //burger on/off
				burger.classList.toggle('header__btn-menu--active');
				//показать/скрыть меню
				menu.classList.toggle('menu--mobile');
				//scroll on/off
				$('html, body').toggleClass('stop-scroll');
			} else {
			    // нет, размер окна более 479px 
			}
		};		
	});

// form callback (ввод цифр и валидация)
	$('.form__input[type="tel"]').inputmask({"mask": "+7 (999) 999-99-99"});

	$('.form__callback').each(function () {
		$(this).validate({
			errorPlacement(error, element) {
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
				}
			},            
		});
	});

// form callback (open)
	$('.btn-callback').click(function(){
		$('.form').fadeIn(200);
		//scroll-off
		$('html, body').addClass('stop-scroll');
	});

// form order project (open)
	$('.order--project').click(function(){	
		$('.form').fadeIn(200);		
		// email/deadline
		$('.email, .deadline').addClass('form__line--active');		
		//scroll-off
		$('html, body').addClass('stop-scroll');		
	});

// form (close - button) 
	$('.form__btn-close').click(function(){		
		$('.form').fadeOut(200);
		$('.email, .deadline').removeClass('form__line--active');
		//scroll-on
		$('html, body').removeClass('stop-scroll');	
	});

// form (close - popup) 
	$('.form').on('click', function(event) {
		if(event.target == this) {
			$(this).fadeOut(200);
			
			$('.email, .deadline').removeClass('form__line--active');
			//scroll-on
			$('html, body').removeClass('stop-scroll');	
		};		
	});

// // form-btn (submit)
// 	$('.form-btn').on('click', function (e) {
// 		e.preventDefault();			
// 	});

});
