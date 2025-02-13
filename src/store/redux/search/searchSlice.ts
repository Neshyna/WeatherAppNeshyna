import axios from "axios"
import { createAppSlice } from "store/createAppSlice"
import { SearchSliceState, WeatherData } from "./types"

const searchInitialState: SearchSliceState = {
  data: [],
  currentWeatherData: {
    city: "",
    temp: 0,
    icon: "",
  },
  error: undefined,
  status: "default",
}

const API_KEY = '0b22782f0d16c66b86362fb7f541c1e9'

export const searchSlice = createAppSlice({
  name: "Search",
  initialState: searchInitialState,
  reducers: create => ({
    getWeather: create.asyncThunk(
      async (city: string, thunkApi) => {
        try {
          
          const result = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
          )

          const { name, weather, main } = result.data
          return {
            cityName: name,
            icon: weather[0].icon,
            temperature: main.temp,
          }

          // return result.data
            } catch (error) {
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        pending: (state: SearchSliceState) => {
          state.currentWeatherData = { city: "", temp: 0, icon: "" }
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: SearchSliceState, action: any) => {
          const { cityName, icon, temperature } = action.payload
          state.currentWeatherData = { city: cityName, temp: temperature, icon }
          state.data = [
            ...state.data,
            { city: cityName, temp: temperature, icon },
          ]
          state.status ='success'
        },
        rejected: (state: SearchSliceState, action: any) => {
          state.error = action.payload
          state.status = "error"
        },
      },
    ),
  }),
  selectors: {
    weatherData: (state: SearchSliceState) => state,
  },
})
export const searchActions = searchSlice.actions
export const searchSelectors = searchSlice.selectors
