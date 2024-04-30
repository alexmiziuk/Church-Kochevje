function toggleBurgerMenu() {
	const toggleButton = document.getElementById('toggleBurger');
	const burger = document.querySelector('.burger');
	const burgerLayer = document.querySelector('.burger-layer');
	const burgerMenuContainer = document.querySelector('.burger-menu__container');
	const burgerMenu = document.querySelector('.burger-menu');

	toggleButton.addEventListener('click', function () {
		burger.classList.toggle('active-burger');
		if (burger.classList.contains('active-burger')) {
			burgerLayer.classList.add('burger-layer-active');
			var scrollBarSize = getScrollBarSize();
			if (scrollBarSize && scrollBarSize[1] > 0) {
				document.body.style.paddingRight = scrollBarSize[1] + 'px';
			}
			document.body.style.overflow = 'hidden';
		} else {
			burgerLayer.classList.remove('burger-layer-active');
			document.body.style.paddingRight = '';
			document.body.style.overflow = 'auto';
		}
	});

	// Закрывать меню при клике на пункт меню и добавлять класс активности
	const handleMenuItemClick = () => {
		const menuItems = document.querySelectorAll('.burger-menu__item');
		menuItems.forEach(item => {
			item.addEventListener('click', () => {
				burger.classList.remove('active-burger');
				burgerLayer.classList.remove('burger-layer-active');
				document.body.style.paddingRight = '';
				document.body.style.overflow = 'auto';

				// Удалить класс активности у всех пунктов меню
				menuItems.forEach(item => {
					item.classList.remove('burger-menu__item--active');
				});

				// Добавить класс активности к текущему пункту меню
				item.classList.add('burger-menu__item--active');
			});
		});

	}
	handleMenuItemClick();

	burgerLayer.addEventListener('click', () => {
		burger.classList.remove('active-burger');
		burgerLayer.classList.remove('burger-layer-active');
		document.body.style.paddingRight = '';
		document.body.style.overflow = 'auto';
	});
	burgerMenu.addEventListener('click', (event) => {
		event.stopPropagation();
	});
	burgerMenuContainer.addEventListener('click', (event) => {
		event.stopPropagation();
	});

	function getScrollBarSize() {
		var el = window.document.createElement('textarea'),
			style = {
				'visibility': 'hidden',
				'position': 'absolute',
				'zIndex': '-2147483647',
				'top': '-1000px',
				'left': '-1000px',
				'width': '1000px',
				'height': '1000px',
				'overflow': 'scroll',
				'margin': '0',
				'border': '0',
				'padding': '0'
			},
			support = el.clientWidth !== undefined && el.offsetWidth !== undefined;

		for (var key in style) {
			if (style.hasOwnProperty(key)) {
				el.style[key] = style[key];
			}
		}

		var size = null;
		if (support && window.document.body) {
			window.document.body.appendChild(el);
			size = [el.offsetWidth - el.clientWidth, el.offsetHeight - el.clientHeight];
			window.document.body.removeChild(el);
		}
		return size;
	}
}

toggleBurgerMenu();


/* var video = document.getElementById('myVideo');
video.play();
 */

/* 
function toggleBurgerMenu() {
	const toggleButton = document.getElementById('toggleBurger');
	const burgerMenu = document.querySelector('.burger');
	const burgerLayer = document.querySelector('.burger-layer');

	toggleButton.addEventListener('click', function () {
		 burgerMenu.classList.toggle('active-burger');
		 if (burgerMenu.classList.contains('active-burger')) {
			  burgerLayer.classList.add('burger-layer-active');
			  var scrollBarSize = getScrollBarSize();
			  if (scrollBarSize && scrollBarSize[1] > 0) {
					document.body.style.paddingRight = scrollBarSize[1] + 'px';
			  }
			  document.body.style.overflow = 'hidden';
		 } else {
			  burgerLayer.classList.remove('burger-layer-active');
			  document.body.style.paddingRight = '';
			  document.body.style.overflow = 'auto';
		 }
	});

	// Закрывать меню при клике на пункт меню
	const menuItems = document.querySelectorAll('.burger-menu__item');
	menuItems.forEach(item => {
		 item.addEventListener('click', () => {
			  burgerMenu.classList.remove('active-burger');
			  burgerLayer.classList.remove('burger-layer-active');
			  document.body.style.paddingRight = '';
			  document.body.style.overflow = 'auto';
		 });
	});
}

function getScrollBarSize() {
	var el = window.document.createElement('textarea'),
		 style = {
			  'visibility': 'hidden',
			  'position': 'absolute',
			  'zIndex': '-2147483647',
			  'top': '-1000px',
			  'left': '-1000px',
			  'width': '1000px',
			  'height': '1000px',
			  'overflow': 'scroll',
			  'margin': '0',
			  'border': '0',
			  'padding': '0'
		 },
		 support = el.clientWidth !== undefined && el.offsetWidth !== undefined;

	for (var key in style) {
		 if (style.hasOwnProperty(key)) {
			  el.style[key] = style[key];
		 }
	}

	var size = null;
	if (support && window.document.body) {
		 window.document.body.appendChild(el);
		 size = [el.offsetWidth - el.clientWidth, el.offsetHeight - el.clientHeight];
		 window.document.body.removeChild(el);
	}
	return size;
}

toggleBurgerMenu(); */
