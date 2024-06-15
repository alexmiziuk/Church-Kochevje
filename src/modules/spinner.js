const spinner = document.querySelector('.google-spin-wrapper');
export function spinnerShow() {
	if (spinner) {
		spinner.classList.add('spinner-show');
	}
}
 
export function spinnerHide() {
	if (spinner) {
		spinner.classList.remove('spinner-show');
	}
}