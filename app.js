const textPozpatku = (text) => {
	return text.split('').reverse().join('')
}

// textPozpatku('Ahoj světe') // 'etěvs johA'
// textPozpatku('Kajak') // 'kajaK'

const items = document.querySelectorAll('li');
items.forEach((li) => {
	const text = li.textContent.toLowerCase().replaceAll(' ', '');
	if (text && text === textPozpatku(text)) {
		li.classList.add('palindrom');
	}
})