var food = [];
function displayFoodInfo() {
  var newFood = $("#food-input").val().trim().toUpperCase();
  console.log("newFood:", newFood);
  var queryURL =
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + newFood;
  console.log("queryURL:", queryURL);
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log("response:", response);
    var foodDiv = $("<div class='food'>");
    if (newFood) {
      var searchResults = $("<h2>").text("Search Results for: " + newFood);
      var mealName = response.meals[0].strMeal;
      var country = response.meals[0].strArea;
      var instructions = response.meals[0].strInstructions;
      var recipe = response.meals[0].strSource;
      var video = response.meals[0].strYoutube;
      var image = response.meals[0].strMealThumb;
      var ingredientList = [
        $("<p>").text(`Ingredients:  ${ingredientsCycle()}`),
      ];

      function ingredientsCycle() {
        let ingredients = "";
        for (let i = 1; i <= 15; i++) {
          if (response.meals[0][`strIngredient${i}`]) {
            ingredients = `${ingredients} ${
              response.meals[0][`strIngredient${i}`]
            },`;
          } else break;
        }
        return ingredients.slice(0, -1);
      }

       ingredientList.forEach((element) => {
        foodDiv.append(element);
      });
      




      var imagePic = $("<img>").attr("src", image);
      imagePic.addClass("foodPic");
      console.log("image:", image);
      var name = $("<h4>").text("Meal: " + mealName);
      var countryLine = $("<p>").text("Meal Origin: " + country);
      var instructionsLine = $("<p>").text("Instructions: " + instructions);
      var fullRecipeLine = $("<p>").text("For the full Recipe: ");
      var fullRecipeLink = $("<a>").attr("href", recipe).text("Click Here");
      fullRecipeLine.append(fullRecipeLink);
      var mealVideoLine = $("<p>").text("Meal Video: ");
      var mealVideoLink = $("<a>").attr("href", video).text("Recipe Video");
      mealVideoLine.append(mealVideoLink);
      var recipeLinkText = $("<p>").text();
      var link = $("<a>");
      link.attr("href", video);
      link.innerHTML = video; 
      mealVideoLine.append(link); 
      foodDiv.append(searchResults);
      foodDiv.append(name);
      foodDiv.append(countryLine);
      function ingredientsCycle() {
        let ingredients = "";
        for (let i = 1; i <= 15; i++) {
          if (response.meals[0][`strIngredient${i}`]) {
            ingredients = `${ingredients} ${
              response.meals[0][`strIngredient${i}`]
            },`;
          } else break;
        }
        return ingredients.slice(0, -1);
      }

       ingredientList.forEach((element) => {
        foodDiv.append(element);
      });
      foodDiv.append(instructionsLine);
      foodDiv.append(fullRecipeLine);
      foodDiv.append(mealVideoLine);
      foodDiv.append(recipeLinkText);
      foodDiv.append(imagePic);
      $("#food-view").empty();
      $("#food-view").append(foodDiv);
    } else null;
  });
}
function randomFood() {
  var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
  console.log("queryURL:", queryURL);
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
    var rIngredientList = [
      $("<p>").text(`Ingredients:  ${rIngredientsCycle()}`),
    ];

    





    var rImagePic = $("<img>").attr("src", rImage);
    rImagePic.addClass("foodPic");
    console.log("image:", rImage);
    var rName = $("<h4>").text("Meal: " + rMealName);
    console.log("rName:", rName);
    var rOriginLine = $("<p>").text("Meal Origin: " + rCountry);
    var rInstructionsLine = $("<p>").text("Meal Instructions: " + rInstructions);
    var rInstructionsLinkText = $("<p>").text("For the full recipe: ");
    var rInstructionsLink = $("<a>").attr("href", rRecipe).text("Click Here");
    
    rInstructionsLinkText.append(rInstructionsLink);
    var rMealVideoLine = $("<p>").text("Meal Video: ");
    var rMealVideoLink = $("<a>").attr("href", rVideo).text("Recipe Video");
    rMealVideoLine.append(rMealVideoLink);
    var randomFoodDiv = $("<div class='randomFood'>");
    randomFoodDiv.append(rName);
    randomFoodDiv.append(rOriginLine);
    function rIngredientsCycle() {
      let ingredients = "";
      for (let i = 1; i <= 15; i++) {
        if (response.meals[0][`strIngredient${i}`]) {
          ingredients = `${ingredients} ${
            response.meals[0][`strIngredient${i}`]
          },`;
        } else break;
      }
      return ingredients.slice(0, -1);
    }

     rIngredientList.forEach((element) => {
      randomFoodDiv.append(element);
    });
    randomFoodDiv.append(rInstructionsLine);
    randomFoodDiv.append(rInstructionsLinkText);
    randomFoodDiv.append(rMealVideoLine);
    randomFoodDiv.append(rImagePic);
    $("#food-view").empty();
    $("#food-view").append(randomFoodDiv);
  });
}
function clearFood() {
  $("#food-view").empty();
}
$("#add-food").on("click", function (event) {
  event.preventDefault();
  displayFoodInfo();
  $("#food-input").val("");
});
$("#random-food").on("click", function (event) {
  event.preventDefault();
  randomFood();
  
});

$("#clearfood").on("click", function (event) {
  event.preventDefault();
  clearFood();
});

