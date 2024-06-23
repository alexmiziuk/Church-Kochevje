import './index.html';
import './index.scss';
import { toggleBurgerMenu } from './modules/burgerMenu';
import { modal } from './modules/modal';
import './modules/sendMail';

document.addEventListener('DOMContentLoaded', () => {
	toggleBurgerMenu();
	modal();
});