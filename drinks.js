// Initial array of drinks
let drinks = [];

function displayDrinkInfo() {
  let newDrink = $("#drink-input").val().trim();
  let queryURL =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + newDrink;
  console.log("queryURL:", queryURL);

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log("response:", response);

    const drinkDiv = $("<div class='drink'>");

    let typeOfGlass = response.drinks[0].strGlass;
    let instructions = response.drinks[0].strInstructions;
    let image = response.drinks[0].strDrinkThumb;
    let imagePic = $("<img>").attr("src", image);
    imagePic.addClass("drinkPic");
    console.log("image:", image);

    let pOne = $("<p>").text("Glass Type: " + typeOfGlass);
    let pTwo = $("<p>").text("Instructions: " + instructions);
    let pThree = $("<p>").text();

    drinkDiv.append(pOne);
    drinkDiv.append(pTwo);
    drinkDiv.append(pThree);
    drinkDiv.append(imagePic);
    $("#drink-view").prepend(drinkDiv);
  });
}
function randomdrink() {
  let queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  console.log("queryURL:", queryURL);

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log("response:", response);
    let category = response.drinks[0].strCategory;
    let rpOne = $("<p>").text("Meal Category: " + category);

    let randomdrinkDiv = $("<div class='randomdrink'>");
    randomdrinkDiv.append(rpOne);
    $("#drink-view").prepend(randomdrinkDiv);
  });
}
function cleardrink() {
  $("#drink-view").empty();
}

$("#add-drink").on("click", function (event) {
  event.preventDefault();
  displaydrinkInfo();
  $("#drink-input").val("");
});
$("#random-drink").on("click", function (event) {
  event.preventDefault();
  randomdrink();
});
$("#cleardrink").on("click", function (event) {
  event.preventDefault();
  cleardrink();
});
