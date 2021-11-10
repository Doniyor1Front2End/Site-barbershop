new Swiper('.swiper__body', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 3,
	spaceBetween: 120,
	centeredSlides: false,
	//Бесконечность
	loop: true,
	loopedSlides: 3,
});
new Swiper('.masters__swiper', {
	navigation: {
		nextEl: '.swiper-button-nex',
		prevEl: '.swiper-button-pre'
	},
	slidesPerView: 3,
	spaceBetween: 120,
	centeredSlides: false,
	//Бесконечность
	loop: true,
	loopedSlides: 3,
});