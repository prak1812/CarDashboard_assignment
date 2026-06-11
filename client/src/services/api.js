import axios from "axios";

const API = axios.create({
  baseURL: "https://cardashboard-assignment-backend.onrender.com",
});

export default API;