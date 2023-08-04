import axios from "axios";
/* import.meta.env. from .env.mercatorum;
 */ const baseURL = "https://maryfashion.altervista.org/api/";
const temporaryToken = "";
const bearerToken = "";
const api = axios.create({
  baseURL: baseURL,
  timeout: 10000000,
});
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
 
 
 const getApi = (data) => {
  return api.post("main.php", data ,{
    headers: {
      'Content-Type': 'multipart/form-data'
    },
   });
};

export default {
   baseURL,
  getApi,
};

