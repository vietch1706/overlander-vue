import axios from "axios";

axios.defaults.baseURL = "http://localhost/api/v1/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + window.localStorage.getItem("token");
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
