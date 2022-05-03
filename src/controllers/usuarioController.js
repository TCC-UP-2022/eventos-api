import usuario from "../models/Usuario.js";

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

