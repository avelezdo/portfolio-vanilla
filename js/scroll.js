const aboutDestination = document.querySelector('.about'),
	workDestination = document.querySelector('.work'),
	projectsDestination = document.querySelector('.projects'),
	recommendationsDestination = document.querySelector('.recommendations'),
	bandcampDestination = document.querySelector('.bandcamp'),
	contactDestination = document.querySelector('.contact'),
	navLink = document.querySelectorAll('.nav__link');

navLink.forEach((target) => {
	target.addEventListener('click', () => {
		console.log(target.dataset);
		switch (target.dataset.name) {
			case 'about':
				scroll(aboutDestination);
				break;
			case 'work':
				scroll(workDestination);
				break;
			case 'projects':
				scroll(projectsDestination);
				break;
			case 'recommendations':
				scroll(recommendationsDestination);
				break;
			case 'bandcamp':
				scroll(bandcampDestination);
				break;
			case 'contact':
				scroll(contactDestination);
				break;
			default:
				break;
		}
	});
});

function scroll(target) {
	console.log(target);
	target.scrollIntoView(
		{
			behavior: 'smooth',
		},
		5000
	);
}
