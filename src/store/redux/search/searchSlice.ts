import axios from "axios"
import { createAppSlice } from "store/createAppSlice"
import { SearchSliceState, WeatherData } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const searchInitialState: SearchSliceState = {
  history: [],
  currentWeatherData: {
    city: "",
    temp: 0,
    iconURL: "",
  },
  error: undefined,
  status: "default",
}

const API_KEY = "0b22782f0d16c66b86362fb7f541c1e9"

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

          return result.data
        } catch (error) {
          return thunkApi.rejectWithValue(error)
        }
      },

      {
        pending: (state: SearchSliceState) => {
          state.currentWeatherData = { city: "", temp: 0, iconURL: "" }
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: SearchSliceState, action: any) => {
          state.currentWeatherData = {
            city: action.payload.name,
            temp: (action.payload.main.temp - 273.15).toFixed(1),
            iconURL: `http://openweathermap.org/img/w/${action.payload.weather[0].icon}.png`,
          }
          state.history = [
            ...state.history,
            {
              city: action.payload.name,
              temp: (action.payload.main.temp - 273.15).toFixed(1),
              iconURL: `http://openweathermap.org/img/w/${action.payload.weather[0].icon}.png`,
            },
          ]
          state.status = "success"
        },
        rejected: (state: SearchSliceState, action: any) => {
          state.error = action.payload
          state.status = "error"
        },
      },
    ),

    deleteCards: create.reducer(state => {
      state.history = []
    }),
  }),
  selectors: {
    weatherData: (state: SearchSliceState) => state,
  },
})
export const searchActions = searchSlice.actions
export const searchSelectors = searchSlice.selectors
