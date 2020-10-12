import config from "./config.js";

$(document).ready(function () {
  const apiURLs = config;

  //event listener for buttons
  $("#drink-form").on("click", (event) => {
    if (event.target.id === "add-drinks") {
      event.preventDefault();
      let newDrink = $("#drinks-input").val().trim();
      let response = getDrinkInfo(apiURLs.newDrink, newDrink);
      if (newDrink) {
        displayDrinkInfo(response);
      } else null;
    } else if (event.target.id === "random-drinks") {
      event.preventDefault();
      let response = getDrinkInfo(apiURLs.randomDrink, "");
      displayDrinkInfo(response);
    } else if (event.target.id === "clear-drinks") {
      event.preventDefault();
      $("#drinks-view").empty();
    }
  });

  //server calls based on user input
  async function getDrinkInfo(apiURL, userInput) {
    let queryURL = apiURL + userInput;
    let result = await $.ajax({ url: queryURL, method: "GET" });
    return result;
  }

  //renders JSON response on page
  function displayDrinkInfo(response) {
    Promise.resolve(response).then((response) => {
      const drinkDiv = $("<div class='drink'>");

      let typeOfGlass = response.drinks[0].strGlass;
      let instructions = response.drinks[0].strInstructions;
      let image = response.drinks[0].strDrinkThumb;
      let imageElement = $("<img>").attr("src", image);
      imageElement.addClass("drinkPic");

      let glassElement = $("<p>").text(`Glass Type:  ${typeOfGlass}`);
      let instructionsElement = $("<p>").text(`Instructions:  ${instructions}`);
      let ingredientList = [
        $("<p>").text(`Ingredients:  ${ingredientsCycle()}`),
      ];

      let elementValues = [
        [glassElement],
        ingredientList,
        [instructionsElement],
        [imageElement],
      ];

      function ingredientsCycle() {
        let ingredients = "";
        for (let i = 1; i <= 15; i++) {
          if (response.drinks[0][`strIngredient${i}`]) {
            ingredients = `${ingredients} ${
              response.drinks[0][`strIngredient${i}`]
            },`;
          } else break;
        }
        return ingredients.slice(0, -1);
      }

      elementValues.forEach((element) => {
        drinkDiv.append(element);
      });
      $("#drinks-view").prepend(drinkDiv);
    });
  }
});
