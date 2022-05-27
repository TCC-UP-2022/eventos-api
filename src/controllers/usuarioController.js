import usuario from "../models/Usuario.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
const authConfig = { secret: "e662505747e4922b7694aa878bcbcbc0" };
import mail from "../models/Mailer.js";
class usuarioController {
  static novoUsuario = (req, res) => {
    let usuarios = new usuario(req.body);
    usuarios.save((err, usuario) => {
      err
        ? res.status(400).send({
            message: `Não foi possível cadastrar novo Usuário! ${err}`,
          })
        : res.status(201).json({
            message: `Usuário ${usuario.nome} cadastrado com sucesso!`,
          });
    });
  };

  static autenticarUsuario = async (req, res) => {
    const { email, senha } = req.body;
    const user = await usuario.findOne({ email }).select("+senha");

    if (!user)
      return res.status(400).send({ message: "Usuário não encontrado!" });
    if (!(await bcrypt.compare(senha, user.senha)))
      return res.status(400).send({ message: "Senha incorreta!" });
    user.senha = undefined;
    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 86400,
    });
    res.send({ user, token });
  };

  static esqueciSenha = async (req, res) => {
    const { email } = req.body;
    try {
      const user = await usuario.findOne({ email });
      if (!user)
        return res.status(400).send({ message: "Usuário não encontrado!" });

      const token = crypto.randomBytes(20).toString("hex");
      const now = new Date();
      now.setHours(now.getHours() + 1);
      await usuario.findByIdAndUpdate(user.id, {
        $set: {
          resetSenhaToken: token,
          resetSenhaExpires: now,
        },
      });
      mail.sendMail(
        {
          to: email,
          from: "egydiobolonhezi@gmail.com",
          template: "forgot_password",
          context: { token },
        },
        (err) => {
          if (err) {
            console.log(err);
            return res.status(400).send({ message: "Erro ao enviar email!" });
          } else {
            return res
              .status(200)
              .send({ message: "Email enviado com sucesso!" });
          }
        }
      );
    } catch (err) {
      res.status(400).send({ message: "Não foi possível enviar email!" });
    }
  };

  static resetSenha = async (req, res) => {
    const { email, token, senha } = req.body;
    try {
      const user = await usuario
        .findOne({ email })
        .select("+resetSenhaToken resetSenhaExpires");
      if (!user)
        return res.status(400).send({ message: "Usuário não encontrado!" });
      if (token !== user.resetSenhaToken)
        return res.status(400).send({ message: "Token inválido!" });
      const now = new Date();
      if (now > user.resetSenhaExpires)
        return res.status(400).send({ message: "Token expirado!" });
      user.senha = senha;
      await user.save();
      res.send({ message: "Senha alterada com sucesso!" });
    } catch (err) {
      res.status(400).send({ message: "Não foi possível alterar senha!" });
    }
  };

  static listarUsuario = (req, res) => {
    usuario.find((err, usuario) => {
      err
        ? res.status(400).send({
            message: `Não foi possível listar Usuários! ${err}`,
          })
        : res.status(200).json(usuario);
    });
  };

  static listarUsuarioID = (req, res) => {
    const id = req.params.id;
    usuario.findById(id, (err, usuario) => {
      err
        ? res.status(400).send({
            message: `Não foi possível listar Usuário! ${err}`,
          })
        : res.status(200).json(usuario);
    });
  };

  static atualizarUsuarioID = (req, res) => {
    const id = req.params.id;
    usuario.findByIdAndUpdate(id, { $set: req.body }, (err, usuario) => {
      err
        ? res.status(400).send({
            message: `Não foi possível atualizar Usuário! ${err}`,
          })
        : res.status(200).json({
            message: `Usuário ${usuario.nome} atualizado com sucesso!`,
          });
    });
  };

  static excluirUsuarioID = (req, res) => {
    const id = req.params.id;
    usuario.findByIdAndDelete(id, (err, usuario) => {
      err
        ? res.status(400).send({
            message: `Não foi possível deletar Usuário! ${err}`,
          })
        : res.status(200).json({
            message: `Usuário ${usuario.nome} deletado com sucesso!`,
          });
    });
  };
}

export default usuarioController;
