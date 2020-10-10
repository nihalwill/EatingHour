// Initial array of drinks
let drinks = [];

function displayDrinkInfo() {
  let newDrink = $("#drinks-input").val().trim();
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
    console.log(instructions);

    let pOne = $("<p>").text("Glass Type: " + typeOfGlass);
    let pTwo = $("<p>").text("Instructions: " + instructions);

    drinkDiv.append(pOne);
    drinkDiv.append(pTwo);
    drinkDiv.append(imagePic);
    $("#drinks-view").prepend(drinkDiv);
  });
}
function randomDrink() {
  let queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  console.log("queryURL:", queryURL);

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log("response:", response);
    let typeOfGlass = response.drinks[0].strGlass;
    let instructions = response.drinks[0].strInstructions;
    let image = response.drinks[0].strDrinkThumb;
    let imagePic = $("<img>").attr("src", image);
    imagePic.addClass("drinkPic");
    let pOne = $("<p>").text("Glass Type: " + typeOfGlass);
    let pTwo = $("<p>").text("Instructions: " + instructions);

    let randomdrinkDiv = $("<div class='random-drinks'>");
    randomdrinkDiv.append(pOne);
    randomdrinkDiv.append(pTwo);
    randomdrinkDiv.append(imagePic);
    $("#drinks-view").prepend(randomdrinkDiv);
  });
}
function cleardrink() {
  $("#drinks-view").empty();
}

$("#add-drinks").on("click", function (event) {
  console.log("test");
  event.preventDefault();
  displayDrinkInfo();
  $("#drink-input").val("");
});
$("#random-drinks").on("click", function (event) {
  event.preventDefault();
  randomDrink();
});
$("#clear-drinks").on("click", function (event) {
  event.preventDefault();
  cleardrink();
});
