import express from "express";//serve para escutar as requisições
import {config} from "dotenv";//serve para ler o arquivo .env

config();//lê o arquivo .env

const port = process.env.PORT || 5000

const noah = express();//cria o servidor
noah.use(express.json());

noah.get("/", (req, res)=>
res.status(200).json({message: "Hello, World!"})
)

noah.listen(port, ()=>
console.log(`Server startedn on http://localhost:${port}`)
)