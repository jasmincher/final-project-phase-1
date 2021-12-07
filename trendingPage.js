import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const api_key = process.env.API_KEY;
const base_url = process.env.BASE_URL;

const getTrending = () => {
  axios
    .get(`${base_url}/random?number=10&apiKey=${api_key}`)
    .then((response) => {
      const data = response.data.recipes;
      appendCards(data)
    })
    .catch((error) => console.error(error));
  };

  getTrending();

// IMAGE TAG, TITLE & DESCRIPTION
const createCard = (title, desc, img) => {
  let container = document.getElementById("trending-recipes-container")
  let div = document.createElement("div")

  let recipeName = document.createElement("h6")
  recipeName.innerHTML = title;

  let description = document.createElement("p")
  description.innerHTML = desc;

  let image = document.createElement("img")
  image.setAttribute("src", img)

  div.appendChild(recipeName)
  div.appendChild(description)
  div.appendChild(image)
  return div
}

const appendCards = (recipes) => {
  let container = document.getElementById("trending-recipes-container")
    recipes.forEach((recipe) => {
      let card = createCard(recipe.title, recipe.summary, recipe.image)
      container.appendChild(card)
    })
}
