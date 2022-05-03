import categoria from "../models/Categoria.js";

class categoriaController {
  static novaCategoria = (req, res) => {
    let categorias = new categoria(req.body);
    categorias.save((err, categoria) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(201).send(categoria);
      }
    });
  };

  static listarCategoria = (req, res) => {
    categoria.find((err, categoria) => {
      err ? res.status(400).send(err) : res.status(200).json(categoria);
    });
  };

  static listarCategoriaID = (req, res) => {
    categoria.findById(req.params.id, (err, categoria) => {
      err ? res.status(400).send(err) : res.status(200).json(categoria);
    });
  };

  static deletarCategoriaID = (req, res) => {
    categoria.findByIdAndRemove(req.params.id, (err, categoria) => {
      err ? res.status(400).send(err) : res.status(200).json(categoria);
    });
  };
}

export default categoriaController;
