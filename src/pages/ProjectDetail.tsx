import { Link, useNavigate, useParams } from "react-router";
import { FormStyled } from "../components/Form";
import { ProjectDetailStyled } from "../components/ProjectDetail";
import {
  createProject,
  getProjectById,
  updateProject,
} from "../services/projects-api/projects.services";
import { useEffect, useState } from "react";
import { Project, User } from "../services/projects-api/types";

export function ProjectDetail() {
  const [user, setUser] = useState<User | null>(null);
  const [project, setProject] = useState<Project>({
    id: "",
    title: "",
    description: "",
    status: "Done",
    tools: [],
    createdAt: "",
    updatedAt: "",
    userId: "",
  });

  const navigate = useNavigate();
  const params = useParams();

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

  // Verifica se recebeu um identificador de projeto válido por parametro na rota
  // Busca os dados do projeto na API para preencher os campos
  useEffect(() => {
    if (user && params.projectId !== "new") {
      getProjectById({
        authToken: user?.authToken as string,
        projectId: params.projectId as string,
      }).then((result) => {
        if (result.project) {
          setProject(result.project);
        } else {
          alert(result.message);
          navigate("/home");
        }
      });
    }
  }, [navigate, params, user]);

  // Função genérica utilizada no onChange de todos os inputs
  // ev.currentTarget.name será o valor do atributo name do campo que disparou o evento. P. ex. "title"
  // Para que a lógica funcione, todos os inputs tiveram seus atributos "name" definidos
  // com os mesmos nomes de propriedades do objeto "project" modificando assim, unicamente
  // a propriedade respectiva no objeto do estado que controla o valor do input que mudou
  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setProject({
      ...project,
      [ev.target.name]:
        ev.target.name !== "tools"
          ? ev.target.value
          : ev.target.value.split(",").map((tool) => tool.trim()),
    });
  }

  // Lógica disparada no botão "Salvar"
  // Verifica se deve cadastrar ou atualizar o projeto de acordo com o parametro da rota
  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const payload = {
      title: project.title,
      description: project.description,
      tools: project.tools,
      status: project.status,
      authToken: user!.authToken,
    };

    const result =
      params.projectId === "new"
        ? await createProject(payload)
        : await updateProject({ ...payload, projectId: params.projectId! });

    alert(result.message);

    if (result.success) {
      navigate("/home");
    }
  }

  return (
    <ProjectDetailStyled>
      <Link to="/home">Voltar</Link>

      <h1>{params.projectId === "new" ? "Novo Projeto" : "Editar Projeto"} </h1>

      <FormStyled onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Titulo"
          value={project.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Descrição"
          value={project.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="tools"
          placeholder="Ferramentas. Ex: HTML, CSS, JS"
          value={project.tools.join(", ")}
          onChange={handleChange}
        />

        <div>
          <input
            type="radio"
            name="status"
            value="Done"
            id="Done"
            checked={project.status === "Done"}
            onChange={handleChange}
          />
          <label htmlFor="Done">Concluído</label>
        </div>

        <div>
          <input
            type="radio"
            name="status"
            value="InProgress"
            id="InProgress"
            checked={project.status === "InProgress"}
            onChange={handleChange}
          />
          <label htmlFor="InProgress">Em desenvolvimento</label>
        </div>

        <button type="submit">Salvar</button>
      </FormStyled>
    </ProjectDetailStyled>
  );
}
