import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const api_key = process.env.API_KEY;
const base_url = process.env.BASE_URL;

const getSimilar = () => {
  axios
    .get(`${base_url}/715538/similar?apiKey=${api_key}`)
    .then((response) => {
      const data = response;
      console.log(data);
      createAllCards(response.data);
    })
    .catch((error) => console.error(error));
};

getSimilar();

const createTitle = (recipeName) => {
    const h1 = document.createElement('h1');
    h1.textContent = `Similar recipes to "${recipeName}"`;
    return h1;
}

const createCard = (name,serving,time) => {
    const div = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = name;

    const servings = document.createElement('p');
    servings.textContent = `Servings: ${serving}`;

    const readyTime = document.createElement('p');
    readyTime.textContent = `Ready in ${time} minutes`;

    // const recipeImg = document.createElement("img");
    // recipeImg.setAttribute("src",image);

    div.appendChild(title);
    div.appendChild(servings);
    div.appendChild(readyTime);
    // div.appendChild(recipeImg);
   

    return div;
    };


    const createAllCards = (recipes) =>{
        let list = document.getElementById("similar-recipes-container");

        recipes.forEach((recipe) =>{
            let card = createCard(recipe.title, recipe.servings, recipe.readyInMinutes);
            list.appendChild(card);
        })
    }