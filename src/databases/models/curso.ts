import { Entity, PrimaryColumn, Column } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("curso")
export default class Curso {
  //chave primária
  @PrimaryColumn()
  id_curso: string

  //atributos
  @Column({ nullable: true })
  descricao_curso: string

  @Column({ nullable: true })
  carga_horaria_curso: number

  @Column({ nullable: true })
  modalidade: string

  @Column()
  eixo: string

  constructor() {
    this.id_curso = uuid()
  }
}
