import evento from "../models/Evento.js";


class eventoController {
  static novoEvento = (req, res) => {
    let eventos = new evento(req.body);
    eventos.save((err, evento) => {
      err
        ? res.status(400).send({
            message: `Não foi possível cadastrar o Evento! ${err}`,
          })
        : res.status(201).json({
            message: `Evento  ${evento.nome} cadastrado com sucesso!`,
          });
    });
  };

  static listarEvento = (req, res) => {
    evento.find((err, evento) => {
      err
        ? res.status(400).send({
            message: `Não foi possível listar Eventos! ${err}`,
          })
        : res.status(200).json(evento);
    });
  };

  static listarEventoAtivo = (req, res) => {
    evento.find({ statusEvento: true }, (err, evento) => {
      err
        ? res.status(400).send({
            message: `Não há Eventos ativos! ${err}`,
          })
        : res.status(200).json(evento);
    });
  };

  static listarEventoInativo = (req, res) => {
    evento.find({ statusEvento: false }, (err, evento) => {
      err
        ? res.status(400).send({
            message: `Não há Eventos Inativos! ${err}`,
          })
        : res.status(200).json(evento);
    });
  };

  static listarEventoID = (req, res) => {
    const id = req.params.id;
    evento.findById(id, (err, evento) => {
      err
        ? res.status(400).send({
            message: `Não foi possível listar o Evento! ${err}`,
          })
        : res.status(200).json(evento);
    });
  };
  static atualizarEventoID = (req, res) => {
    const id = req.params.id;
    evento.findByIdAndUpdate(id, { $set: req.body }, (err, evento) => {
      err
        ? res.status(400).send({
            message: `Não foi possível atualizar o Evento! ${err}`,
          })
        : res.status(200).json({
            message: `Evento ${evento.nome} atualizado com sucesso!`,
          });
    });
  };

  static excluirEventoID = (req, res) => {
    const id = req.params.id;
    evento.findByIdAndDelete(id, (err, evento) => {
      err
        ? res.status(400).send({
            message: `Não foi possível deletar o Evento! ${err}`,
          })
        : res.status(200).json({
            message: `Evento ${evento.nome} deletado com sucesso!`,
          });
    });
  };
}

export default eventoController;
