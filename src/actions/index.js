import axios from 'axios';

import Config from '../../config/config';

const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  let config = new Config();
  const apiUrl = ROOT_URL + config.API_KEY;
  const url = `${apiUrl}&q=${city},us`;
  const request = axios.get(url);

  // At this point the request will be a promise. redux-promise middleware will detect the promise,
  // execute it, and then send the resolved promise as the payload to the reducer
  // console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
