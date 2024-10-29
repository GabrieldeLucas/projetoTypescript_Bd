import express from 'express';
import bodyParser from 'body-parser';
import ProdutoRoutes from './ProdutoRoutes';
import { pool } from './database';
import path from 'path';

const app = express();
//const PORT = process.env.PORT || 3000;

const PORT = 3000;
app.use('/api', ProdutoRoutes)

app.listen(PORT, ()=>{
    console.log(`servidor rodando na porta ${PORT}`)
})


//CONFIGURAR O MIDDLEWARE PARA ARQUIVOS ESTATICOS

//ROTA PARA SERVIR O ARQUIVO ESTATICO