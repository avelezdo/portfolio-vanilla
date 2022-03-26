let renderJobs = function (jobs) {
	const work = document.querySelector('.work-container')

	work.innerHTML = jobs
		.map((job, index) => {
			return `
      <div class="company-wrapper">
        <h3 class="section__headline large">
        ${job.company}
        </h3>
        ${job.works
			.map((work) => {
				return `<div class="job-wrapper">
          <div class="job-headline-wrapper">
            <div class='job-headline'>
              <h3>${work.name}</h3>
              <h5 data-i18n="jobs.${work.key}.type">(${work.type})</h5>
            </div>
          </div>
          <div class='job-content'>
            <div>
              <h3 class="job-title" data-i18n="jobs.${work.key}.title">${work.title}</h3>
              <div class="job-details">
                <h4>${work.duration}</h4>
                <div class="job__tech-container">
                  ${work.technologies
						.map((tech) => {
							return `<span class="job__tech">${tech}</span>`
						})
						.join('')}
                </div>
                </h4>
              </div>
            </div>
          </div>
          <div class="job-description${index === 0 ? ' is-visible' : ''}">
            <p class="section__copy" data-i18n="jobs.${work.key}.description">
              ${work.description}
            </p>
            <ul class="work-bullets">
              ${work.bullets
					.map((bullet, i) => {
						return `<li data-i18n="jobs.${work.name}.bullet-${i + 1}">${bullet}</li>`
					})
					.join('')}
            </ul>
          </div>
        </div>`
			})
			.join('')}
        
      </div>
    `
		})
		.join('')
}

let attachShowEvent = function () {
	document.querySelectorAll('.job-wrapper').forEach(function (item) {
		item.addEventListener('click', function () {
			const allJobs = document.querySelectorAll('.job-description')
			const thisJob = item.querySelector('.job-description')

			if (thisJob.classList.contains('is-visible')) {
				hideElement(thisJob)
			} else {
				for (let i = 0; i < allJobs.length; i++) {
					if (allJobs[i].classList.contains('is-visible')) {
						hideElement(allJobs[i])
					}
				}
				showElement(thisJob)
			}
		})
	})
}

// work job description height animation
const showElement = (el) => {
	const getHeight = () => {
		el.style.display = 'block'
		let height = el.scrollHeight + 'px'
		el.style.display = ''
		return height
	}

	let height = getHeight()
	el.classList.add('is-visible')
	el.style.height = height
	// el.querySelector('.fading-arrow').classList.add('close');
}

const hideElement = (el) => {
	el.style.height = el.scrollHeight + 'px'

	window.setTimeout(function () {
		el.style.height = '0'
	}, 1)

	window.setTimeout(function () {
		el.classList.remove('is-visible')
		// el.querySelector('.fading-arrow').classList.remove('close');
	}, 200)
}

export { renderJobs, attachShowEvent }
