const form = document.querySelector('.form_w');
const formP = document.querySelector('.form');
const formBtn = document.querySelector('.btn_down');
const btnClose = document.querySelector('.form_btn_close');

formBtn.onclick = () => {
	form.classList.toggle('is_hidden');
};

btnClose.onclick = () => {
	form.classList.add('is_hidden');
};

formP.onclick = function (e) {
	e.preventDefault();
};