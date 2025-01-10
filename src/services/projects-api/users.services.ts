import { AxiosError } from "axios";
import { SignInUser, SignUpUser, User } from "./types";
import { projectsApi } from "./http-config";

// Função de service capaz de integrar com a rota login de usuário na API
export async function signIn(user: SignInUser) {
  try {
    const response = await projectsApi.post("/signin", {
      username: user.username,
      password: user.password,
    });

    return {
      success: response.data.success,
      message: response.data.message,
      user: response.data.data as User,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        success: error.response?.data.success,
        message: error.response?.data.message,
      };
    }

    return {
      success: false,
      message: "Ocorreu um erro inesperado. Entre em contato com o suporte.",
    };
  }
}

// Função de service capaz de integrar com a rota cadastro de usuário na API
export async function signUp(user: SignUpUser) {
  try {
    const response = await projectsApi.post("/signup", user);

    return {
      success: response.data.success,
      message: response.data.message,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        success: error.response?.data.success,
        message: error.response?.data.message,
      };
    }

    return {
      success: false,
      message: "Ocorreu um erro inesperado. Entre em contato com o suporte.",
    };
  }
}
