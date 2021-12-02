import axios from "axios";
import dotenv from "dotenv";
import {testVariable} from '../js/test'
dotenv.config();

const api_key = process.env.API_KEY;
const base_url = process.env.BASE_URL;
let label;

const showNutritionLabel = () => {
  axios
    .get(`${base_url}/${testVariable}/nutritionLabel?apiKey=${api_key}`)
    .then((response) => {
        label = response.data;

        nutritionLabel();
    })
    .catch((error) => console.error(error));
};





const nutritionLabel = () => {
   
    const cont = document.getElementById("nutrition-label-info");

    const div = document.createElement("div");
    div.innerHTML = label;

    cont.appendChild(div)
  };
  
document.getElementById("nutrition-label-btn").addEventListener("click", showNutritionLabel)

