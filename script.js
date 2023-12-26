
document.addEventListener('DOMContentLoaded', function () {
    const eventsContainer = document.getElementById('eventsContainer');
  
    // Fetch data from the backend API
    fetch('/api/events')
      .then(response => response.json())
      .then(data => {
        // Render events on the webpage
        data.forEach(event => {
          const eventCard = document.createElement('div');
          eventCard.classList.add('eventCard');
          eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
            <p>Description: ${event.description}</p>
          `;
          eventsContainer.appendChild(eventCard);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  