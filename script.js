let bandNames = ['The Beatles', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones'];

// Function to remove articles from band names
function removeArticles(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

// Sort band names without articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Generate the HTML list
let htmlList = "<ul id='band'>";
for (let name of bandNames) {
  htmlList += "<li>" + name + "</li>";
}
htmlList += "</ul>";

console.log(htmlList);
