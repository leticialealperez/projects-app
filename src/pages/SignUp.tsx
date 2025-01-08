import { signUp } from "../services/projects-api";

export function SignUp() {
  async function cadastrar() {
    const resultado = await signUp({
      firstName: "Maria",
      lastName: "Silva",
      username: "mariaSilva",
      password: "senha123",
    });

    alert(resultado);
  }

  return (
    <div>
      <h1>SignUp</h1>

      <button onClick={cadastrar}>Cadastrar</button>
    </div>
  );
}
