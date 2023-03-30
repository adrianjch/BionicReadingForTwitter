// Select the node that you want to observe for changes
const targetNode = document.querySelector('.css-1dbjc4n');

// Create a new instance of the IntersectionObserver with a callback function
const observer = new IntersectionObserver(entries => {
  for (let entry of entries) {
    if (entry.isIntersecting) {
      // The target element is now visible - do something here
      console.log('Twitter is loading new feeds from scrolling!');
      main();
    }
  }
});

// Start observing the target node
observer.observe(targetNode);

var nReloads = 0;

function main() {
    nReloads++;
    document.title = "Rld n." + nReloads;
};