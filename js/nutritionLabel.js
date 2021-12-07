import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const api_key = process.env.API_KEY;
const base_url = process.env.BASE_URL;

const showNutritionLabel = () => {

  clearLabel();
  axios
    .get(`${base_url}/715538/nutritionLabel.png?apiKey=${api_key}`, { 
      responseType: "blob", //we have to add headers of responseType since we get characters returned instead of a url
    })
    .then((response) => {
      let imgURL = URL.createObjectURL(response.data); //here we create our url for our blob-file
      nutritionLabel(imgURL);
    })
    .catch((error) => console.error(error));
};

//this will avoid the nutrition label from being duplicated
const clearLabel = () => {
  const label = document.getElementById("nutrition-label-info");

  while (label.firstChild) {
    label.firstChild.remove();
  }
};


const nutritionLabel = (src) => {
  const cont = document.getElementById("nutrition-label-info");

  const nutritionLabelImg = document.createElement("img");
  nutritionLabelImg.setAttribute("src", src);

  cont.appendChild(nutritionLabelImg);
};

document
  .getElementById("nutrition-label-btn")
  .addEventListener("click", showNutritionLabel);
