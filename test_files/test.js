// Get text element
const text = document.querySelector(".text"); 

// Split the text into an array of words
const words = text.textContent.split(" "); 

/* --- Get first letters --- */

const boldedWords = words.map(word => {
    let nChars = word.length;
    let nBoldChars = Math.ceil(nChars/3);
    let boldSubstring = word.substring(0, nBoldChars);
    let normalSubstring = word.substring(nBoldChars);
    let bionicWord = '<b>' + boldSubstring + '</b>' + normalSubstring;

    return bionicWord;
})

text.innerHTML = boldedWords.join(" ");