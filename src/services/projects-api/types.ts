export interface User {
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

export interface SignUpUser {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export interface SignInUser {
  username: string;
  password: string;
}

export interface CreateProject {
  title: string;
  description: string;
  status: "Done" | "InProgress";
  tools: string[];
  authToken: string;
}

export interface GetProjectById {
  projectId: string;
  authToken: string;
}

export interface UpdateProject extends CreateProject {
  projectId: string;
}
