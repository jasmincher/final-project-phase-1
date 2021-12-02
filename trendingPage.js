import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const api_key = process.env.API_KEY;
const base-url = process.env.BASE_URL;

const getDetails = () => {
  axios
    .get(`${BASE_URL}/random?number=4&apiKey=${API_KEY}`)
    .then((response) => {
      const data = response;
      console.log(data);
      // export let data = createTitle(response.data.title)
      createDetailedView(response.data);
    })
    .catch((error) => console.error(error));
  };

  getDetails();

  // const createTitle = (trendingRec) => {
//     let container = document.getElementById("details-page-container");
//     const h1 = document.createElement('h1');
//
// }
