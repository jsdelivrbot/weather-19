const APP_ID = '4d1cb31c8f4a286dd2664d6a47e3b125'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${APP_ID}`

export const fetchWeather = (city) => {

    const URL = `${ROOT_URL}&q=${city}`
    
    const request = fetch(URL)

    return {
        type: 'FETCH_WEATHER',
        payload: request
    }

}