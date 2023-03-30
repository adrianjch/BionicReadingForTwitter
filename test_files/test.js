// Get text element
const text = document.querySelector(".text"); 
// Split the text into an array of words
const words = text.textContent.split(" "); 
// Wrap the first word in a html bold tag
words[0] = "<b>" + words[0] + "</b>"; 
// Join the words back together with a space and update the paragraph content
text.innerHTML = words.join(" "); 