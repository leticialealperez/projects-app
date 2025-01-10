import { AxiosError } from "axios";
import { projectsApi } from "./http-config";
import { CreateProject, GetProjectById, Project, UpdateProject } from "./types";

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

export async function createProject(data: CreateProject) {
  try {
    const response = await projectsApi.post(
      "/projects",
      {
        title: data.title,
        description: data.description,
        status: data.status,
        tools: data.tools,
      },
      {
        headers: {
          Authorization: data.authToken,
        },
      }
    );

    return {
      success: response.data.success,
      message: response.data.message,
      project: response.data.data as Project,
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
      message: "Ocorreu um erro inesperado. Tente novamente!",
    };
  }
}

export async function getProjectById(data: GetProjectById) {
  try {
    const response = await projectsApi.get(`/projects/${data.projectId}`, {
      headers: { Authorization: data.authToken },
    });

    return {
      success: response.data.success,
      message: response.data.message,
      project: response.data.data as Project,
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
      message: "Ocorreu um erro inesperado. Tente novamente!",
    };
  }
}

export async function updateProject(data: UpdateProject) {
  try {
    const response = await projectsApi.put(
      `/projects/${data.projectId}`,
      {
        title: data.title,
        description: data.description,
        status: data.status,
        tools: data.tools,
      },
      {
        headers: {
          Authorization: data.authToken,
        },
      }
    );

    return {
      success: response.data.success,
      message: response.data.message,
      project: response.data.data as Project,
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
      message: "Ocorreu um erro inesperado. Tente novamente!",
    };
  }
}
