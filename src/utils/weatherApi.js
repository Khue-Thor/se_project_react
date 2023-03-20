export default class Api {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  _handleResponse(response) {
    return response.ok
      ? response.json()
      : Promise.reject(`Error: ${response.status} ${response.statusText}`);
  }

  getWeatherData = async (location, apiKey) => {
    const response = await fetch(
      `${this._baseUrl}lat=${location.latitude}&lon=${location.longitude}&units=imperial&appid=${apiKey}`
    );
    return this._handleResponse(response);
  };

  // filterDataFromWeatherAPI = async (data) => {
  //   if (!data) {
  //     return null;
  //   }

  //   const weather = {};
  //   weather.city = data.location.name;
  //   weather.temperature = data.current.tem_f;
  //   return weather;
  // };
}

export const api = new Api({
  baseUrl: `http://api.openweathermap.org/data/2.5/weather?`,
  apiKey: "d54726166f875fbd211ff49b398e1392",
});
