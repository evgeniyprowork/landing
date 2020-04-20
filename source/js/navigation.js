//const menuBtn = document.querySelector('.is-active')
const menuBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const ref = document.querySelectorAll('.nav a');

menuBtn.onclick = function () {
	nav.style.display = 'block';
	this.classList.toggle('is-active');
	if (!this.classList.contains('is-active')) {
		nav.style.display = 'none';
	}

	for (let i = 0; i < ref.length; i++) {
		ref[i].onclick = () => {
			nav.style.display = 'none';
			this.classList.toggle('is-active');
		};

	}
};

