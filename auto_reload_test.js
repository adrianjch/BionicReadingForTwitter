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


function main() {
    
}
