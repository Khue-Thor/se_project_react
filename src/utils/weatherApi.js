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
}

export const weatherApi = new Api({
  baseUrl: `http://api.openweathermap.org/data/2.5/weather?`,
  apiKey: "66d79d686e2c2216a220c2059ac437b7",
});
