/*eslint no-undef: "off"*/

import Translator from '@andreasremdt/simple-translator'

// The below provided options are default.
var translator = new Translator({
	defaultLanguage: 'es',
	detectLanguage: false,
	selector: '[data-i18n]',
	debug: false,
	registerGlobally: '__',
	persist: false,
	persistKey: 'preferred_language',
	filesLocation: '/i18n',
})

translator.fetch(['en', 'es']).then(() => {
	translator.translatePageTo()
	registerLanguageToggle()
})

function updateCVHref(language) {
	let cvAnchor = document.querySelector('.CV-anchor')
	let href = 'https://www.dropbox.com/s/cbrw880zet31l3d/Alberto%20V%C3%A9lez%20CV.pdf?raw=1'
	if (language === 'en') {
		href = 'https://www.dropbox.com/s/r3r70vt8ylpn3cg/English%20CV%20Alberto%20V%C3%A9lez.pdf?raw=1'
	}
	cvAnchor.href = href
}

function registerLanguageToggle() {
	var select = document.querySelector('select')

	select.addEventListener('change', (evt) => {
		var language = evt.target.value
		updateCVHref(language)
		translator.translatePageTo(language)
	})
}
