import { getRepository } from "typeorm";
import { Pessoa } from "../entities/Pessoa";



export class GetPessoaService {
  async execute({
    pessoaId,
  }): Promise<Pessoa | Error> {

    const repo = getRepository(Pessoa)
    const pessoa = await repo.findOne(pessoaId,{
        relations:["telefones"]
    });

    if (!pessoa) {
      return new Error("Pessoa does not exists!");
    }

    return pessoa;
  }
}
