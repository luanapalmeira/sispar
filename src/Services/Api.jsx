import axios from "axios";  //Importa a biblioteca axios, que é usada para fazer requisições HTTP.

//Cria uma instância do axios, chamada "api".
const api = axios.create({
    baseURL: "https://sispar-back.onrender.com"  //Define a URL base para todas as requisições feitas com essa instância.
})

export default api;