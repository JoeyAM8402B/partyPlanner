// define variables
var searchButton = document.getElementById("search-button");
var userInput = document.getElementById("user-input");

// Add an event listener to the searchButton
// When the searchButton is clicked
searchButton.addEventListener("click", function(){
    // the value of the user input is defined as the variable newRequest
    var newRequest = userInput.value;
    console.log(newRequest);
    // create a div to hold the newRequest 
    var newRequestDiv = document.createElement("div");
    // assign text to the div
    newRequestDiv.innerHTML= newRequest
    // append text to the webpage so that it shows
    document.body.appendChild(newRequestDiv);
})