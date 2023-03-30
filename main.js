setTimeout(test, 1000);

var nReloads = 0;

function test()
{
	nReloads ++;
	document.title = "Rld n." + nReloads;

	const elements = document.getElementsByClassName('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0');

	Array.from(elements).forEach(function(element)
	{
        var words = element.textContent.split(" "); 

        // Get first letters 
        const bionicWords = words.map(word => 
        {

            const nChars = word.length;
            const nBoldChars = Math.ceil(nChars/3);
            const boldSubstring = word.substring(0, nBoldChars);
            const normalSubstring = word.substring(nBoldChars);
            const bionicWord = '<b>' + boldSubstring + '</b>' + normalSubstring;

            return bionicWord;
        })

        element.innerHTML = bionicWords.join(" ");

	});

	setTimeout(test, 2000);
}

/*
const text = document.querySelector(".css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0");

const words = text.textContent.split(" "); 

// Get first letters 

const boldedWords = words.map(word => {
    let nChars = word.length;
    let nBoldChars = Math.ceil(nChars/3);
    let boldSubstring = word.substring(0, nBoldChars);
    let normalSubstring = word.substring(nBoldChars);
    let bionicWord = '<b>' + boldSubstring + '</b>' + normalSubstring;

    return bionicWord;
})

text.innerHTML = boldedWords.join(" ");

setTimeout(updateHTML, 5000);
*/