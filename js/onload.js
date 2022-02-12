import { jobs } from '../assets/data/jobs.json';
import { renderJobs, attachShowEvent } from './render-work';
import { renderSkills, attachSkillEvent, renderProjects, myProjects } from './render-projects';

window.onload = async function () {
	await renderSkills(0);
	attachSkillEvent();
	await renderJobs(jobs);
	attachShowEvent();
	await renderProjects(
		myProjects.filter((item, index) => index < 3),
		true
	);
	// attachHoverAnimationOnItems(navItems);
	// attachHoverAnimationOnItems(albumCovers, true);
};
