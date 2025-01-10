import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { listAllProjects } from "../services/projects-api/projects.services";
import { Card } from "../components/Card/Card";
import { Project, User } from "../services/projects-api/types";

export function Projects() {
  const [user, setUser] = useState<User | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  // Garante que tenha um usuário logado ao acessar a página
  useEffect(() => {
    const userLogged = localStorage.getItem("userLogged");

    if (!userLogged) {
      navigate("/");
      return;
    }

    const userLoggedObj = JSON.parse(userLogged);

    setUser(userLoggedObj);
  }, [navigate]);

  // Busca os projetos do usuário logado
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
      {user && (
        <p>
          Olá, {user.firstName} {user.lastName}, seja bem-vindo!
        </p>
      )}

      <button onClick={() => navigate("/project/new")}>Cadastrar</button>

      {projects.length ? (
        projects.map((project) => <Card key={project.id} project={project} />)
      ) : (
        <p>Nenhum projeto cadastro ainda.</p>
      )}
    </div>
  );
}
