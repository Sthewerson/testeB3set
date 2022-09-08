import {
  Column,
  Entity,
  ManyToOne,
} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Pessoa } from "./Pessoa";


@Entity("PessoaTelefone")
export class Telefone extends BaseEntity {
  @Column()
  numero: string;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.telefones)
    pessoa: Pessoa
}
