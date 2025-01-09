import { AxiosError } from "axios";
import { ResponseUserRequestsAPI, SignInUser, SignUpUser } from "./types";
import { projectsApi } from "./http-config";

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
