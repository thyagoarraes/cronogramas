import { AppDataSource } from "./databases/connections/data-source"
import rotas from "./routes/routes"
AppDataSource.initialize()

const express = require("express")
const app = express()
app.use(express.json())
app.use(rotas)

app.listen(3333, () => console.log("O server esta ON na porta 3333."))
