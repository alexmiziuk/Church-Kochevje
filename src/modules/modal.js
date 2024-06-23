import { getScrollBarSize } from './utils.js';


const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const checkboxInput = document.querySelector('.modal__checkbox');
const checkboxContainer = document.querySelector('.modal__container-privacy');
const modalWindow = document.querySelector('.modal');
const exitButton = document.querySelector('.modal__button-exit');
const modalOpenButton = document.querySelector('.footer__contacts-btn');
const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');

const nameError = document.querySelector('.error-name');
const emailError = document.querySelector('.error-mail');
const messageError = document.querySelector('.error-message');
const checkboxError = document.querySelector('.error-checkbox');

function validateForm() {
	form.addEventListener('submit', function (event) {
		let isValid = true;

		// Clear previous error states
		clearErrors();

		// Validate name
		if (nameInput.value.trim() === '') {
			showError(nameInput, nameError);
			isValid = false;
		}

		// Validate email
		if (!validateEmail(emailInput.value)) {
			showError(emailInput, emailError);
			isValid = false;
		}

		// Validate message
		if (messageInput.value.trim() === '') {
			showError(messageInput, messageError);
			isValid = false;
		}

		// Validate checkbox
		if (!checkboxInput.checked) {
			checkboxContainer.classList.add('invalid');
			checkboxError.classList.remove('hide');
			isValid = false;
		}

		if (!isValid) {
			event.preventDefault();
		}
	});
}

function showError(input, errorElement) {
	input.classList.add('invalid');
	errorElement.classList.remove('hide');
}
function clearErrors() {
	[nameInput, emailInput, messageInput, checkboxInput].forEach(input => {
		input.classList.remove('invalid');
		checkboxContainer.classList.remove('invalid');
	});
	[nameError, emailError, messageError, checkboxError].forEach(errorElement => {
		errorElement.classList.add('hide');
	});
}

function validateEmail(email) {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(String(email).toLowerCase());
}

// Add focus event listeners to clear errors on focus
nameInput.addEventListener('focus', () => clearFieldError(nameInput, nameError));
emailInput.addEventListener('focus', () => clearFieldError(emailInput, emailError));
messageInput.addEventListener('focus', () => clearFieldError(messageInput, messageError));
checkboxInput.addEventListener('focus', () => {
	checkboxContainer.classList.remove('invalid');
	checkboxError.classList.add('hide');
});

function clearFieldError(input, errorElement) {
	input.classList.remove('invalid');
	errorElement.classList.add('hide');
}
function showModal() {
	modalOpenButton.addEventListener('click', () => {
		modalWindow.classList.add('modal__visible');
		var scrollBarSize = getScrollBarSize();
		if (scrollBarSize && scrollBarSize[1] > 0) {
			document.body.style.paddingRight = scrollBarSize[1] + 'px';
		}
		document.body.style.overflow = 'hidden';
	});

	exitButton.addEventListener('click', () => {
		setTimeout(() => {
			document.body.style.paddingRight = '';
			document.body.style.overflow = 'auto';
		}, 600);
		modalWindow.classList.remove('modal__visible');
		form.reset();
		clearErrors();
		restorePlaceholders();
	});
}
function handleInputFocusBlur() {
	inputs.forEach(input => {
		input.addEventListener('focus', (event) => {
			event.target.classList.add('placeholder-hidden');
		});

		input.addEventListener('blur', (event) => {
			if (event.target.value.trim() === '') {
				event.target.classList.remove('placeholder-hidden');
			}
		});
	});
}

function restorePlaceholders() {
	inputs.forEach(input => {
		input.classList.remove('placeholder-hidden');
	});
}
export function hideModalForm() {
	document.body.style.overflow = 'auto';
	modalWindow.classList.remove('modal__visible');
}

export function modal() {
	showModal();
	validateForm();
	handleInputFocusBlur();
}
