//api.openweathermap.org/data/2.5/weather?id=3111933&appid=e927f468beb5e30dc31289b3be04ad74

//REG: https://home.openweathermap.org/api_keys
const readRequest = document.querySelector('#tiempo')

readRequest.addEventListener('click', async (e)=>{
    e.preventDefault()

    const resultado = await axios.get('http://api.openweathermap.org/data/2.5/weather?id=3111933&appid=e927f468beb5e30dc31289b3be04ad74')

    pTiempo.innerHTML = `El tiempo en reus: ${resultado}`;
})