export interface ResponseUserRequestsAPI {
  message: string;
  user?: User;
}

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
