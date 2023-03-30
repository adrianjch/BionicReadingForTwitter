// Get HTML contents
const text2 = document.getElementById('text2');
// Create array of words from the fetched text
const words = text2.textContent.split(" ");
//Iterate through each word
words.forEach((word) => {
    console.log(word)
})


text2.style.fontWeight = 'bold';