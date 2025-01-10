import { Link } from "react-router";
import { signUp } from "../services/projects-api/users.services";
import { WrapperPage } from "../components/WrapperPage";
import { FormStyled } from "../components/Form";

export function SignUp() {
  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const form = ev.currentTarget;

    const resultado = await signUp({
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      username: form.username.value,
      password: form.password.value,
    });

    alert(resultado);

    form.reset();
  }

  return (
    <WrapperPage>
      <div>
        <h1>Sign Up</h1>

        <FormStyled onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <input type="text" name="lastName" placeholder="Last Name" required />
          <input type="text" name="username" placeholder="Username" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <button type="submit">Register</button>
        </FormStyled>

        <p>
          <small>
            Already have an account? <Link to={"/"}>Login</Link>
          </small>
        </p>
      </div>
    </WrapperPage>
  );
}
