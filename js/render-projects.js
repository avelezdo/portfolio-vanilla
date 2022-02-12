import { projects as myProjects } from '../assets/data/projects.json';

let skills = ['Proyectos recientes', 'SCSS', 'Vue.js 2', 'Vue.js 3', 'Node.js/Express'];

let selectedSkill = null;

let renderSkills = function (num) {
	let ul = document.querySelector('.list__skills'),
		newArr = skills.map((skill, index) => {
			if (index === Number.parseInt(num)) {
				selectedSkill = skill;
				return `<li class="skill-selector skill__active" data-id="${index}">${skill}</li>`;
			} else {
				return `<li class="skill-selector skill__inactive" data-id="${index}">${skill}</li>`;
			}
		});
	ul.innerHTML = newArr.join('');
	attachSkillEvent();
};

function attachSkillEvent() {
	let skillSelectors = document.querySelectorAll('.skill-selector');
	const projectsDestination = document.querySelector('.projects');
	skillSelectors.forEach((skill) => {
		skill.addEventListener('mousedown', function (e) {
			renderSkills(e.target.dataset.id);
			renderProjects(filterProjects(selectedSkill));
			// using the scroll.js function to jump
			// down the page and view the projects
			if (window.scrollY <= 5) {
				scroll(projectsDestination);
			}
		});
	});
}

let renderProjects = function (arr, onload = false) {
	const projectList = document.querySelector('.list__projects'),
		allProjects = document.querySelectorAll('.project');
	allProjects.forEach((project, index) => {
		if (!onload) {
			project.classList.add(`project-exit-${index + 1}`);
		}
	});

	setTimeout(function () {
		projectList.innerHTML = arr
			.map((project, index) => {
				return `
        <li class="project project-enter-${index + 1}">
            <div class="project__info">
                <div class="project__header-row">
                    <p class="section__headline project__name">${project.title}</p>
                    <div>
                        ${addProductionLink(project)}
                        ${addGitHubLink(project)}
                    </div>
                </div>
                <p class="project__description section__copy">
                    ${project.description}
                </p>
                <ul class="project__tech" data-project-name="recordshare">
                    ${addTechnologies(project)}
                </ul>
            </div>
            <div>
                <img src="${project.image}" alt="${project.title} UI"
                data-project-name="${project.title.toLowerCase()}" class="img project__img">
            </div>
        </li>
    `;
			})
			.join('');
	}, 500);

	document.querySelector('.projects-listed').innerHTML = `${arr.length} de ${myProjects.length} proyectos`;
};

let addProductionLink = function (project) {
	return project.production_link !== ''
		? `            
            <a href="${project.production_link}" target="_blank">
                <img src="../assets/images/social-icons/eye.png" width="32"
                class="project__link">
            </a>`
		: '';
};

let addGitHubLink = function (project) {
	return project.github_link !== ''
		? `            
            <a href="${project.github_link}" target="_blank">
                <img src="./assets/images/social-icons/github.png" width="32"
                class="project__link" alt="${project.title} Github Repo">
            </a>`
		: '';
};

let addTechnologies = function (project) {
	return project.technologies
		.map((tech) => {
			return `<li>${tech}</li>`;
		})
		.join('');
};

let filterProjects = function (query) {
	if (selectedSkill === 'All') {
		return myProjects;
	}
	if (selectedSkill === 'Proyectos recientes') {
		return myProjects.filter((_, index) => index < 3);
	}

	return myProjects.filter((p) => p.technologies.includes(query));
};

export { renderSkills, attachSkillEvent, renderProjects, myProjects };
