document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://rickandmortyapi.com/api/character/?page=1';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`El estado de la respuesta no esta bien: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const mainElement = document.querySelector('main');
        
        data.results.slice(0, 20).forEach(character => {
          const characterCard = document.createElement('div');
          characterCard.classList.add('character-card');
  
          const characterName = document.createElement('h2');
          characterName.textContent = character.name;
  
          const characterImage = document.createElement('img');
          characterImage.src = character.image;
          characterImage.alt = character.name;
  
          characterCard.appendChild(characterName);
          characterCard.appendChild(characterImage);
          mainElement.appendChild(characterCard);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        console.log('Fetch operation completed');
      });
  });