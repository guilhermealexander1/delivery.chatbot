const { Client } = require("whatsapp-web.js");

const qrcode = require("qrcode-terminal");

const client = new Client();
const greetingHasSend = {

}

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });

  console.log("QR CODE", qr);
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (msg) => {
  const greeting = "Olá, bem vindo a lanchonete G.M Eats"

  if (!greetingHasSend[msg.from]) {
    msg.reply(greeting);
    greetingHasSend[msg.from] = true
  }
});



client.initialize();
