
import { Request, Response } from 'express';
import { UnidadeService } from './../services/serviceUnidade';


const service = new UnidadeService()

export default class UnidadeControler {
    async create(request: Request, response: Response) {
        const { descricao_unidade, carga_horaria_unidade, ordem, fk_curso } =
        request.body

        const result = await service.create({
            descricao_unidade,
            carga_horaria_unidade,
            ordem,
            fk_curso
        })

        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }
        return response.json(result)
    }

    async readAll(response: Response) {
        const result = await service.readAll()
        if (result.length < 1){
            return response.json("Nenhuma Unidade encontrada!!")
        }
        return response.json(result)
    }

    async readOne(request: Request, response: Response) {
        const { descricao_unidade } = request.params
        const result = await service.readOne({ descricao_unidade })
        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }
        return response.json(result)
    }

    async update(request: Request, response: Response) {
        const  { id_unidade } = request.params
        const { descricao_unidade, carga_horaria_unidade, ordem, fk_curso } =
        request.body
       const result = await service.update({
        id_unidade,
        descricao_unidade,
        carga_horaria_unidade,
        ordem,
        fk_curso,
       }) 
       if (result instanceof Error) {
        return response.status(400).json(result.message)
       }
       return response.json(result)
    }

    async delete(request: Request, response: Response) {
        const { descricao_unidade } = request.params
        const result = await service.delete({ descricao_unidade })
        if (result instanceof Error) {
          return response.status(400).json(result.message)
        }
        return response.status(300).json(result)
      }
      

}