import express from "express";//serve para escutar as requisições
import {config} from "dotenv";//serve para ler o arquivo .env

config();//lê o arquivo .env

const port = process.env.PORT || 5000

const noah = express();//cria o servidor
noah.use(express.json());

noah.get("/:nome", (req, res)=>{
const nome = req.params.nome;
const pratos = req.query.pratos;
const maracutaia = req.body.maracutaia

res.status(200).json({firstmessage : `hola${nome}` ,last:`${pratos}`,maracutaia : maracutaia })}
)

    

noah.listen(port, ()=>{
console.log(`Server startedn on http://localhost:${port}`)}
)

noah.post("/", (req, res)=>{
    const nome = req.query.nome;
res.status(200).json({message: `Hello, POST! ${nome}`})}
)
noah.put("/", (req, res)=>{
    const nome = req.query.nome;
res.status(200).json({message: `Hello, PUT! ${nome}`})}
)
noah.delete("/", (req, res)=>{
    const nome = req.query.nome;
res.status(200).json({message: `Hello, DELETE! ${nome}`})}
)