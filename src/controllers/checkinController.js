import checkin from "../models/Checkin.js";

class checkinController {
  static novoCheckin = (req, res) => {
    let checkins = new checkin(req.body);
    checkins.save((err, checkin) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(201).send(checkin);
      }
    });
  };

  static listarCheckin = (req, res) => {
    checkin.find((err, checkin) => {
      err ? res.status(400).send(err) : res.status(200).json(checkin);
    });
  };
}

export default checkinController;
