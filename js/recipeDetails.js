import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const api_key = process.env.API_KEY;
const base_url = process.env.BASE_URL;

let id = window.location.href.slice(-6)
console.log(id)
// let id = window.location.href.split('=')[1];


const getDetails = async () => {
  await axios
    .get(`${base_url}/${id}/information?apiKey=${api_key}`)
    .then((response) => {
      createDetailedView(response.data);

    })
    .catch((error) => console.error(error));
};

getDetails()


const recipeDetails = (title, image, summary,ingredients, instructions) => {
  const div = document.getElementById("title-and-image");
  const container = document.getElementById("details-page-container")
  const descContainer = document.getElementById("desc-container");
  const instrContainer = document.getElementById("instr-container");

  const recipeName = document.createElement("h3");
  recipeName.textContent = title;
  
  const recipeImg = document.createElement("img");
  recipeImg.setAttribute("src", image);


  const desc = document.createElement("p");
  desc.innerHTML = summary;
  
  const instr = document.createElement("p");
  instr.innerHTML = instructions;


  div.appendChild(recipeName);
  div.appendChild(recipeImg);
  descContainer.appendChild(desc);
  instrContainer.appendChild(instr);

  return container;

};

const createDetailedView = (recipes) => {
  let list = document.getElementById("details-page-container");
  let ingrList = document.getElementById("ingr-list");

  let items = recipes.extendedIngredients.forEach((ingredient) => {
    let li = document.createElement("li");
    li.textContent = ingredient.originalString;
    ingrList.appendChild(li);
  });


  let card = recipeDetails(
    recipes.title,
    recipes.image,
    recipes.summary,
    items,
    recipes.instructions
  );

  list.appendChild(card);

};
