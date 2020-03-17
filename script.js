// define variables
var searchResults = document.getElementById("search-results");


for (var i=0; i<results; i++){
    var firstRequestDiv = document.createElement("div");
    currentE1.textContent= (drink + " - $" + price);
    drinkOptions.appendChild(currentE1);
}

searchButton.addEventListener("click", function(){
    var newDrink = drinkOrder.value;
    var newPrice = drinkPrice.value;
    console.log(newDrink, newPrice);
    var newItem = {drink: newDrink, price: newPrice};
    drinkList.push(newItem);

    var currentE1 = document.createElement("div");
    currentE1.textContent= (newDrink + " - $" + newPrice);
    drinkOptions.appendChild(currentE1);
})