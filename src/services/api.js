import axios from "axios";

//01001000/json/

const api = axios.create({
    baseURL: "viacep.com.br/ws/"
})

export default api;