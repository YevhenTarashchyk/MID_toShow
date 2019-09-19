let burgerMenu = document.querySelector('.burger_btn').children,
	mobileNav = document.getElementById('navigation__menu').getElementsByClassName('menu__nav')[0];




/*Проверка класса на активность*/
function toggleActive(...args) {
	for(let i = 0; i < args.length; i++) {
		let data = args[i].dataset;
		args[i].classList.toggle(`${data.action}--active`);
	}
}

/*Клик по бургеру*/
burger_btn.addEventListener('click', function () {
	let arr = Array.from(burgerMenu);
	let elActive = arr.map(value => toggleActive(value,mobileNav));
});

/*Кнопки*/
let goTopBtn = document.querySelector('.footer__diamond');
goTopBtn.addEventListener('click', backToTop);

let goBottomBtn = document.querySelector('.diamond');
goBottomBtn.addEventListener('click', backToBottom);


function backToTop() {
    if (window.pageYOffset !== 0) {
      window.scrollBy(0, -40);
      setTimeout(backToTop, 20);
    }
  
}

function backToBottom() {
	let match = Math.ceil(window.pageYOffset + document.documentElement.clientHeight);
    if (match != document.documentElement.scrollHeight) {
      window.scrollBy(0, 40);
      setTimeout(backToBottom, 20);
    }
}
