setTimeout(test, 1000);

function test()
{
	const elements = document.getElementsByClassName('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0');
	Array.from(elements).forEach(highlight)
	
	setTimeout(test, 1000);
}

function highlight(text)
{
	words = text.textContent.split(/(\s+)/);
	const boldedWords = words.map(word => {
		let nBoldChars = Math.ceil(word.length/2);
		let boldSubstring = word.substring(0, nBoldChars);
		let normalSubstring = word.substring(nBoldChars);
		let bionicWord = '<b>' + boldSubstring + '</b>' + normalSubstring;

		return bionicWord;
	})
	text.innerHTML = boldedWords.join('');
}