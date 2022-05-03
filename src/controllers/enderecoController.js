import endereco from "../models/Endereco.js";

class enderecoController {
  static novoEndereco = (req, res) => {
    let enderecos = new endereco(req.body);
    enderecos.save((err, endereco) => {
      err
        ? res.status(400).send({
            message: `Não foi possível cadastrar Endereço! ${err}`,
          })
        : res.status(201).json({
            message: `Endereço CEP:${endereco.cep} criada com sucesso!`,
          });
    });
  };

  static listarEndereco = (req, res) => {
    endereco.find((err, endereco) => {
      err
        ? res.status(400).send({
            message: `Não foi possível listar Endereços! ${err}`,
          })
        : res.status(200).json(endereco);
    });
  };

  static deletarEnderecoID = (req, res) => {
    endereco.findByIdAndRemove(req.params.id, (err, endereco) => {
      err
        ? res.status(400).send({
            message: `Não foi possível deletar o Endereço! ${err}`,
          })
        : res.status(200).json({
            message: `Endereço CEP:${endereco.cep} deletado com sucesso!`,
          });
    });
  };
};

export default enderecoController;
