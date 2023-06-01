import { Entity, PrimaryColumn, Column } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("unidade")
export default class Unidade {
  //chave primaria
  @PrimaryColumn()
  id_unidade: string

  //chave estrangeira
  @Column()
  fk_curso: string

  //atributos
  @Column({ nullable: true })
  descricao_unidade: string

  @Column({ nullable: true })
  carga_horaria_unidade: number

  @Column({ nullable: true })
  ordem: number

  constructor() {
    this.id_unidade = uuid()
  }
}
