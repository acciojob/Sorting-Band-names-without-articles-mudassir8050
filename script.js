//your code here
function sortBandNames(bandNames) {
  // Remove articles ('a', 'an', 'the') from band names for sorting
  const regex = /^(a|an|the)\s/i;
  const sortedBandNames = bandNames
    .map((name) => name.replace(regex, ''))
    .sort((a, b) => a.localeCompare(b));

  // Create the HTML list
  const ul = document.createElement('ul');
  ul.id = 'band';

  sortedBandNames.forEach((bandNames) => {
    const li = document.createElement('li');
    li.textContent = bandName;
    ul.appendChild(li);
  });

  // Add the list to the document body or a specific element
  document.body.appendChild(ul);
}


let bandNames = ['The Beatles', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones', 'Pink Floyd'];

// Remove articles from band names
let cleanBandNames = bandNames.map(name => name.replace(/^(?:the|a|an)\s+/i, ''));

// Sort the clean band names in lexicographic order
let sortedBandNames = cleanBandNames.sort((a, b) => a.localeCompare(b));

// Create the HTML list
let list = document.createElement('ul');
list.setAttribute('id', 'band');

// Add band names to the list
sortedBandNames.forEach(name => {
  let listItem = document.createElement('li');
  listItem.textContent = name;
  list.appendChild(listItem);
});

// Print the HTML list
console.log(list.outerHTML);
