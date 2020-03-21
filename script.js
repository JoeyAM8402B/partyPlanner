// define variables
var searchButton = document.getElementById("search-button");
var userInputArtist = document.getElementById("user-input-artist");
var userInputSong = document.getElementById("user-input-song");
var albumCover = document.getElementById("album-cover");
var artistName = document.getElementById("artist-name");
var artistSong= document.getElementById("track-name");
var lyrics = document.getElementById("track-text");
var songURL = document.getElementById("preview-URL")
var settings;

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
        //console.log(response);
        artistName.textContent= response.result.artist.name;
        artistSong.textContent= response.result.track.name;
        lyrics.textContent= response.result.track.text;
        runSpotify();
      });
    })
})
//Spotify function to pull the audio file
function runSpotify(){
var inputArtistSearch = document.getElementById ("user-input-artist").value;
//console.log(inputArtistSearch);
var inputSongSearch = document.getElementById ("user-input-song").value;
//console.log(inputSongSearch);
settings = {
  "url": "https://api.spotify.com/v1/search?q=" + inputArtistSearch + " " + inputSongSearch +"&type=track&limit=1",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Authorization": "Bearer BQBC6iTp6a387aWxYmxFrJjTIMO3-tVtNlvn0E-lYNu8JZuRRlAAhfEtdHoBY2DLYqto5TyYDl5oq1XkaRV4T5ERB6UXuND6WXtGoYutUkxDqnIaHqogMviZiZG1NTfa2yHgHuzUBZYwQ08c"
  },
};
$.ajax(settings).done(function (response, error) {
  console.log(response, error);
  const audioClip =  response.tracks.items['0'].preview_url
  console.log(audioClip)
  
  $("#preview-URL").attr("src", audioClip);
});
}

// define the image for the image tag
albumCover.setAttribute("src", "https://cdn1.vectorstock.com/i/1000x1000/07/15/music-vinyl-disk-vintage-cartoon-vector-17390715.jpg");

// define text for artistName and artistSong


