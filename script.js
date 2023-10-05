document.addEventListener('DOMContentLoaded', ()=> {
  renderDogs()
  addDogs()
})


function renderDogs(){
  fetch('db.json')
  .then((response) => response.json())
  .then((data) => {
    const dogData = data.dogs;
    const dogContainer = document.getElementById('dog-container');
    document.getElementById('add-dog-button').addEventListener('click', function () {
      window.location.href = 'add-dog.html'
    });

    dogData.forEach((dog) => {
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
    });
  })
  // .catch((error) => {
  //   console.error('Error fetching data:', error);
  // });
}


const addDogs = () => {
  let form = document.getElementById('form')
  let name = document.getElementById('dogName')
  let image = document.getElementById('dogImage')
  let color = document.getElementById('dogColor')
  let breed = document.getElementById('dogBreed')
  let age = document.getElementById('dogAge')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const postDog = {
      method: "POST",

      
      body: JSON.stringify({
        name: name.value,
        breed: breed.value,
        age: age.value,
        color: color.value,
        image: image.value
      }),
      headers: {
               'Content-Type': 'application/json'
          
             }
    }

    fetch(' http://localhost:3000/dogs', postDog)
    .then((res) => res.json())  
    .then((data) => console.log(data))
        
  
  })

}
 
