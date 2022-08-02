import axios from "axios";

const setupAxios = () => {
  // For the sake of simplicity, we don't need to use env variable
  axios.defaults.baseURL = "http://localhost:3001";
};

export default setupAxios;
