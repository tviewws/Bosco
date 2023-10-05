document.addEventListener('DOMContentLoaded', ()=> {
  fetchDogs()  
})

const fetchDogs = () => {
  fetch('http://localhost:3000/dogs')
  .then((response) => response.json())
  .then((data) => renderDogs(data))
}

const renderDogs = (dogs) => {
  dogs.forEach(dog => {
    const dogContainer = document.getElementById('dog-container');
    const dogButton = document.getElementById('add-dog-button');
        
    dogButton.addEventListener('click', () => {
      window.location.href = 'add-dog.html'
    });

    const card = document.createElement('div');
      card.classList.add('card');

      const name = document.createElement('h2');
      name.textContent = dog.name;

      const breed = document.createElement('p');
      breed.textContent = `Breed: ${dog.breed}`;

      const age = document.createElement('p');
      age.textContent = `Age: ${dog.age}`;

      const color = document.createElement('p');
      color.textContent = `Color: ${dog.color}`;

      const image = document.createElement('img');
      image.src = dog.image;
      image.alt = `${dog.color} ${dog.breed}`;

      card.appendChild(name);
      card.appendChild(image);
      card.appendChild(breed);
      card.appendChild(age);
      card.appendChild(color);

      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });

      dogContainer.appendChild(card);

  })
  
}
