import { Router } from "express"
import CursoConroller from "../controllers/controllersCurso"
import UnidadeConroller from "../controllers/controllersUnidade"
import TurmaConroller from "../controllers/controllersUnidade"

const rotas = Router()

//rota principal
rotas.get("/", (request, response) => {
    return response.json("Home Page")
})

rotas.post("/cursos", new CursoController().create)
rotas.get("/cursos", new CursoController().readAll)
rotas.get("/cursos:id", new CursoController().readAll)
rotas.put("/cursos:id", new CursoController().update)
rotas.delete("/cursos:id", new CursoController().delete)

rotas.post("/unidade", new unidadeController().create)
rotas.get("/unidade", new unidadeController().readAll)
rotas.get("/unidade:id", new unidadeController().readAll)
rotas.put("/unidade:id", new unidadeController().update)
rotas.delete("/unidade:id", new unidadeController().delete)

rotas.post("/turma", new turmaController().create)
rotas.get("/turma", new turmaController().readAll)
rotas.get("/turma:id", new turmaController().readAll)
rotas.put("/turma:id", new turmaController().update)
rotas.delete("/turma:id", new turmaController().delete)

export default rotas