import { Link } from "react-router";
import { signUp } from "../services/projects-api/users.services";

export function SignUp() {
  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const resultado = await signUp({
      firstName: ev.currentTarget.firstName.value,
      lastName: ev.currentTarget.lastName.value,
      username: ev.currentTarget.username.value,
      password: ev.currentTarget.password.value,
    });

    alert(resultado);

    // TO-DO => reset do formulário
  }

  return (
    <div>
      <h1>SignUp</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
        </div>
        <div>
          <input type="text" name="lastName" placeholder="Last Name" required />
        </div>
        <div>
          <input type="text" name="username" placeholder="Username" required />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      <div>
        <span>
          Já possui conta? <Link to={"/"}>Acesse</Link>
        </span>
      </div>
    </div>
  );
}
