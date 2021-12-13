import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const api_key = process.env.API_KEY;
const base_url = process.env.BASE_URL;

const getSearch = (id) => {
  axios
    .get(`${base_url}/complexSearch?query=${id}&number=100&apiKey=${api_key}`)
    .then((response) => {
      const data = response.data.results;
      let noResults = document.createElement("h5");
      noResults.innerHTML = "No results found, try searching another recipe.";
      const container = document.getElementById("recipes-list");

      if (data.length > 0) {
        //if there are results found then cards will render
        appendCards(data);
      } else {
        //if no results are found noResults message will appear
        container.appendChild(noResults);
      }
    })
    .catch((error) => console.error(error));
};

//event listener that will call getSearch function when
//search button is clicked, and will clear elements inside
//of parent element 'recipes list'

document.getElementById("search-btn").addEventListener("click", () => {
  let value = document.getElementById("search-input").value;
  let myNode = document.getElementById("recipes-list");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
  getSearch(value);
});

document.getElementById("search-input").addEventListener("keydown", (e) => {
  let value = document.getElementById("search-input").value;
  let myNode = document.getElementById("recipes-list");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

  if(e.key === "Enter") getSearch(value);
});


// IMAGE TAG & TITLE
const createCard = (title, img, id) => {
  let link = document.createElement("a");
  link.setAttribute("href", "/pages/details.html" + `?id=${id}`);
  link.setAttribute("class","search-card");

  let div = document.createElement("div");

  let recipeName = document.createElement("h6");
  recipeName.innerHTML = title;

  let image = document.createElement("img");
  image.setAttribute("src", img);

  link.appendChild(div);
  div.appendChild(image);
  div.appendChild(recipeName);
  return link;
};

const appendCards = (recipes) => {
  let container = document.getElementById("recipes-list");
  recipes.forEach((recipe) => {
    let card = createCard(recipe.title, recipe.image, recipe.id);
    container.appendChild(card);
  });
};
