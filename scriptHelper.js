// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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

       // else fuel too low do this, cargo too high do this 
       //nested else if block else both good to go do this 

        //     alert("all fields are required!") 
    // add all the staus's for the elemetns make variables for those elements to change the inner html. if else, wether the fields are filled in. CAll validate(input
    // pass in parameter for pilot, co pilot etc. || 

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
