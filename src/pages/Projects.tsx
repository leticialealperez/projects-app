import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { listAllProjects } from "../services/projects-api/projects.services";
import { Card } from "../components/Card/Card";
import { Project } from "../services/projects-api/types";

interface UserLogged {
  firstName: string;
  lastName: string;
  authToken: string;
}

export function Projects() {
  const [user, setUser] = useState<UserLogged | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userLogged = localStorage.getItem("userLogged");

    if (!userLogged) {
      navigate("/");
      return;
    }

    const userLoggedObj = JSON.parse(userLogged);

    setUser({
      firstName: userLoggedObj.firstName,
      lastName: userLoggedObj.lastName,
      authToken: userLoggedObj.authToken,
    });
  }, [navigate]);

  useEffect(() => {
    if (user) {
      listAllProjects(user.authToken).then((resultado) => {
        setProjects(resultado);
      });
    }
  }, [user]);

  return (
    <div>
      <h1>Projects</h1>
      {user ? (
        <p>
          Olá, {user.firstName} {user.lastName}, seja bem-vindo!
        </p>
      ) : null}

      {projects.length ? (
        projects.map((project) => <Card key={project.id} project={project} />)
      ) : (
        <p>Nenhum projeto cadastro ainda.</p>
      )}
    </div>
  );
}
