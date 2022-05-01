import usuario from "../models/Usuario.js";

class usuarioController {

  static novoUsuario = (req, res) => {
    let usuarios = new usuario(req.body);
    usuarios.save((err, usuario) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(201).send(usuario);
      }
    });
  };

  static listarUsuario = (req, res) => {
    usuario.find((err, usuario) => {
      err ? res.status(400).send(err) : res.status(200).json(usuario);
    });
  };
}

export default usuarioController;
