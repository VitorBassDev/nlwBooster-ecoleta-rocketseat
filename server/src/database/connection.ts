import knex from 'knex';
// PATH PARA UNIR CAMINHOS DO SISTEMA OPERACIONAL
import path from 'path';


const connection = knex({
    client: 'sqlite3',
    connection:{
        filename: path.resolve(__dirname,'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;