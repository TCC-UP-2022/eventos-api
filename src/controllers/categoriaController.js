import categoria from "../models/Categoria.js";

class categoriaController {
  static novaCategoria = (req, res) => {
    let categorias = new categoria(req.body);
    categorias.save((err, categoria) => {
      err
        ? res.status(400).send({
            message: `Não foi possível criar uma nova Categoria! ${err}`,
          })
        : res.status(201).json({
            message: `Categoria ${categoria.nome} criada com sucesso!`,
          });
    });
  };

  static listarCategoria = (req, res) => {
    categoria.find((err, categoria) => {
      err
        ? res.status(400).send({
            message: `Não foi possível listar Categorias! ${err}`,
          })
        : res.status(200).json(categoria);
    });
  };

  static listarCategoriaID = (req, res) => {
    categoria.findById(req.params.id, (err, categoria) => {
      err
        ? res.status(400).send({
            message: `Não foi possível listar a Categoria! ${err}`,
          })
        : res.status(200).json(categoria);
    });
  };

  static deletarCategoriaID = (req, res) => {
    categoria.findByIdAndRemove(req.params.id, (err, categoria) => {
      err
        ? res.status(400).send({
            message: `Não foi possível deletar a Categoria! ${err}`,
          })
        : res.status(200).json({
            message: `Categoria ${categoria.nome} deletada com sucesso!`,
          });
    });
  };
}

export default categoriaController;
