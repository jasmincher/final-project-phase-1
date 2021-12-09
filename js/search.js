import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const api_key = process.env.API_KEY;
const base_url = process.env.BASE_URL;

const getSearch = () => {
  axios
    .get(`${base_url}/complexSearch?query=pizza&apiKey=${api_key}`)
    .then((response) => {
      const data = response.data.recipes;
      const loading = document.createElement("h5")
      loading.innerHTML = "Search any recipe here and find out how to make it! "
      const container = document.getElementById("search-recipes-container")

      if (data) {
       appendCards(data)
      } else {
       container.appendChild(loading)
      }
    })
    .catch((error) => console.error(error));
  };

  getSearch();

  // IMAGE TAG, TITLE & DESCRIPTION
  const createCard = (title, desc, img) => {
    let container = document.getElementById("search-recipes-container")
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
    let container = document.getElementById("search-recipes-container")
      recipes.forEach((recipe) => {
        let card = createCard(recipe.title, recipe.summary, recipe.image)
        container.appendChild(card)
      })
  }
