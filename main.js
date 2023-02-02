const code = document.getElementById('code');
const quote = document.querySelector('.quote');

const fetchData = async () => {
    try{
        let data = await fetch('https://api.adviceslip.com/advice');
        data = await data.json()
        const {id, advice} = data.slip;
        code.innerHTML = id;
        quote.innerHTML = advice
        console.log(id, advice)
    }catch(e){
        console.error(e)
    }
    
}

fetchData()