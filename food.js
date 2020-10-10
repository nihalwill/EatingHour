// Initial array of food
var food = [];
// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayFoodInfo() {
  var newFood = $("#food-input").val().trim();
  var queryURL =
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + newFood;
  console.log("queryURL:", queryURL);
  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log("response:", response);
    // Creating a div to hold the movie
    var foodDiv = $("<div class='food'>");
    // Storing the rating data
    var country = response.meals[0].strArea;
    var video = response.meals[0].strYoutube;
    var image = response.meals[0].strMealThumb;
    var imagePic = $("<img>").attr("src", image);
    imagePic.addClass("foodPic");
    console.log("image:", image);
    // Creating an element to have the rating displayed
    var pOne = $("<p>").text("Meal Origin: " + country);
    var pTwo = $("<p>").text("Meal Video: ");
    var aTag = $("<a>").attr("href", video).text("Recipe Video");
    pTwo.append(aTag);
    var pThree = $("<p>").text();
    var link = $("<a>");
    link.attr("href", video); //set href
    link.innerHTML = video; //set text to be seen
    pTwo.append(link); //add to body
    // Displaying the rating
    foodDiv.append(pOne);
    foodDiv.append(pTwo);
    foodDiv.append(pThree);
    foodDiv.append(imagePic);
    $("#food-view").prepend(foodDiv);
  });
}
function randomFood() {
  var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
  console.log("queryURL:", queryURL);
  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log("response:", response);
    var category = response.meals[0].strCategory;
    var rpOne = $("<p>").text("Meal Category: " + category);
    // Creating a div to hold the movie
    var randomFoodDiv = $("<div class='randomFood'>");
    randomFoodDiv.append(rpOne);
    $("#food-view").prepend(randomFoodDiv);
  });
}
function clearFood() {
  $("#food-view").empty();
}
// This function handles events where a movie button is clicked
$("#add-food").on("click", function (event) {
  event.preventDefault();
  displayFoodInfo();
  $("#food-input").val("");
  // This line grabs the input from the textbox
});
$("#random-food").on("click", function (event) {
  event.preventDefault();
  randomFood();
  // This line grabs the input from the textbox
});
$("#clearfood").on("click", function (event) {
  event.preventDefault();
  clearFood();
  // This line grabs the input from the textbox
});
