let temperature = document.querySelector('.temperature')
let cityname = document.querySelector('.cityname')
let humidity = document.querySelector('.humidity-per')
let wind = document.querySelector('.wind-speed')
const input = document.querySelector('.search input')
const button = document.querySelector('.search button')



async function fetchdata(city){
    let img = document.querySelector('.imgWeather')
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`
    const Apikey = "89dc0bdd4572c29bd50af9348aa74e3a"
    const response = await fetch(apiurl+`&appid=${Apikey}`)
    var data = await response.json()
    console.log(data);
    

    if(data.cod === '400'){
        let err = document.querySelector('.error')
        err.style.display = "block"
        
    }else{
        let weather = document.querySelector('.weather')
        cityname.innerHTML = data.name
        temperature.innerHTML = data.main.temp+" °C"
        humidity.innerHTML = data.main.humidity
        wind.innerHTML = data.wind.speed

        if (data.weather[0].main === 'Clouds') {
            img.src = "Resources/images/clouds.png";
        } else if (data.weather[0].main === 'Haze') {
            img.src = 'Resources/images/drizzle.png';
        } else if (data.weather[0].main === 'Rain') {
            img.src = 'Resources/images/rain.png';
        } else if (data.weather[0].main === 'Snow') {
            img.src = 'Resources/images/snow.png';
        }else if (data.weather[0].main === 'Clear') {
            img.src = 'Resources/images/clear.png';
        }
        weather.style.display = "block"

    }

   
    
    
}
button.addEventListener("click",function (event) {
    fetchdata(input.value) 
})

