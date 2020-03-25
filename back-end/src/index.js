const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Métodos HTTP:
 * 
 * GET: para buscar informação do back-end
 * POST: Criar uma informção no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */
/**
 * Tipos de Parametros:
 * 
 * Query: Parametros nomeados enviados por rotas após "?" (Filtros e paginação)
 * Route params: parametros utilizados para identificar recursos
 * Request Body: Corpo da requeisição para criar ou alterar recursos 
 */


app.listen(3333);