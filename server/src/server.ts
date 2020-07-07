//  IMPORTAR A BIBLIOTECA EXPRESS
import express from 'express'; 

// IMPORTA O CORS 
import cors from 'cors';

// AS ROTAS ESTÃO SENDO IMPORTADAS DE DENTRO DO ARQUIVO ROUTES.TS
import routes from './routes';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

// SETAR ROTA PARAS AS IMAGENS DOS ITENS
app.use("/uploads", express.static(path.resolve(__dirname, '..', 'uploads')))

// Setar Porta para execução 
app.listen(3333); 