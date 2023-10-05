document.addEventListener('DOMContentLoaded', ()=> {    
    addDogs()
  })


const addDogs = () => {
    let form = document.getElementById('form')
    let name = document.getElementById('dogName')
    let image = document.getElementById('dogImage')
    let color = document.getElementById('dogColor')
    let breed = document.getElementById('dogBreed')
    let age = document.getElementById('dogAge')
  
    form.addEventListener('submit', (event) => {
      event.preventDefault()

      const dogData = {
        name: name.value,
        breed: breed.value,
        age: age.value,
        color: color.value,
        image: image.value
      }
  
      const postDog = {
        method: "POST",   
        body: JSON.stringify(dogData),
        headers: {
          'Content-Type': 'application/json'            
        }
      }
     
  
      fetch(' http://localhost:3000/dogs', postDog)
      .then((res) => res.json())  
      // .then((data) => console.log(data))
      window.location.href = 'index.html'
          
    
    })
  
  }
   