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

function registerLanguageToggle() {
	var select = document.querySelector('select')

	select.addEventListener('change', (evt) => {
		var language = evt.target.value
		translator.translatePageTo(language)
	})
}
