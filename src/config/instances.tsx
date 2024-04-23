import axios from "axios";
import getters from "./getters";

const axiosInstance = axios.create({
  baseURL: getters.getBaseUrl(),
  headers: {
    // Add any headers you would want to include by default to every data call
  },
});

export default axiosInstance;
