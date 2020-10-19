"use strict";
const fs = require("fs");
const express = require("express");
const path = require("path");
const cors = require("cors");
const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");
const emoji = require("node-emoji");
var nodemailer = require("nodemailer");
require("dotenv").config();

var app = express();
var serverPort = process.env.PORT || 8080;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "/dist/")));
// app.use(require("./routes/index"));

app.post("/send-pedido", async(req, res) => {
  try {
    const { nombre, apellido, telefono, email, direccion, metodoPago } = req.body.form;
    const productos = req.body.productos;
    const subtotal = req.body.subtotal;
    let strProd = productos.map((producto) => {
      return `<br> ${emoji.get('arrow_right')} ${producto.nombre} x ${
        producto.cant
      } $${producto.precio.toFixed(2)}`;
    });
    let strProdWS = productos.map((producto) => {
      return `\n ${emoji.get('arrow_right')} ${producto.nombre} x ${
        producto.cant
      } $${producto.precio.toFixed(2)}`;
    });

    const mensajeCorreo = `
      ${emoji.get('page_facing_up')} <b>DETALLES DE FACTURACION</b><br>
      ${emoji.get('large_blue_circle')} Nombre: ${nombre} ${apellido}  <br>
      ${emoji.get('telephone_receiver')} Telefono: ${telefono}  <br>
      ${emoji.get('email')} Email: ${email}  <br>
      ${emoji.get('round_pushpin')} Direccion: ${direccion}  <br>
      ${emoji.get('credit_card')} Metodo de Pago: ${metodoPago}  <br>
      <br>
      ${emoji.get('page_with_curl')} <b>FACTURA</b> 
      ${strProd} <br>
      <br>
      ${emoji.get('heavy_dollar_sign')} <b>TOTAL = $${subtotal.toFixed(2)}</b> 
    `;

    const mensajeWS = `${emoji.get('page_facing_up')} *DETALLES DE FACTURACION* \n${emoji.get('large_blue_circle')} Nombre: ${nombre} ${apellido}\n${emoji.get('telephone_receiver')} Telefono: ${telefono}\n${emoji.get('email')} Email: ${email}\n${emoji.get('round_pushpin')} Direccion: ${direccion}\n${emoji.get('credit_card')}  Metodo de Pago: ${metodoPago}\n\n${emoji.get('page_with_curl')} *FACTURA* ${strProdWS}\n\n${emoji.get('heavy_dollar_sign')} *TOTAL = $${subtotal.toFixed(
      2
    )}*`;

    console.log(mensajeCorreo);
    console.log(mensajeWS);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    var mailOptions = {
      from: `${nombre} ${apellido} <${email}>`,
      to: [process.env.MAIL_USER, process.env.MAIL_USER2],
      subject: "Nuevo Pedido Phoenix Shop",
      html: mensajeCorreo,
      // html: `<h5>Design&Developer</h5>`
    };

    const info = await transporter.sendMail(mailOptions);

    // console.log(JSON.stringify(mailOptions));
    // console.log("Message sent: %s", info.messageId);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    await client
      .sendMessage("584123199657-1602835458@g.us", mensajeWS)
      .then((req, res) => {
        console.log(req);
        console.log(res);
        console.log("Mensaje Enviado");
      })
      .catch((err) => console.log(err));

    res.send("recibido");
    // res.redirect("/");
  } catch (err) {
    console.log(err);
    res.send("No recibido");
  }
});

app.get("/sendMensajeGroup", async(req, res) => {
  await client
    .sendMessage(
      "584123199657-1602835458@g.us",
      "mensaje enviado desde el servidor para el grupo."
    )
    .then((req, res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));

  console.log("Mensaje Enviado");

  res.send("Mensaje Enviado");
});

app.get("/*/", function(req, res) {
  // res.sendFile(__dirname + "/dist/index.html");
  res.sendFile(__dirname + "/dist/index.html");
});

// Path where the session data will be stored
const SESSION_FILE_PATH = path.join(__dirname, "./session.json");

// Load the session data if it has been previously saved
let sessionData;

// Use the saved values
const client = new Client({
  puppeteer: { args: ["--no-sandbox", "--disable-setuid-sandbox"] },
  session: sessionData,
});

if (fs.existsSync(SESSION_FILE_PATH)) {
  sessionData = require(SESSION_FILE_PATH);
} else {
  client.on("qr", (qr) => {
    // Generate and scan this code with your phone
    console.log("QR RECEIVED", qr);
    qrcode.generate(qr, { small: true });
  });

  // Save session values to the file upon successful auth
  client.on("authenticated", (session) => {
    sessionData = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function(err) {
      if (err) {
        console.error(err);
      }
    });
  });
}

client.on("ready", async() => {
  console.log("Client is ready!");
  // var contacts = await client.getContacts().then((res) => {
  //   return res;
  // });
  var chats = await client.getChats().then((res) => {
    return res;
  });
  // var state = await client.getState().then((res) => {
  //   return res;
  // });

  chats.forEach((chat) => {
    if (chat.name == "+58 412-3199657") {
      console.log(
        chat.name + " (" + chat.id.user + ") " + JSON.stringify(chat.id)
      );
    } else {
      console.log(
        chat.name + " (" + chat.id.user + ") " + JSON.stringify(chat.id)
      );
    }
  });

  // client
  //   .sendMessage("584123199657", "hola desde el Server")
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));
});

var server = app.listen(serverPort, function() {
  var port = server.address().port;
  console.log("Express is working on port " + port);
  client.initialize();
});