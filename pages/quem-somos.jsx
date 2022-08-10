import Container from "@components/container";
import Layout from "@components/layout";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <Container>
        <div className="mx-auto prose text-justify dark:prose-invert mt-14">
          <div className="flex justify-center">
            <img
              src="/img/logo.png"
              alt="avatar"
              width="250px"
              height="150px"
            />
          </div>
          <p>
            O Movimento Empreender Piauí (MOVE) é uma associação de
            propósito não econômico constituído com a finalidade de
            desenvolver estudos, coordenar e aprimorar atividades
            empresariais, comerciais e industriais no estado do Piauí,
            colaborando com os Poderes Públicos e Associações de
            Classe, no crescimento e desenvolvimento do estado do
            Piauí.
          </p>
          <p>
            Com sede em Teresina, o MOVE atua em todo o estado do
            Piauí, tendo como objetivos:
          </p>
          <li>
            Promoção do desenvolvimento da atividade empresarial no
            estado do Piauí;
          </li>
          <li>
            Atuar junto aos poderes públicos na defesa dos princípios
            e das ideias que estimulem ao empresariado cumprir seu
            papel econômico e social;
          </li>
          <li>
            Manter ou patrocinar publicações, por si ou mediante
            convênios e parcerias, atividades de natureza cultural,
            social, educacional, científica e filantrópica;
          </li>
          <li>
            Celebrar convênios, acordos ou ajustes com órgãos ou
            entidades da administração pública para realização de
            ações que beneficiem a sociedade;
          </li>
          <li>
            promover o networking dos associados, objetivando a
            harmonia e colaboração mútua;
          </li>
          <li>
            incentivar as práticas do compliance dentro das empresas,
            bem como cobrar da administração pública a criação de
            setores específicos;
          </li>
          <li>
            promover a formação da cidadania empreendedora, tendo a
            meritocracia como pilar de crescimento pessoal e
            empresarial.
          </li>
          <p>
            O MOVE tem como missão contribuir com o desenvolvimento
            sustentável do Piauí, propondo ações que elevem o nível de
            excelência da gestão pública e estimulem um ambiente
            propício ao empreendedorismo.
          </p>
          <p>O Move adota como valores:</p>
          <li>
            Sustentabilidade: estimular o respeito ao meio ambiente,
            bem como a adoção de práticas sustentáveis pelas empresas;
          </li>
          <li>
            Ética: atuar com transparência em todas as ações, buscar o
            crescimento empresarial mantendo sempre o respeito à
            sociedade;
          </li>
          <li>
            Meritocracia: estabelecer a dedicação, o desempenho e o
            mérito pessoal como critérios de ascensão e promoção
            profissional;
          </li>
          <li>
            Foco em resultados: alcançar os resultados desejados, com
            o menor gasto de tempo e recursos;
          </li>
          <li>
            Responsabilidade social: incentivar as empresas na
            promoção de mudanças favoráveis às gerações futuras e à
            construção de um mundo melhor e mais justo;
          </li>
          <li>
            Transparência: tornar a informação acessível à todos,
            exigindo dos agentes públicos atitude semelhante.
          </li>
        </div>
      </Container>
    </Layout>
  );
}
