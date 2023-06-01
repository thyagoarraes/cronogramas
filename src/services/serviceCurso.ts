import { AppDataSource } from "../databases/connections/data-source"
import Curso from "../databases/models/curso"

// 1) Estabelece conexão com a tabela alvo no banco de dados através de um cursor

const cursor = AppDataSource.getRepository(Curso)

// 2) Recebe dados da Requisição HTTP lá do FRONTEND

type newCursoRequest = {
  descricao_curso: string
  carga_horaria_curso: number
  modalidade: string
  eixo: string
}

type updateCursoRequest = {
  id_curso: string
  descricao_curso: string
  carga_horaria_curso: number
  modalidade: string
  eixo: string
}

type findOneCursoRequest = {
  id_curso: string
}

// 3) Funções CRUD

export class CursoService {
  async create({
    descricao_curso,
    carga_horaria_curso,
    modalidade,
    eixo,
  }: newCursoRequest): Promise<Curso | Error> {
    if (await cursor.findOne({ where: { descricao_curso } })) {
      return new Error("Curso já cadastrado!")
    }

    const curso = cursor.create({
      descricao_curso,
      carga_horaria_curso,
      modalidade,
      eixo,
    })

    await cursor.save(curso)

    return curso
  }

  async readAll() {
    const cursos = await cursor.find()
    return cursos
  }

  async readOne({ id_curso }: findOneCursoRequest): Promise<Curso | Error> {
    const curso = await cursor.findOne({ where: { id_curso } })
    if (!curso) {
      return new Error("Curso não encontrado!")
    }
    return curso
  }

  async update({
    id_curso,
    descricao_curso,
    carga_horaria_curso,
    modalidade,
    eixo,
  }: updateCursoRequest): Promise<Curso | Error> {
    const curso = await cursor.findOne({ where: { id_curso } })
    if (!curso) {
      return new Error("Cliente não encontrado!")
    }

    curso.descricao_curso = descricao_curso
      ? descricao_curso
      : curso.descricao_curso
    curso.carga_horaria_curso = carga_horaria_curso
      ? carga_horaria_curso
      : curso.carga_horaria_curso
    curso.modalidade = modalidade ? modalidade : curso.modalidade
    curso.eixo = eixo ? eixo : curso.eixo

    await cursor.save(curso)

    return curso
  }

  async delete({ id_curso }: findOneCursoRequest): Promise<Curso | Error> {
    const curso = await cursor.findOne({ where: { id_curso } })
    if (!curso) {
      return new Error("Curso não encontrado!")
    }
    await cursor.delete(curso.id_curso)
    return curso
  }
}
