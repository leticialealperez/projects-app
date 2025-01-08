import { signIn } from "../services/projects-api";
import { useNavigate } from "react-router";

export function Login() {
  const navigate = useNavigate();

  async function login(ev: React.FormEvent<HTMLFormElement>) {
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

      <form onSubmit={login}>
        <div>
          <input type="text" placeholder="Username" name="username" />
        </div>
        <div>
          <input type="password" placeholder="Password" name="password" />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
