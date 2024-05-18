document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase();
  
    if (query.trim() === '') {
        alert('Please enter a Pokemon name.');
        return;
    }
  
  if (query.trim() === '') {
      alert('Please enter a Pokemon name.');
      return;
  }
  
  fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
  .then(response => {
      if (!response.ok) {
          throw new Error('Pokemon not found');
      }
      return response.json();
  })
  .then(data => {
      displayResults([data]);
  })
  .catch(error => {
      displayResults([]);
      console.error('Error fetching data:', error);
  });
});

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    
  if (results.length === 0) {
    resultsDiv.innerHTML = '<p>No results found</p>';
} else {
    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `
            <h3>${result.name}</h3>
            <p>ID: ${result.id}</p>
            <p>Height: ${result.height}</p>
            <p>Weight: ${result.weight}</p>
            <img src="${result.sprites.front_default}" alt="${result.name}">
        `;
        resultsDiv.appendChild(resultItem);
    });
}
}