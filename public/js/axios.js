const postRequest = document.querySelector('#post')
const readRequests = document.querySelector('#readAll')
const readRequest = document.querySelector('#read')
const updateRequest = document.querySelector('#update')
const deleteRequest = document.querySelector('#delete')

postRequest.addEventListener('click', async (e)=>{
    e.preventDefault()

    const resultado = await axios.post('http://blog-miquel.herokuapp.com/api/entradas', { 
        entrada: {
        'title': 'CLON',
        'snippet': 'BRRR',
        'body': 'YEY'
        }
    })
})
readRequests.addEventListener('click', async (e)=>{
    e.preventDefault()

    const resultado = await axios.get('http://blog-miquel.herokuapp.com/api/entradas')
    console.log(resultado)
})
readRequest.addEventListener('click', async (e)=>{
    e.preventDefault()

    const resultado = await axios.get('http://blog-miquel.herokuapp.com/api/entradas/219741947')
    console.log(resultado)
})
updateRequest.addEventListener('click', async (e)=>{
    e.preventDefault()

    const resultado = await axios.patch('http://blog-miquel.herokuapp.com/api/entradas/219741947', { 
        data: {
        'title': _title,
        'snippet': _snippet,
        'body': _bodyBlog
        }
    })
    console.log(resultado)
})
deleteRequest.addEventListener('click', async (e)=>{
    e.preventDefault()

    const resultado = await axios.delete('http://blog-miquel.herokuapp.com/api/entradas/219741947')
    console.log(resultado)
})