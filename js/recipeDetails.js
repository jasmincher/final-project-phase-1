import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const api_key = process.env.API_KEY;
const base_url = process.env.BASE_URL;

const getDetails = () => {
  axios
    .get(`${base_url}/680975/information?apiKey=${api_key}`)
    .then((response) => {
      const data = response;
      console.log(data);
      //  export let data = createTitle(response.data.title)
      createDetailedView(response.data);
    })
    .catch((error) => console.error(error));
};

getDetails();

// const createTitle = (recipeName) => {
//     let container = document.getElementById("details-page-container");
//     const h1 = document.createElement('h1');
//     h1.textContent = `Similar recipes to "${recipeName}"`;
//     container.appendChild(h1);
// }

const recipeDetails = (title, image, summary, instructions) => {
  const div = document.getElementById("title-and-image");
  const descContainer = document.getElementById("desc-container");
  const instrContainer = document.getElementById("instr-container");

  const recipeName = document.createElement("h3");
  recipeName.textContent = title;

  const recipeImg = document.createElement("img");
  recipeImg.setAttribute("src", image);

  const desc = document.createElement("p");
  desc.innerHTML = summary;

  const instr = document.createElement("p");
  instr.textContent = instructions;

  div.appendChild(recipeName);
  div.appendChild(recipeImg);
  descContainer.appendChild(desc);
  instrContainer.appendChild(instr);

  return div;
};

const createDetailedView = (recipes) => {
  let list = document.getElementById("details-page-container");
  let ingrList = document.getElementById("ingr-list");

  let items = recipes.extendedIngredients.forEach((ingredient) => {
    let li = document.createElement("li");
    li.textContent = ingredient.name;
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
