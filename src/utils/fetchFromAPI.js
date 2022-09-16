import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {    
    part: 'id,snippet',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '3e3e32feb2msh56dcbd50ad249c4p1ebac3jsnf6781a82fcd0',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async(url) => {
   const { data } =  await axios.get(`${BASE_URL}/${url}`, options);
   return data;
}