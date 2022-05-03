import endereco from "../models/Endereco.js";

class enderecoController {
  static novoEndereco = (req, res) => {
    let enderecos = new endereco(req.body);
    enderecos.save((err, endereco) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(201).send(endereco);
      }
    });
  };

  static listarEndereco = (req, res) => {
    endereco.find((err, endereco) => {
      err ? res.status(400).send(err) : res.status(200).json(endereco);
    });
  };

  static deletarEnderecoID = (req, res) => {
    endereco.findByIdAndRemove(req.params.id, (err, endereco) => {
      err ? res.status(400).send(err) : res.status(200).json(endereco);
    });
  };
};

export default enderecoController;
