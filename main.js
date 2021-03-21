console.log('hello');

let button = document.querySelector('.services-button');
let wrapper = document.querySelector('.wrapper');

wrapper.classList.add('disabled');

button.addEventListener('click', () => {
	wrapper.classList.toggle('active');
	button.classList.toggle('active-box');
});

let simfo = document.querySelector('.simfo');

if (document.innerWidth <= 600) {
	simfo.textContent = 'Саша Линкина';
}

        /*Mobile - menu*/

let burger = document.querySelector('.burger');
console.log(burger);
burger.addEventListener('click', () => {
	let mobileMenu = document.querySelector('.mobile-menu-container');
	mobileMenu.classList.toggle('menu-active');
	burger.classList.toggle('opened');
});


              /*Swiper*/

const swiper1 = new Swiper('.slider-1', {
	pagination: {
    el: '.swiper-pagination',
  },
});  

const swiper2 = new Swiper('.slider-2', {
	pagination: {
    el: '.swiper-pagination',
  },
});      

const swiper3 = new Swiper('.slider-3', {
	pagination: {
    el: '.swiper-pagination',
  },
});  
