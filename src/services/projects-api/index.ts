// Users
import axios, { AxiosError } from "axios";

interface ResponseUserRequestsAPI {
  message: string;
  user?: User;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  authToken: string;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  status: "Done" | "InProgress";
  userId: string;
  createdAt: string;
  updatedAt: string;
}

interface SignUpUser {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

interface SignInUser {
  username: string;
  password: string;
}

const projectsApi = axios.create({
  baseURL: "https://api-projetos-growdev.onrender.com",
});

// /signin => Login do usuario
export async function signIn(
  user: SignInUser
): Promise<ResponseUserRequestsAPI> {
  try {
    const response = await projectsApi.post("/signin", {
      username: user.username,
      password: user.password,
    });

    return {
      message: response.data.message,
      user: response.data.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        message: error.response?.data.message,
      };
    }

    return {
      message: "Ocorreu um erro inesperado. Entre em contato com o suporte.",
    };
  }
}

// /signup => Cadastro do usuario
export async function signUp(user: SignUpUser): Promise<string> {
  try {
    const response = await projectsApi.post("/signup", user);

    return response.data.message;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data.message;
    }

    return "Ocorreu um erro inesperado. Entre em contato com o suporte.";
  }
}

// Projects
// /projects => listar todos os projetos
export async function listAllProjects(authToken: string): Promise<Project[]> {
  try {
    const response = await projectsApi.get("/projects", {
      headers: { Authorization: authToken },
    });

    return response.data.data;
  } catch (error: unknown) {
    console.log(error);
    return [];
  }
}
