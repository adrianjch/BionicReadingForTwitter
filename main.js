setTimeout(main, 4000);

console.log('started');

var nReloads = 0;

function main() {

	const parent = document.querySelector('div[aria-label="Timeline: Your Home Timeline"].css-1dbjc4n');
    const childDiv = parent.querySelector('div');
    const tweets = childDiv.getElementsByClassName('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0');

	for (var i=0; i<=tweets.length; i++) {
        var words = tweets[i].textContent.split(" "); 

        // Get first letters 
        const bionicWords = words.map(word => {

            const nChars = word.length;
            const nBoldChars = Math.ceil(nChars/2);
            const boldSubstring = word.substring(0, nBoldChars);
            const normalSubstring = word.substring(nBoldChars);
            const bionicWord = '<b class="bnc" style="font-weight: 900">' + boldSubstring + '</b>' + normalSubstring;

            return bionicWord;

        })

        console.log('Reload ' + nReloads);
        nReloads ++;

        tweets[i].innerHTML = bionicWords.join(" ");
    };
    
    setTimeout(main, 3000);
}