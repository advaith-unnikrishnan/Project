var btn = document.querySelector(".search-btn")
const lat = document.getElementById("lat")
const lon = document.getElementById("lon")
var locationInput=document.querySelector("select")
var locationOutput=document.querySelector("#output")

var serverUrl = "https://6ed2de18-f11d-4424-83cd-5f9fefb58d6d.mock.pstmn.io/disasterdata"


// function getTranslateUrl(text){
//     return serverUrl+"?text="+text
// }

function errorHandler(error){
    console.log("Error occured : ",error)
    alert("Something wrong with the server, try after sometime")
}


function eventHandler(){
    // fetch(serverUrl)
    // .then(response => response.json())
    // .then(json => {
    //     locationOutput.innerText=json.status
    // })
    // .catch(errorHandler)
    // locationOutput.innerText = `Lat: ${lat.value} Lon: ${lon.value}`
    Locations.forEach((location) => {
        if (location.X == lat.value && location.Y == lon.value) {
            if(location.status === "High Risk")
                locationOutput.innerText=`The location is in ${location.status} zone and it has a ${location.target_2019*100}% chance of flood occurence`
            else if(location.status === "Risk")
            locationOutput.innerText=`The location is in ${location.status}zone and has a ${location.target_2019*100}% chance of flood occurence`
            else if(location.status === "Take precautions")
            locationOutput.innerText=`The location has ${location.target_2019*100}% chance of flood occurence, you can ${location.status}`
            else if(location.status === "Be on alert")
            locationOutput.innerText=`The location has  ${location.target_2019*100}% chance of flood occurence. ${location.status}`
            else
            locationOutput.innerText=`The location is in ${location.status} and it has a ${location.target_2019*100}% chance of flood occurence`
        }
    });
}



btn.addEventListener("click",eventHandler)