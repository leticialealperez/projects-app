import axios from "axios";

export const projectsApi = axios.create({
  baseURL: import.meta.env.VITE_PROJECTS_API_URL,
});
