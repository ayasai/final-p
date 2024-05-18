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