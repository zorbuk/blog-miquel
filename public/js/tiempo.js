//api.openweathermap.org/data/2.5/weather?id=3111933&appid=e927f468beb5e30dc31289b3be04ad74
const readRequest = document.querySelector('#tiempo')

readRequests.addEventListener('click', async (e)=>{
    e.preventDefault()

    const resultado = await axios.get('api.openweathermap.org/data/2.5/weather?id=3111933&appid=e927f468beb5e30dc31289b3be04ad74')
    console.log('El tiempo en reus: ', resultado)
})