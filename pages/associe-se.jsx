import Container from "@components/container";
import Layout from "@components/layout";

export default function Associese() {
  function sendEmail() {
    const form = document.getElementById("form");

    form.addEventListener("submit", e => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const message = document.getElementById("message").value;

      fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          telefone: telefone,
          message: message
        })
      })
        .then(response => {
          console.log(response);
          alert("Email enviado com sucesso");
        })
        .catch(erro => {
          alert("Tente novamente mais tarde");
        });
    });
  }
  return (
    <Layout>
      <Container>
        <form id="form" className="my-10">
          <input
            id="name"
            type="text"
            placeholder="Nome"
            autoComplete="false"
            className=""
          />
          <input
            id="email"
            type="text"
            placeholder="Email"
            autoComplete="false"
            className=""
          />
          <input
            id="telefone"
            type="text"
            placeholder="Telefone"
            autoComplete="false"
            className=""
          />
           <input
            id="message"
            type="text"
            placeholder="Message2"
            autoComplete="false"
            className=""
          />
          <button type="submit" onClick={sendEmail}>
            Enviar
          </button>
        </form>
      </Container>
    </Layout>
  );
}
