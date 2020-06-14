//  IMPORTAR A BIBLIOTECA EXPRESS
import express, { request, response } from 'express'; 
// AS ROTAS ESTÃO SENDO IMPORTADAS DE DENTRO DO ARQUIVO ROUTES.TS
import routes from './routes';


const app = express();
app.use(express.json());
app.use(routes);

// Setar Porta para execução 
app.listen(3333); 