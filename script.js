const urlBase = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = `ac182fc788debeafa35a6afe9c092532`
const diffKelvin = 273.15

document.getElementById("searchButton").addEventListener('click', () => {
    const city = document.getElementById("cityInput").value;
    if (city) {
        // function fetch
        fetchWeather(city)
    }else{
        alert("Elige una ciudad valida")
    }
})

function fetchWeather(city) {
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherDate(data) )
}

function showWeatherDate(date) {
    
    const divresponseData = document.getElementById("responseData")
    divresponseData.innerHTML = ''

    const cityName = date.name
    const country = date.sys.country
    const description = date.weather[0].description
    const temp = date.main.temp
    const icon = date.weather[0].icon


    const cityInfo = document.createElement('h2')
    cityInfo.innerHTML = `${cityName}, ${country}`
    
    const descriptionInfo = document.createElement('p')
    descriptionInfo.innerHTML = ` Descripcion de clima: ${description}`
    
    const tempInfo = document.createElement('p')
    tempInfo.innerHTML = `Temperatura: ${Math.floor(temp-diffKelvin)}ºC`

    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
    

//    console.log
    divresponseData.appendChild(cityInfo)
    divresponseData.appendChild(tempInfo)
    divresponseData.appendChild(descriptionInfo)
    divresponseData.appendChild(iconInfo)


}








