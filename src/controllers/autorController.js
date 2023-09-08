import mongoose from "mongoose";
import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);

      if (autorEncontrado != null) {
        res.status(200).json(autorEncontrado);
        return;
      }
      res.status(404).send({ message: "Id do Autor não localizado." });
    } catch (erro) {
      if (erro instanceof mongoose.Error.CastError) {
        res
          .status(400)
          .send({ message: "Um ou mais dados fornecidos são inválidos." });
        return;
      }
      res.status(500).send({ message: "Erro interno do servidor." });
    }
  }

  static async cadastrarAutores(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
    } catch (erro) {
      res
        .status(500)
        .json({ messagem: `${erro.message} - falha ao cadastrar autor` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "autor atualizado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na atualização do autor` });
    }
  }

  static async excluirAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "autor excluído com sucesso" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na exclusão do autor` });
    }
  }
}

export default AutorController;
