var btn = document.querySelector(".search-btn")
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
    fetch(serverUrl)
    .then(response => response.json())
    .then(json => {
        locationOutput.innerText=json.status
    })
    .catch(errorHandler)
}



btn.addEventListener("click",eventHandler)