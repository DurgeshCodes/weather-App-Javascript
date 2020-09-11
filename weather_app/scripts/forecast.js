const key = 'RPOmSGWXYyA6g4MgnCTFcJNAOKBf6cdz';

//get weather info
const getWeather=async(id)=>{
    base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    query= `${id}?apikey=${key}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return (data[0]);

}

//get City Info
const getCity = async (city)=>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return  (data[0]);
}

// getCity('mumbai')
//     .then(CityData  =>  getWeather(CityData.Key))
//         .then(WeatherData=> console.log(WeatherData))
//     .catch(err  =>  console.log(err));