let entradas
await axios.get(`/api/entradas`).then((respuesta) => {
    entradas = respuesta;
});

module.exports = entradas;