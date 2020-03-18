// define variables
var searchButton = document.getElementById("search-button");
var userInputArtist = document.getElementById("user-input-artist");
var userInputSong = document.getElementById("user-input-song");
var albumCover = document.getElementById("album-cover");
var artistName = document.getElementById("artist-name");
var artistSong= document.getElementById("track-name");
var lyrics = document.getElementById("track-text");

// hide results container 
//document.getElementById("api-data").style.display = "none";

// Add an event listener to the searchButton
// When the searchButton is clicked
searchButton.addEventListener("click", function(){
    // the value of the user input is defined as the variable newRequest
    var newRequest = userInputArtist.value + "-" +userInputSong.value;
    console.log(newRequest);
    // create a div to hold the newRequest 
    var newRequestDiv = document.createElement("div");
    // assign text to the div
    newRequestDiv.innerHTML= newRequest
    // append text to the webpage so that it shows
    document.getElementById("search-results").appendChild(newRequestDiv);
    newRequestDiv.setAttribute("style", "color:white");
})

//set up function to display results container after selection from search results is chosen is clicked
//function showInfo{
    //document.getElementById("api-data").style.display = "show";
//}


// define the image for the image tag
albumCover.setAttribute("src", "https://image.shutterstock.com/image-photo/black-vinyl-record-isolated-on-260nw-179005415.jpg");

// define text for artistName and artistSong
artistName.textContent="Adele";
artistSong.textContent="Hello";
lyrics.textContent="Hello from the other side"

