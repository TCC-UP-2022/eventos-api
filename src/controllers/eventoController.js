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
}

export default eventoController;
