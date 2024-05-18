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
  