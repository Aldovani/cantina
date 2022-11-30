import axios from "axios";

const api = axios.create({ baseURL: "https://sandrapi.azurewebsites.net" });



export { api };
