// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.querySelector('form');
   form.addEventListener('submit', function (event) {
      event.preventDefault();
      const pilotName = document.querySelector('input[name=pilotName]');
      const coPilotName = document.querySelector('input[name=copilotName]');
      const fuelLevel = document.querySelector('input[name=fuelLevel]');
      const cargoMass = document.querySelector('input[name=cargoMass]');

      //if all boxes are not compelely filled then show alert
      if (pilotName.value === '' || coPilotName.value === '' || fuelLevel.value === '' || cargoMass.value === '') {
         alert("All Fields Required")
      }
      //checking to see if pilot and co pilot are string and fuel level and cargo mass are numbers
      if (!isNaN(pilotName.value) || !isNaN(coPilotName.value)) {
         alert("String is required for names")
      }
      if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert('Number is required for level and mass')
      }
      const div = document.getElementById(`faultyItems`);
      const launchStatus = document.getElementById('launchStatus');

      let fuelStatus = 'Fuel level high enough for launch'
      let cargoStatus = 'Cargo mass low enough for launch'
      //if fuel levels are below 10,000liters, change faultyItems to visible

      if (+fuelLevel.value < 10000) {
         fuelStatus = 'Fuel level is not high enough'
         launchStatus.innerHTML = 'Shuttle Not Ready For Launch'
         launchStatus.style.color = 'red'
      }

      //if the cargo mass is over 10,000kilograms, change the list to visible 
      if (+cargoMass.value > 10000) {
         cargoStatus = 'Cargo mass is not low enough'
         launchStatus.innerHTML = 'Shuttle Not Ready For Launch'
         launchStatus.style.color = 'red'
      }
      console.log('fuelLevel.value is', +fuelLevel.value > 10000);
      console.log('cargoMass.value is', +cargoMass.value < 10000);
      if ((+fuelLevel.value >= 10000) && (+cargoMass.value <= 10000)) {
         launchStatus.innerHTML = 'Shuttle is Ready For Launch'
         launchStatus.style.color = 'green'


         div.innerHTML = `
      <ol>
         <li id="pilotStatus">${pilotName.value} Ready</li>
         <li id="copilotStatus">${coPilotName.value} Ready</li>
         <li id="fuelStatus">${fuelStatus}</li>
         <li id="cargoStatus">${cargoStatus}</li>
      </ol>`
         div.style.visibility = 'visible'

         const destinationDiv = document.getElementById('missionTarget');

         const planetaryData = {
            "name": 'KS-18b',
            "diameter": '34500 km',
            "star": 'KS-18',
            "distance": '110 lights years from Earth',
            "image": 'https://www.nasa.gov/sites/default/files/thumbnails/image/heic1916a.jpg',
            "moons": 0
         }

         destinationDiv.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${planetaryData.name}</li>
         <li>Diameter: ${planetaryData.diameter}</li>
         <li>Star: ${planetaryData.star}</li>
         <li>Distance from Earth: ${planetaryData.distance}</li>
         <li>Number of Moons: ${planetaryData.moons}</li>
      </ol>
      <img src="${planetaryData.image}">
`
      }


   });



});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
