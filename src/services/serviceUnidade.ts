import Unidade from "../databases/models/unidade"
import { AppDataSource } from "../databases/connections/data-source"
import { ReturnDocument } from "typeorm"

const cursor = AppDataSource.getRepository(Unidade)


type newUnidadeRequest = {
    descricao_unidade: string
    carga_horaria_unidade: number
    ordem : number
    fk_curso: string
}

export class CreateunidadeService {
    async execute({
        descricao_unidade,
        carga_horaria_unidade,
        ordem,
        fk_curso,
    }: newUnidadeRequest): Promise<Unidade | Error> {

        if (await cursor.findOne({ where: { descricao_unidade } })) {
        return new Error("unidade já cadastrado!")
}

const unidade = cursor.create({
        descricao_unidade,
        carga_horaria_unidade, 
        ordem,
        fk_curso,
})

    await cursor.save(unidade)

    return unidade
    }
}


export class ReadOneUnidadeService {
    async execute({ descricao_unidade }: findOneUnidadeRequest): Promise<Unidade | Error> {
    const unidade = await cursor.findOne({ where: { descricao_unidade } });

    if (!unidade) {
        return new Error("Unidade não encontrada!");
    }}
}

export class UpdateUnidadeService {

    async execute({ descricao_unidade }: findOneUnidadeRequest): Promise<Unidade | Error> {
    const unidade = await cursor.findOne({ where: { descricao_unidade } });

    if (!unidade) {
    return new Error("Unidade não encontrada!");
    }



export class DeleteCursoService {}
