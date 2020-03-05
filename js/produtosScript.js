
let y = window.scrollY || document.documentElement.scrollTop;





function findTop() {
	y = window.scrollY || document.documentElement.scrollTop;

	if(y >= 10) {
		document.querySelector('.headerScroll').style.transform = 'translateY(0%)';
	} else {
		document.querySelector('.headerScroll').style.transform = 'translateY(-150%)';
	};
};



window.addEventListener('scroll', function() {
	return findTop();
});

