import { projectsApi } from "./http-config";
import { Project } from "./types";

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
