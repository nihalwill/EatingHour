// Initial array of food
var food = [];
// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayFoodInfo() {

  var newFood = $("#food-input").val().trim().toUpperCase();
  
  console.log('newFood:', newFood)
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
    var searchResults = $("<h2>").text("Search Results for: " + newFood);
    var mealName = response.meals[0].strMeal;
    var country = response.meals[0].strArea;
    var instructions = response.meals[0].strInstructions;
    var recipe = response.meals[0].strSource;
    var video = response.meals[0].strYoutube;
    var image = response.meals[0].strMealThumb;
    
    var imagePic = $("<img>").attr("src", image);
    imagePic.addClass("foodPic");
    console.log("image:", image);

   
   
    // Creating an element to have the rating displayed
    var name =  $("<h4>").text("Meal: " + mealName);
    var pOne = $("<p>").text("Meal Origin: " + country);
    var pOneHalf = $("<p>").text("Instructions: " + instructions);
    var pOneThree = $("<p>").text("For the full Recipe: " );
    var aTagOne = $("<a>").attr("href", recipe).text("Click Here");
    pOneThree.append(aTagOne);
    var pTwo = $("<p>").text("Meal Video: ");
    var aTagTwo = $("<a>").attr("href", video).text("Recipe Video");
    pTwo.append(aTagTwo);
    var pThree = $("<p>").text();
    var link = $("<a>");
    link.attr("href", video); //set href
    link.innerHTML = video; //set text to be seen
    pTwo.append(link); //add to body
    // Displaying the rating
    foodDiv.append(searchResults);
    foodDiv.append(name);
    foodDiv.append(pOne);
    foodDiv.append(pOneHalf);
    foodDiv.append(pOneThree);
    foodDiv.append(pTwo);
    foodDiv.append(pThree);
    foodDiv.append(imagePic);
    $("#food-view").empty();

    $("#food-view").append(foodDiv);
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
    var rMealName = response.meals[0].strMeal;
    
    var rCountry = response.meals[0].strArea;
    var rInstructions = response.meals[0].strInstructions;
    var rRecipe = response.meals[0].strSource;
    var rVideo = response.meals[0].strYoutube;
    var rImage = response.meals[0].strMealThumb;

    var rImagePic = $("<img>").attr("src", rImage);
    rImagePic.addClass("foodPic");
    console.log("image:", rImage);
    var rName =  $("<h4>").text("Meal: " + rMealName);
    console.log('rName:', rName)
    var rrpOne = $("<p>").text("Meal Origin: " + rCountry);
    var rrpTwo = $("<p>").text("Meal Instructions: " + rInstructions);
    var rrpThree = $("<p>").text("For the full recipe: ");
    var aTagThree = $("<a>").attr("href", rRecipe).text("Click Here");
    rrpThree.append(aTagThree);
    var rrpFour = $("<p>").text("Meal Video: ");
    var aTagFour = $("<a>").attr("href", rVideo).text("Recipe Video");
    rrpFour.append(aTagFour);




    
    // Creating a div to hold the movie
    var randomFoodDiv = $("<div class='randomFood'>");
    randomFoodDiv.append(rName);
    randomFoodDiv.append(rrpOne);
    randomFoodDiv.append(rrpTwo);
    randomFoodDiv.append(rrpThree);
    randomFoodDiv.append(rrpFour);
    randomFoodDiv.append(rImagePic);
    $("#food-view").empty();
    $("#food-view").append(randomFoodDiv);
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
