import checkin from "../models/Checkin.js";

class checkinController {
  static novoCheckin = (req, res) => {
    let checkins = new checkin(req.body);
    checkins.save((err) => {
      err
        ? res.status(400).send({
            message: `Não foi possível fazer Checkin! ${err}`,
          })
        : res.status(201).json({
            message: `Checkin realizado com sucesso!`,
          });
    });
  };

  static listarCheckin = (req, res) => {
    checkin.find((err, checkin) => {
      err
        ? res.status(400).send({
            message: `Não foi possível listar Checkins! ${err}`,
          })
        : res.status(200).json(checkin);
    });

  };

  static contadorCheckinEventoID = (req, res) => {
    checkin.countDocuments(
      checkin.find({ evento: req.params.id }),
      (err, checkin) => {
        err
          ? res
              .status(400)
              .send({ message: `Não foi possível contar Checkins! ${err}` })
          : res.status(200).json({ contador: `${checkin}` });
      }
    );
  };
}

export default checkinController;


