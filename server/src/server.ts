//  IMPORTAR A BIBLIOTECA EXPRESS
import express from 'express'; 

const app = express();

// Criar Rota  para Usuários
app.get('/users', (request, response) => {
  //console.log('Listagem de Usuários');

	response.json([
		'Nome','Vítor',
		'Idade','24'
	]);
});
// Setar Porta para execução 
app.listen(3333); 