import Container from "@components/container";
import Layout from "@components/layout";
import { RadioGroup } from "@headlessui/react";

export default function Associese() {
  function sendEmail() {
    const form = document.getElementById("form");

    form.addEventListener("submit", e => {
      e.preventDefault();

      const razaosocial =
        document.getElementById("razaosocial").value;
      const nome_estabelecimento = document.getElementById(
        "nome_estabelecimento"
      ).value;
      const ramo_atividade =
        document.getElementById("ramo_atividade").value;
      const endereco1 = document.getElementById("endereco1").value;
      const cidade1 = document.getElementById("cidade1").value;
      const estado1 = document.getElementById("estado1").value;
      const telefone = document.getElementById("telefone").value;
      const email1 = document.getElementById("email1").value;
      const data_fundacao =
        document.getElementById("data_fundacao").value;
      const reg = document.getElementById("reg").value;
      const iscr = document.getElementById("iscr").value;
      const cnpj = document.getElementById("cnpj").value;
      const contrato = document.getElementById("contrato").value;
      const capital = document.getElementById("capital").value;
      const nome = document.getElementById("nome").value;
      const funcao = document.getElementById("funcao").value;
      const filiacao = document.getElementById("filiacao").value;
      const email2 = document.getElementById("email2").value;
      const data_nascimento =
        document.getElementById("data_nascimento").value;
      const nacionalidade =
        document.getElementById("nacionalidade").value;
      const naturalidade =
        document.getElementById("naturalidade").value;
      const estado_civil =
        document.getElementById("estado_civil").value;
      const whats = document.getElementById("whats").value;
      const residencia = document.getElementById("residencia").value;
      const cidade2 = document.getElementById("cidade2").value;
      const uf = document.getElementById("uf").value;
      const instagram = document.getElementById("instagram").value;
      const rg = document.getElementById("rg").value;
      const cpf = document.getElementById("cpf").value;
      const site = document.getElementById("site").value;

      fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          razaosocial: razaosocial,
          nome_estabelecimento: nome_estabelecimento,
          ramo_atividade: ramo_atividade,
          endereco1: endereco1,
          cidade1: cidade1,
          estado1: estado1,
          telefone: telefone,
          email1: email1,
          data_fundacao: data_fundacao,
          reg: reg,
          iscr: iscr,
          cnpj: cnpj,
          contrato: contrato,
          capital: capital,
          nome: nome,
          funcao: funcao,
          filiacao: filiacao,
          email2: email2,
          data_nascimento: data_nascimento,
          nacionalidade: nacionalidade,
          naturalidade: naturalidade,
          estado_civil: estado_civil,
          whats: whats,
          residencia: residencia,
          cidade2: cidade2,
          uf: uf,
          instagram: instagram,
          rg: rg,
          cpf: cpf,
          site: site
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
        <div className="w-full mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
          <h1 className="text-2xl text-center font-medium">
            NOVO ASSOCIADO
          </h1>
          <form id="form" className="my-10">
            <div className="flex flex-col space-y-5">
              <label>
                <p className="font-medium text-slate-700 pb-2">
                  RAZÃO SOCIAL
                </p>
                <input
                  id="razaosocial"
                  type="text"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder=""
                />
              </label>
              <label>
                <p className="font-medium text-slate-700 pb-2">
                  NOME DO ESTABELECIMENTO
                </p>
                <input
                  id="nome_estabelecimento"
                  type="text"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder=""
                />
              </label>
              <label>
                <p className="font-medium text-slate-700 pb-2">
                  RAMO DE ATIVIDADE
                </p>
                <input
                  id="ramo_atividade"
                  type="text"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder=""
                />
              </label>
              <label>
                <p className="font-medium text-slate-700 pb-2">
                  ENDEREÇO
                </p>
                <input
                  id="endereco1"
                  type="text"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder=""
                />
              </label>
              <div className="md:flex md:space-x-4">
                <div className="md:w-1/2">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      CIDADE
                    </p>
                    <input
                      id="cidade1"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
                <div className="md:w-1/2 pt-4 md:pt-0">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      ESTADO
                    </p>
                    <input
                      id="estado1"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
              </div>
              <div className="md:flex md:space-x-4">
                <div className="md:w-1/2">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      TELEFONE
                    </p>
                    <input
                      id="telefone"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
                <div className="md:w-1/2 pt-4 md:pt-0">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      EMAIL
                    </p>
                    <input
                      id="email1"
                      type="email"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
              </div>
              <div className="md:flex md:space-x-4">
                <div className="md:w-1/2">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      DATA DE FUNDAÇÃO
                    </p>
                    <input
                      id="data_fundacao"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
                <div className="md:w-1/2 pt-2 md:pt-0">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      REG. JUNTA COMERCIAL
                    </p>
                    <input
                      id="reg"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
              </div>
              <div className="md:flex md:space-x-4">
                <div className="md:w-1/2">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      ISCR. ESTADUAL
                    </p>
                    <input
                      id="iscr"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
                <div className="md:w-1/2 pt-2 md:pt-0">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      CNPJ MF:
                    </p>
                    <input
                      id="cnpj"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
              </div>
              <div className="md:flex md:space-x-4">
                <div className="md:w-1/2">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      CONTRATO SOCIAL Nº
                    </p>
                    <input
                      id="contrato"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
                <div className="md:w-1/2 pt-2 md:pt-0">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      CAPITAL REGISTRADO
                    </p>
                    <input
                      id="capital"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
              </div>
              <h1 className="text-2xl text-center font-medium">
                DADOS PESSOAIS DO REPRESENTANTE LEGAL
              </h1>
              <label>
                <p className="font-medium text-slate-700 pb-2">
                  NOME
                </p>
                <input
                  id="nome"
                  type="text"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder=""
                />
              </label>
              <label>
                <p className="font-medium text-slate-700 pb-2">
                  FUNÇÃO DA EMPRESA
                </p>
                <input
                  id="funcao"
                  type="text"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder=""
                />
              </label>
              <label>
                <p className="font-medium text-slate-700 pb-2">
                  FILIAÇÃO
                </p>
                <input
                  id="filiacao"
                  type="text"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder=""
                />
              </label>
              <div className="md:flex md:space-x-4">
                <div className="md:w-1/2">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      EMAIL
                    </p>
                    <input
                      id="email2"
                      type="email"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
                <div className="md:w-1/2 pt-2 md:pt-0">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      DATA DE NASCIMENTO
                    </p>
                    <input
                      id="data_nascimento"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
              </div>
              <div className="md:flex md:space-x-4">
                <div className="md:w-1/2">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      NACIONALIDADE
                    </p>
                    <input
                      id="nacionalidade"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
                <div className="md:w-1/2">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      NATURALIDADE
                    </p>
                    <input
                      id="naturalidade"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
              </div>
              <div className="md:flex md:space-x-4">
                <div className="md:w-1/2">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      ESTADO CIVIL
                    </p>
                    <input
                      id="estado_civil"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
                <div className="md:w-1/2">
                  <label>
                    <p className="font-medium text-slate-700 pt-2 md:pt-0">
                      WHATSAPP
                    </p>
                    <input
                      id="whats"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
              </div>
              <label>
                <p className="font-medium text-slate-700 pb-2">
                  RESIDÊNCIA
                </p>
                <input
                  id="residencia"
                  type="text"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder=""
                />
              </label>
              <div className="md:flex md:space-x-4">
                <div className="md:w-1/2">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      CIDADE
                    </p>
                    <input
                      id="cidade2"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
                <div className="md:w-1/2">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      UF
                    </p>
                    <input
                      id="uf"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
                <div className="md:w-1/2">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      INSTAGRAM
                    </p>
                    <input
                      id="instagram"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
              </div>
              <div className="md:flex md:space-x-4">
                <div className="md:w-1/2">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      RG
                    </p>
                    <input
                      id="rg"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
                <div className="md:w-1/2 pt-2 md:pt-0">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      CPF
                    </p>
                    <input
                      id="cpf"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
                <div className="md:w-1/2">
                  <label>
                    <p className="font-medium text-slate-700 pb-2">
                      SITE
                    </p>
                    <input
                      id="site"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder=""
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  onClick={sendEmail}
                  className="w-1/2 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                  <span>ENVIAR</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* <form id="form" className="my-10">
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
        </form> */}
      </Container>
    </Layout>
  );
}
