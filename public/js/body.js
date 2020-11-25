console.log('HOLA AXIOS');

const entradas = await axios.get('http://blog-miquel.herokuapp.com/api/entradas');

module.exports = entradas;