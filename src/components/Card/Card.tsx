import { useNavigate } from "react-router";
import { Project } from "../../services/projects-api/types";

interface CardProps {
  project: Project;
}

const status = {
  Done: "Concluído",
  InProgress: "Em desenvolvimento",
};

export function Card(props: CardProps) {
  const navigate = useNavigate();

  return (
    <div>
      <h3>{props.project.title}</h3>
      <p>{props.project.description}</p>
      <p>{status[props.project.status]}</p>
      <p>{props.project.tools.join(", ")}</p>
      <small>
        {new Date(props.project.createdAt).toLocaleDateString("pt-BR", {
          dateStyle: "full",
        })}
      </small>

      <div>
        <button onClick={() => navigate(`/project/${props.project.id}`)}>
          Editar
        </button>
        <button>Excluir</button>
      </div>

      <hr />
    </div>
  );
}
