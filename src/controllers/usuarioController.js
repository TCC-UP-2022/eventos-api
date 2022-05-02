import usuario from "../models/Usuario.js";

class usuarioController {
  static novoUsuario = (req, res) => {
    let usuarios = new usuario(req.body);
    usuarios.save((err, usuario) => {
      if (err) {
        return res
          .status(500)
          .send({ message: `${err.message} - Falha ao cadastrar usuário` });
      } else {
        return res.status(201).send(usuario);
      }
    });
  };

  static listarUsuario = (req, res) => {
    usuario.find((err, usuario) => {
      err
        ? res
            .status(400)
            .send({ message: `${err.message} - Usuário não localizado.` })
        : res.status(200).json(usuario);
    });
  };

  static listarUsuarioID = (req, res) => {
    const id = req.params.id;
    usuario.findById(id, (err, usuario) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Id do usuário não localizado.` });
      } else {
        res.status(200).send(usuario);
      }
    });
  };

  static atualizarUsuarioID = (req, res) => {
    const id = req.params.id;
    usuario.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Usuário atualizado com sucesso!" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao atualizar usuário` });
      }
    });
  };

  static excluirUsuarioID = (req, res) => {
    const id = req.params.id;
    usuario.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: `Usuário removido com sucesso!` });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao excluir usuário` });
      }
    });
  };
}

export default usuarioController;
