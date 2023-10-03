const textPozpatku = (text) => {
	return text.split('').reverse().join('')
}

// textPozpatku('Ahoj světe') // 'etěvs johA'
// textPozpatku('Kajak') // 'kajaK'

const items = document.querySelectorAll('li');
items.forEach((li) => {
	if (li.textContent && li.textContent.toLowerCase() === textPozpatku(li.textContent.toLowerCase())) {
		li.classList.add('palindrom');
	}
})