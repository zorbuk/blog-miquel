/* { ----------- EXPRESS ----------- } */
const express = require('express');
const app = express();

/* { ----------- AXIOS ----------- } */
const axios = require('axios');

/* { ----------- MODELS & ROUTERS ----------- } */
require("../db/mongoose");
const Entrada = require('../models/entrada');
const entradaRouter = require('../routers/entrada');

/* { ----------- PORT ----------- } */
const port = process.env.PORT || 3000

/* { ----------- APP LISTEN ----------- } */
app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});

/* { ----------- EJS VIEW ENGINE ----------- } */
app.set('view engine', 'ejs');

/* { ----------- MIDDLEWARE ----------- } */
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});

/* { ----------- RUTAS WEB ----------- } */
app.get('/', async (req, res) => {
    await Entrada.find({}).then((data) => {
        res.render('blog', { entradas: data })
    });
});
app.get('/crear-entrada', (req, res) => {
    res.render('crear', {  })
});
app.get('/modificar/:id', async (req, res) => {
    const data = await Entrada.findById(req.params.id)
    res.render('modificar', { entrada: data })
});
app.get('/blog/:id', async (req, res) => {
    const data = await Entrada.findById(req.params.id)
    res.render('blogbody', { entrada: data })
});

/* { ----------- API ROUTING ----------- } */
// EXAMPLE: app.use('/api', modelRouter)
app.use('/api', entradaRouter);

/* { ----------- EXPRESS ----------- } */
app.use((req, res) => {
    res.status(404).render('404', {});
});