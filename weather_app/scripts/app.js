const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateCity=async(city)=>{
    const cityId = await getCity(city);
    const weatherInfo =await getWeather(cityId.Key);
    console.log(weatherInfo);
    console.log(cityId);

    return{cityId,weatherInfo};
}

const updateUI=(data)=>{
    
    const cityInfo = data.cityId;
    const weatherInfo = data.weatherInfo;
    
    //update Detail Template
    details.innerHTML =
        `<h5 class="my-5">${cityInfo.EnglishName}</h5>
        <div class="my-3">${weatherInfo.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weatherInfo.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>`

    //update images
    let timeSrc = null;
    if(weatherInfo.IsDayTime)
    timeSrc='img/day.svg';
    else
    timeSrc='img/night.svg';

    time.setAttribute('src',timeSrc);

    const iconSrc=`img/icons/${weatherInfo.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);
    //Display card
    if(card.classList.contains('d-none'))
    card.classList.remove('d-none');
}

cityForm.addEventListener('submit',e=>{
    
    //get city name
    e.preventDefault();
    city = cityForm.city.value.trim();
    cityForm.reset();
    //update city name
    updateCity(city)
        .then(data=>updateUI(data))
        .catch(e=>console.log(e));
});

