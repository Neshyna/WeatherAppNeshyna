import axios from "axios"

import { createAppSlice} from "store/createAppSlice"
import { SearchSliceState } from "./types"

const searchInitialState: SearchSliceState = {
  data: [],
  error: undefined,
  status: "default",
}

export const searchSlice = createAppSlice({
  name: "Search",
  initialState: searchInitialState,
  reducers: (create) => ({
    getWeather: create.asyncThunk(
      async (city: string, thunkApi) => {
        try {
          const API_KEY = "129e1bc50f66276d33b636e9a74bc222"

          const result = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
          )
          
          const {name,weather,main} = result.data;
          return {
            cityName: name,
            icon: weather[0].icon,
            temperature: main.temp,
          }
        } catch (error) {
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        pending: (state: SearchSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: SearchSliceState, action: any) => {
          state.data = [...state.data, `${action.payload}`]
          state.status = "success"
        },
        rejected: (state: SearchSliceState, action: any) => {
          state.error = action.payload
          state.status = "error"
        },
      },
    ),
  }),
  selectors: {
    weatherData: (state: SearchSliceState) => state.data,
  },
})
export const searchActions = searchSlice.actions
export const searchSelectors = searchSlice.selectors
