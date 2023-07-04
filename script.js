// def sort_band_names(band_names):
//     # Remove articles ('a', 'an', 'the') from band names
//     articles = ['a', 'an', 'the']
//     cleaned_band_names = []
//     for name in band_names:
//         # Split the name into words
//         words = name.split()
//         # Exclude articles from the list of words
//         words = [word for word in words if word.lower() not in articles]
//         # Join the remaining words back into a string
//         cleaned_name = ' '.join(words)
//         cleaned_band_names.append(cleaned_name)

//     # Sort the cleaned band names in lexicographic order
//     sorted_band_names = sorted(cleaned_band_names)

//     # Generate the HTML list
//     html_list = '<ul id="band">'
//     for name in sorted_band_names:
//         html_list += '<li>{}</li>'.format(name)
//     html_list += '</ul>'

//     return html_list

function sortBandNames(bandNames) {
  const excludedArticles = ['a', 'an', 'the'];

  // Remove articles from band names and store in a new array
  const filteredNames = bandNames.map(name => {
    const words = name.split(' ');
    const filteredWords = words.filter(word => !excludedArticles.includes(word.toLowerCase()));
    return filteredWords.join(' ');
  });

  // Sort the filtered band names in lexicographic order
  const sortedNames = filteredNames.sort((a, b) => a.localeCompare(b));

  // Display the sorted names as a list inside ul element with id="band"
  const bandList = document.getElementById('band');
  sortedNames.forEach(name => {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    bandList.appendChild(listItem);
  });
}

// // # Example usage
// band_names = ['The Beatles', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones', 'Anthrax']
// html_output = sort_band_names(band_names)
// print(html_output)
