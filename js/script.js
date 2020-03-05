
let y = window.scrollY || document.documentElement.scrollTop;

let areaDinamica = document.getElementById("casesTitles");
let scrollArea = document.querySelector('.scrollCasesWrapper');
let lastBlockRef = document.querySelector('#lastblockRef');
let dynamicShapes = document.querySelector('.casesAnimationTitlesDynamicShape');
let topRef = 0;
let oldRange = (scrollArea.getBoundingClientRect().height - lastBlockRef.getBoundingClientRect().height);
let newRange = document.querySelector('.casesAnimationtitlesContent').getBoundingClientRect().height;

function calculateRange() {
	console.log('!!!!!!!!!!!!!calculateRange: ' + ((oldRange + newRange - (newRange/1.23)) / newRange).toFixed(2));
	return ((oldRange + newRange - (newRange/1.23)) / newRange).toFixed(2);
}



function findTop() {
	y = window.scrollY || document.documentElement.scrollTop;
	let fixedScrollTop = 0;
	let dynamicScrollArea = areaDinamica.getBoundingClientRect();
	let scrollAreaSelecionada = scrollArea.getBoundingClientRect();
	console.log('scrollArea area height: ' + scrollAreaSelecionada.height);
	console.log('scrollArea top: ' + scrollAreaSelecionada.top);
	console.log('last block top: ' + lastBlockRef.getBoundingClientRect().top);
	console.log('y ' + y);
	console.log('dynamicScrollArea.top ' + dynamicScrollArea.top);
	fixedScrollTop = (y - scrollAreaSelecionada.height);
	console.log('fixedScrollTop ' + fixedScrollTop);

	function convertScroll() {
		console.log(oldRange);
		console.log(newRange);
	};

	if(scrollAreaSelecionada.top <= 5 && lastBlockRef.getBoundingClientRect().top >= 0) {
		console.log('scroll area !!!!!!!!!!!!!!');
		convertScroll();
		console.log(calculateRange());
		areaDinamica.style.transform = 'translateY('+ ((scrollAreaSelecionada.top * -1)) + 'px)';
		dynamicShapes.style.transform = 'translateY('+ ((scrollAreaSelecionada.top * -1) / calculateRange()) + 'px)';
	};

	if(y >= 10) {
		document.querySelector('.headerScroll').style.transform = 'translateY(0%)';
	} else {
		document.querySelector('.headerScroll').style.transform = 'translateY(-150%)';
	};
};



window.addEventListener('scroll', function() {
	return findTop();
});

