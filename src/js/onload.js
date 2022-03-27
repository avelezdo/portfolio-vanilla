import { jobs } from '/public/data/jobs.json'
import { renderJobs, attachShowEvent } from './render-work'
import { renderSkills, attachSkillEvent, renderProjects, myProjects } from './render-projects'

function sortById(a, b) {
	if (a.id < b.id) {
		return 1
	}
	if (a.id > b.id) {
		return -1
	}
	return 0
}

window.onload = async function () {
	await renderSkills(0)
	attachSkillEvent()
	await renderJobs(jobs)
	attachShowEvent()
	console.log({ myProjects })
	const sortedProjects = myProjects.sort(sortById)
	console.log({ sortedProjects })
	await renderProjects(
		sortedProjects.filter((item, index) => index < 3),
		true
	)
}
