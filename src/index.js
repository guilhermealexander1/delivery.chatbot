// Importa a lib instalada no projeto, localizada na node_modules.
const { Client } = require("whatsapp-web.js");

// Importa a lib instalada no projeto, localizada na node_modules.
const qrcode = require("qrcode-terminal");

// ⬇️ A váriavel abaixo herdar todas as funcionalidades do super set Client().
const client = new Client();

// ⬇️ Inicia a conexão via QR CODE:
client.on("qr", (qr) => {
  // ⬇️ Gera o QRCODE
  qrcode.generate(qr, { small: true });

  // ⬇️ Gera o códiog do QR CODE
  console.log("QR CODE", qr);
});

// ⬇️ Notifica que o celular foi conectado via QR CODE
client.on("ready", () => {
  console.log("Client is ready!");
});

// ⬇️ Aqui é feito a interação do robô com o usuário 
client.on("message", (msg) => {
  const greeting = "Olá, bem vindo a lanchonete Guilherme do grau e Matheus do vapo"
  // ⬇️ Abaixo temos uma condição que se o usuário, representado por "msg.body" mandar qualquer mensagem.
  if (msg.body) {
    // ⬇️ Fará com que o robô responda com a mensagem de saudação.
    msg.reply(greeting);
  }
});



// ⬇️ Quando o arquivo é lido ele vai chamar todas as funções acima, mas esse trecho abaixo é crucial pois ele é resónsavel.
// ⬇️ Por fazer o robô funcionar.
client.initialize();
