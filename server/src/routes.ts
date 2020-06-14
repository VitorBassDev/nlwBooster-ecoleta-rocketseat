import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) =>{
    return response.json({message: 'Hello Word 02'});
});

export default routes;

