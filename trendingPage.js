import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const api_key = process.env.API_KEY;
const base_url = process.env.BASE_URL;

const getTrending = () => {
  axios
    .get(`${base_url}/random?number=10&apiKey=${api_key}`)
    .then((response) => {
      const data = response.data;
      console.log(data);
      appendCards(response)
      // export let data = createTitle(response.data.title)
      // createDetailedView(response.data);
    })
    .catch((error) => console.error(error));
  };

  getTrending();

// IMAGE TAG, TITLE & DESCRIPTION
const createCard = (title, desc, img) => {
  let container = document.getElementById("trending-recipes-container")

  let recipeName = document.createElement("h6")
  recipeName.textContent = title;

  let description = document.createElement("p")
  description.textContent = desc;

  let image = document.createElement("img")
  image.setAttribute("src", img)

  container.appendChild(recipeName)
  container.appendChild(description)
  container.appendChild(image)
}

const appendCards = (recipes) => {
  let container = document.getElementById("trending-recipes-container")
    recipes.forEach((recipe) => {
      let card = createCard(recipe.title, recipe.summary, recipe.image)
    });

}
//    const createTitle = (trendingRec) => {
//     let div = document.getElementById("trending-recipes-container");
// //     const h1 = document.createElement('h1');
//
// }
