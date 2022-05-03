import evento from "../models/Evento.js";

class eventoController {
  static novoEvento = (req, res) => {
    let eventos = new evento(req.body);
    eventos.save((err, evento) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(201).send(evento);
      }
    });
  };

  static listarEvento = (req, res) => {
    evento.find((err, evento) => {
      err ? res.status(400).send(err) : res.status(200).json(evento);
    });
  };

  static listarEventoAtivo = (req, res) => {
    evento.find({ statusEvento: true }, (err, evento) => {
      err ? res.status(400).send(err) : res.status(200).json(evento);
    });
  };

  static listarEventoInativo = (req, res) => {
    evento.find({ statusEvento: false }, (err, evento) => {
      err ? res.status(400).send(err) : res.status(200).json(evento);
    });
  };

  static listarEventoID = (req, res) => {
    const id = req.params.id;
    evento.findById(id, (err, evento) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Id do evento não localizado.` });
      } else {
        res.status(200).send(evento);
      }
    });
  };
  static atualizarEventoID = (req, res) => {
    const id = req.params.id;
    evento.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Evento atualizado com sucesso!" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao atualizar evento` });
      }
    });
  };

  static excluirEventoID = (req, res) => {
    const id = req.params.id;
    evento.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: `Evento removido com sucesso!` });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao remover evento` });
      }
    });
  };
}

export default eventoController;
