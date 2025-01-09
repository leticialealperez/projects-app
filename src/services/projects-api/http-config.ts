import axios from "axios";

export const projectsApi = axios.create({
  baseURL: "https://api-projetos-growdev.onrender.com",
});
