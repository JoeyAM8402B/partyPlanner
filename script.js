// define variables
var searchButton = document.getElementById("search-button");
var userInputArtist = document.getElementById("user-input-artist");
var userInputSong = document.getElementById("user-input-song");
var albumCover = document.getElementById("album-cover");
var artistName = document.getElementById("artist-name");
var artistSong= document.getElementById("track-name");
var lyrics = document.getElementById("track-text");
var songURL = document.getElementById("preview-URL");
var settings;
var audioClip;

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
    newRequestButton.setAttribute("style", "border-radius: 6px");

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
    "Authorization": "Bearer BQCz6HlFcgbchOMf8JalIHnTpHaNBO0DrQNktNBD58G7s3tj_1fBSGrd9AEHK1BneR1F0rNQ4H8OH0PBp6fHNnM9ArwNNQx0IJnH3O9wb9k7V9Jo1C9FKd12xo9Dvr7LEuUPuh81uD2YaGQ5"
  },
};
$.ajax(settings).done(function (response, error) {
  console.log(response, error);
  audioClip =  response.tracks.items['0'].preview_url
  console.log(audioClip)
  
  $("#preview-URL").attr("src", audioClip);
});
}

// function to start animation on music player when audio is clicked
songURL.addEventListener("click", function(){
    songURL.classList.add('animated', 'heartBeat');
});

//songURL.classList.add('animated', 'heartBeat');