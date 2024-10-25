import axios from "axios";
import router from "../router/index.js";
import { Form, Field } from "vee-validate";
import * as yup from "yup";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // So'rov yuborishdan oldin ko'rsatiladigan harakatlar
    return config;
  },
  function (error) {
    console.log("Request Error");
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // So'rov muvaffaqiyatli amalga oshganda
    return response;
  },
  function (error) {
    console.log("Response Error");
    if (error.response.status === 404) {
      console.log("Not Found");
      router.push({ name: "error" });
    }
    return Promise.reject(error);
  }
);

// Axios instance yaratish
const instance = axios.create({
  baseURL: "http://localhost:3000", // Serverning manzili
});

export default {
  axios,
  instance
};
