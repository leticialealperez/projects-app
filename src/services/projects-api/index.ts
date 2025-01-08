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

/*
{
    "firstName": "João",
    "lastName": "Silva",
    "username": "joaosilva",
    "password": "senha123"
}
*/

// /signin => Login do usuario
export async function signIn(
  user: SignInUser
): Promise<ResponseUserRequestsAPI> {
  try {
    const response = await axios.post(
      "https://api-projetos-growdev.onrender.com/signin",
      {
        username: user.username,
        password: user.password,
      }
    );

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
    const response = await axios.post(
      "https://api-projetos-growdev.onrender.com/signup",
      user
    );

    return response.data.message;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data.message;
    }

    return "Ocorreu um erro inesperado. Entre em contato com o suporte.";
  }
}

// Projects
