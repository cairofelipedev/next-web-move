const nodemailer = require('nodemailer')
const config = require('../../utils/config')

export default function sendEmail(req, res) {
  let transporter = nodemailer.createTransport ({
    host: 'br410.hostgator.com.br',
    port: 587, 
    auth: {
      user: config.USERMAIL,
      pass: config.PASSMAIL
    }
  })

  transporter.sendMail({
    from: `"MOVE PI SITE" <${config.USERMAIL}>`, 
    to: config.USERMAIL,
    replyTo: req.body.email,
    subject: "NOVO ASSOCIADO",
    text: req.body.message, 
    html: `<b>Razão Social: ${req.body.razaosocial}</b>
    <br />Nome do Estabelecimento: ${req.body.nome_estabelecimento}
    <br />Ramo de Atividade: ${req.body.ramo_atividade}
    <br />Endereço: ${req.body.endereco1}
    <br />Cidade: ${req.body.cidade1}
    <br />Estado: ${req.body.estado1}
    <br />Telefone: ${req.body.telefone}
    <br />Email: ${req.body.email1}
    <br />Data de fundação: ${req.body.data_fundacao}
    <br />Reg. Junta Comercial: ${req.body.reg}
    <br />Iscr. Estadual: ${req.body.iscr}
    <br />CNPJ: ${req.body.cnpj}
    <br />Contrato Social: ${req.body.contrato}
    <br />Capital Registrado: ${req.body.capital}
    <br />DADOS PESSOAIS DO REPRESENTANTE LEGAL
    <br />Nome: ${req.body.nome}
    <br />Função: ${req.body.funcao}
    <br />Filiação: ${req.body.filiacao}
    <br />Email: ${req.body.email2}
    <br />Data de Nascimento: ${req.body.data_nascimento}
    <br />Nacionalidade: ${req.body.nacionalidade}
    <br />Naturalidade: ${req.body.naturalidade}
    <br />Estado Civil: ${req.body.estado_civil}
    <br />Whats: ${req.body.whats}
    <br />Residência: ${req.body.residencia}
    <br />Cidade: ${req.body.cidade2}
    <br />UF: ${req.body.uf}
    <br />Instagram: ${req.body.instagram}
    <br />RG: ${req.body.rg}
    <br />CPF: ${req.body.cpf}
    <br />Site: ${req.body.site}` 
  }).then((response) => { res.send(response)} )
  .catch((error) => { res.send(error)})
}