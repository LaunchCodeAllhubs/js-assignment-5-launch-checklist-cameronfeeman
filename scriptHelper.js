// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name}</li>
                    <li>Diameter:${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${image}" alt="${name}">
`;
}

function validateInput(testInput) {
    if (testInput.trim() === ""){
        return "Empty";
    } else if (isNaN(testInput)){
        return "Not a Number";
    } else {
        return "Is a Number"
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty"|| validateInput(cargoLevel) === "Empty")
   {
    alert("all fields are required!"); 
   } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") 
   {
  alert("Please enter a valid name for Pilot and Copilot and a valid number for the Fuel Level and Cargo Mass ");
   } else { 
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} ready for take off`;
    document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot} ready for take off`;

    document.getElementById("faultyItems").style.visibility = "visible";
 } if (fuelLevel < 10000 && cargoLevel > 10000) {
    document.getElementById("fuelStatus").innerHTML = "Insufficent Fuel";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
    document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";

    document.getElementById("faultyItems").style.visibility = "visible";
 } else if (fuelLevel < 10000) {
    document.getElementById("fuelStatus").innerHTML = "Insufficent Fuel";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
    document.getElementById("launchStatus").style.color = "red";

    document.getElementById("faultyItems").style.visibility = "visible";
 } else if (cargoLevel > 10000) {
    document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
    document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";

 } else {
    document.getElementById("faultyItems").style.visibility = "hidden";
    document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
    document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)";
 }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json') 
        const json = await planetsReturned.json();
console.log(json)

    return planetsReturned;
}

function pickPlanet(planets) {

let randomPlanet = Math.floor(Math.random() * planets.length);
return planets[randomPlanet];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
