// define variables
var searchButton = document.getElementById("search-button");
var userInputArtist = document.getElementById("user-input-artist");
var userInputSong = document.getElementById("user-input-song");
var albumCover = document.getElementById("album-cover");
var artistName = document.getElementById("artist-name");
var artistSong= document.getElementById("track-name");
var lyrics = document.getElementById("track-text");
var songURL = document.getElementById("preview-URL")

// hide results container 
document.getElementById("api-data").style.display = "none";

// Add an event listener to the searchButton
// When the searchButton is clicked
searchButton.addEventListener("click", function(){
    // the value of the user input is defined as the variable newRequest
    var newRequest = userInputArtist.value + " " +userInputSong.value;
    console.log(newRequest);
    // create a div to hold the newRequest 
    var newRequestButton = document.createElement("button");
    // assign text to the div
    newRequestButton.textContent= newRequest
    // append text to the webpage so that it shows
    document.getElementById("search-results").appendChild(newRequestButton);
    newRequestButton.setAttribute("style", "color:black");

    // When new request button is clicked
    newRequestButton.addEventListener("click", function(){
        
    // show results container
    document.getElementById("api-data").style.display = "initial";
    // run the API call to obtain the information from the user input
    var apiKey =
         "vl9xTczUbTMxXTZYXe8zLC1McGd4rQSxqoP1u1dG5T8CG0vSjjl5YI6KxM5XdcfG";
    var artistSearch = document.getElementById("user-input-artist").value;
    //console.log(artistSearch);
    var songSearch = document.getElementById('user-input-song').value;
    //console.log(songSearch);
    var queryUrl = encodeURI(
          "https://orion.apiseeds.com/api/music/lyric/" +
          artistSearch +
          "/" +
          songSearch +
          "?" + "apikey=" +
          apiKey);
        console.log(queryUrl);
    $.ajax({
       url: queryUrl,
        method: "GET",
        }).then(function(response) {
        console.log(response);
        //$("newRequestButton").text(JSON.stringify(response));
      });
    })

})


// define the image for the image tag
albumCover.setAttribute("src", "https://cdn1.vectorstock.com/i/1000x1000/07/15/music-vinyl-disk-vintage-cartoon-vector-17390715.jpg");

// define text for artistName and artistSong
artistName.textContent="Adele";
artistSong.textContent="Hello";
lyrics.textContent="Hello from the other side"
