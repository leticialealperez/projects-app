import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { signIn } from "../services/projects-api/users.services";

export function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const userLogged = localStorage.getItem("userLogged");

    if (userLogged) {
      navigate("/home");
    }
  }, [navigate]);

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const resultado = await signIn({
      username: ev.currentTarget.username.value,
      password: ev.currentTarget.password.value,
    });

    if (resultado.user) {
      localStorage.setItem("userLogged", JSON.stringify(resultado.user));
      navigate("/home");
    }

    alert(resultado.message);
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Username" name="username" />
        </div>
        <div>
          <input type="password" placeholder="Password" name="password" />
        </div>
        <button type="submit">Entrar</button>
      </form>

      <div>
        <span>
          Ainda não possui conta? <Link to={"/signup"}>Cadastre-se</Link>
        </span>
      </div>
    </div>
  );
}
