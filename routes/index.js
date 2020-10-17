const { Router } = require("express");
var nodemailer = require("nodemailer");
const router = Router();

router.post("/send-pedido", async(req, res) => {
  console.log(req.body);
  try {
    const { nombre, apellido, telefono, email } = req.body.form;
    const carrito = JSON.stringify(req.body.productos);
    console.log(carrito);
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
      html: `Nombre: ${nombre} ${apellido} <br>
            Telefono: ${telefono} <br>
            Email: ${email} <br>
            Carrito: <br>  - ${carrito}`,
      // html: `<h5>Design&Developer</h5>`
    };

    const info = await transporter.sendMail(mailOptions);

    console.log(JSON.stringify(mailOptions));
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.send("recibido");
    // res.redirect("/");
  } catch (err) {
    console.log(err);
    res.send("No recibido");
  }
});

module.exports = router;