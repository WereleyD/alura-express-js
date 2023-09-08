import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisiçãoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";

const manipuladorDeErros = (erro, req, res, next) => {
  if (erro instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().enviarResposta(res);
    return;
  }
  if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).enviarResposta(res);
    return;
  }
  new ErroBase().enviarResposta(res);
};

export default manipuladorDeErros;
