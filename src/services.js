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
 
const getWorks = (data) => {
  return api.get("getWorks.php", {
    /*  headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    }, */
    params: data,
  });
}; 

export default {
 
  getWorks,
  baseURL,
};
