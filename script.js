//your code here

// script.js
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Pink Floyd', 'The Beatles', 'Queen'];

function sortBandNames(bandNames) {
  // Define a regular expression pattern to match articles
  const articlePattern = /^(a|an|the)\s/i;

  // Remove articles from band names and store them in a new array
  let bandNamesWithoutArticles = bandNames.map(name => name.replace(articlePattern, ''));

  // Sort the band names in lexicographic order
  bandNamesWithoutArticles.sort();

  // Get the <ul> element by its id
  let bandList = document.getElementById('band');

  // Clear any existing contents of the <ul> element
  bandList.innerHTML = '';

  // Iterate over the sorted band names and create <li> elements to display them
  bandNamesWithoutArticles.forEach(name => {
    let listItem = document.createElement('li');
    listItem.textContent = name;
    bandList.appendChild(listItem);
  });
}

// Call the function with the provided array of band names
sortBandNames(bandNames);
