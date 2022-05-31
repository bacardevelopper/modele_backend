// import modules
const express = require('express');
const fct_crud = require('../b_logic/crud_logic');

// config routes
let routes_crud = express.Router();
routes_crud.post('/create', fct_crud.fct_create);
routes_crud.post('/update', fct_crud.fct_update);
routes_crud.post('/delete', fct_crud.fct_delete);
routes_crud.post('/read', fct_crud.fct_read);

module.exports = routes_crud;