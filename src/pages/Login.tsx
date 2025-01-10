import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { signIn } from "../services/projects-api/users.services";
import { WrapperPage } from "../components/WrapperPage";
import { FormStyled } from "../components/Form";

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
    <WrapperPage>
      <div>
        <h1>Login</h1>

        <FormStyled onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" name="username" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit">Access</button>
        </FormStyled>

        <p>
          <small>
            Don't have an account? <Link to={"/signup"}>Register</Link>
          </small>
        </p>
      </div>
    </WrapperPage>
  );
}
