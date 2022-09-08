import { getRepository } from "typeorm";
import { Pessoa } from "../entities/Pessoa";


export class GetPessoasService {
  async execute(): Promise<Pessoa[]> {
    const repo = getRepository(Pessoa)

    const pessoas = await repo.find({
        relations:["telefones"],
    })
    return pessoas;
  }
}
