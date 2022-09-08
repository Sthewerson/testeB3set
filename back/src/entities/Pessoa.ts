import {
  Column,
  Entity,
  OneToMany,
} from "typeorm";
import { BaseEntity } from "./BaseEntity";

import { Telefone } from "./Telefone";

@Entity("Pessoa")
export class Pessoa extends BaseEntity {
  @Column()
  nome: string;

  @Column()
  data_de_nascimento: string

  @OneToMany(() => Telefone, (telefone) => telefone.pessoa)
    telefones: Telefone[]
  
}
