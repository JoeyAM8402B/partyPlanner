// define variables
var searchButton = document.getElementById("search-button");
var userInput = document.getElementById("user-input");
var albumCover = document.getElementById("album-cover");
//var albumInfo = document.createElement('ul');
//var name= document.createElement('li1');
//var year= document.createElement('li2');
//var recordLabel= document.createElement('li3');
//var lyrics = document.createElement("p");

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
    document.getElementById("search-results").appendChild(newRequestDiv);
    newRequestDiv.setAttribute("style", "color:white");
})

// define text for the header 


// define the image for the image tag
albumCover.setAttribute("src", "https://image.shutterstock.com/image-photo/black-vinyl-record-isolated-on-260nw-179005415.jpg");

// define the list items
//name.innerHTML= "Record Name";
//year.innerHTML="Year";
//recordLabel.innerHTML="Record Label";
//lyrics.textContent="Lyrics will go here!"

// append the list items to the list
//albumInfo.appendChild(name);
//albumInfo.appendChild(year);
//albumInfo.appendChild(recordLabel);

// dynamically render the newly created elements to the website

//document.body.appendChild(albumInfo);
//document.body.appendChild(lyrics)