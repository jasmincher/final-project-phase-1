import axios from "axios";
import dotenv from "dotenv";
import recipeImg from '../images/food-placeholder.jpeg'
dotenv.config();

const api_key = process.env.API_KEY;
const base_url = process.env.BASE_URL;


const getTrending = () => {
  axios
    .get(`${base_url}/random?number=10&apiKey=${api_key}`)
    .then((response) => {
      const data = response.data.recipes;
      appendCards(data);
    })
    .catch((error) => console.error(error));
};

getTrending();

// IMAGE TAG, TITLE & DESCRIPTION
const createCard = (title, desc, img, id) => {
  let container = document.getElementById("trending-recipes-container");

  let link = document.createElement("a");

  link.setAttribute("href", "details.html" + `?id=${id}`);
  link.setAttribute("class", "trending-recipe-card");

  let div = document.createElement("div");

  let recipeName = document.createElement("h6");
  recipeName.innerHTML = title;

  let description = document.createElement("p");
  description.innerHTML = desc;

  let image = document.createElement("img");
  image.setAttribute("src", img);

  link.appendChild(div);
  div.appendChild(image);
  div.appendChild(recipeName);
  // div.appendChild(description);
  return link;
};

//this will create a card for the # of elements there are in the array
//each card will have its corresponding title, summary, image and id
const appendCards = (recipes) => {
  let container = document.getElementById("trendings-list");
  recipes.forEach((recipe) => {
    let fallback = recipe.image ? recipe.image : recipeImg;
    let card = createCard(
      recipe.title,
      recipe.summary,
      fallback,
      recipe.id
    );
    container.appendChild(card);
  });
};
