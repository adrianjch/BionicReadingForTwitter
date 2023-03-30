// Select the node that you want to observe for changes
const targetNode = document.getElementById('myDiv');

// Create a new instance of the MutationObserver with a callback function
const observer = new MutationObserver((mutationsList, observer) => {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            // Execute main when a new child is added or remove from the parent div
            main();
        }
    }
});

// Define the options for the observer
const config = { childList: true, subtree: true };

// Start observing the target node for specified configuration changes
observer.observe(targetNode, config);


// Disconnect observer (condition not yet set)
var condition = false;
if (condition === true) {
    observer.disconnect();
}

var nReloads = 0;

function main() {
	
	document.title = "Rld n." + nReloads;

	const elements = document.getElementsByClassName('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0');
	Array.from(elements).forEach(function(element) {
        var words = element.textContent.split(" "); 

        // Get first letters 
        const bionicWords = words.map(word => {

            const nChars = word.length;
            const nBoldChars = Math.ceil(nChars/2);
            const boldSubstring = word.substring(0, nBoldChars);
            const normalSubstring = word.substring(nBoldChars);
            const bionicWord = '<b class="bnc" style="font-weight: 900">' + boldSubstring + '</b>' + normalSubstring;

            return bionicWord;
        })

        nReloads ++;
        element.innerHTML = bionicWords.join(" ");

	});

}

/* ----------- Former main ------------*/

/*
setTimeout(test, 3000);

var nReloads = 0;

function test()
{
	
	document.title = "Rld n." + nReloads;

	const elements = document.getElementsByClassName('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0');

	Array.from(elements).forEach(function(element)
	{
        var words = element.textContent.split(" "); 

        // Get first letters 
        const bionicWords = words.map(word => 
        {

            const nChars = word.length;
            const nBoldChars = Math.ceil(nChars/2);
            const boldSubstring = word.substring(0, nBoldChars);
            const normalSubstring = word.substring(nBoldChars);
            const bionicWord = '<b class="bnc" style="font-weight: 900">' + boldSubstring + '</b>' + normalSubstring;

            return bionicWord;
        })

        nReloads ++;
        element.innerHTML = bionicWords.join(" ");

	});

	setTimeout(test, 5000);
}
*/