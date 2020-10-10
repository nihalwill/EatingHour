// Initial array of drinks
var drinks = [];
// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayDrinkInfo() {
  var newDrink = $("#drink-input").val().trim();
  var queryURL =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + newDrink;
  console.log("queryURL:", queryURL);
  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log("response:", response);
    // Creating a div to hold the movie
    var drinkDiv = $("<div class='drink'>");
    // Storing the rating data
    var country = response.drinks[0].strArea;
    var video = response.drinks[0].strYoutube;
    var image = response.drinks[0].strMealThumb;
    var imagePic = $("<img>").attr("src", image);
    imagePic.addClass("drinkPic");
    console.log("image:", image);
    // Creating an element to have the rating displayed
    var pOne = $("<p>").text("Drink Origin: " + country);
    var pTwo = $("<p>").text("Drink Video: ");
    var aTag = $("<a>").attr("href", video).text("Recipe Video");
    pTwo.append(aTag);
    var pThree = $("<p>").text();
    var link = $("<a>");
    link.attr("href", video); //set href
    link.innerHTML = video; //set text to be seen
    pTwo.append(link); //add to body
    // Displaying the rating
    drinkDiv.append(pOne);
    drinkDiv.append(pTwo);
    drinkDiv.append(pThree);
    drinkDiv.append(imagePic);
    $("#drink-view").prepend(drinkDiv);
  });
}
function randomdrink() {
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  console.log("queryURL:", queryURL);
  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log("response:", response);
    var category = response.drinks[0].strCategory;
    var rpOne = $("<p>").text("Meal Category: " + category);
    // Creating a div to hold the movie
    var randomdrinkDiv = $("<div class='randomdrink'>");
    randomdrinkDiv.append(rpOne);
    $("#drink-view").prepend(randomdrinkDiv);
  });
}
function cleardrink() {
  $("#drink-view").empty();
}
// This function handles events where a movie button is clicked
$("#add-drink").on("click", function (event) {
  event.preventDefault();
  displaydrinkInfo();
  $("#drink-input").val("");
  // This line grabs the input from the textbox
});
$("#random-drink").on("click", function (event) {
  event.preventDefault();
  randomdrink();
  // This line grabs the input from the textbox
});
$("#cleardrink").on("click", function (event) {
  event.preventDefault();
  cleardrink();
  // This line grabs the input from the textbox
});
