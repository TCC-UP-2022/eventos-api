import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";
const __dirname = path.resolve();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "723c8774bd4913",
    pass: "cb17ea83e8703c",
  },
});

transport.use(
  "compile",
  hbs({
    viewEngine: {
      defaultLayout: undefined,
      partialsDir: path.resolve("./src/resources/mail/"),
    },
    viewPath: path.resolve("./src/resources/mail/"),
    extName: ".html",
  })
);

export default transport;
