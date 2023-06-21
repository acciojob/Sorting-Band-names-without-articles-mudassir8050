//your code here

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
