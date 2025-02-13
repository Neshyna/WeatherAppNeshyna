import axios from "axios";

import { createAppSlice } from "store/createAppSlice";
import { HistorySliceState, WeatherBlockData } from "./types";

import { PayloadAction } from "@reduxjs/toolkit";

const historyInitialState: HistorySliceState = {
    historyData: []
}

export const historySlice = createAppSlice({
name: 'HISTORY',
initialState: historyInitialState,
reducers: {
    addWeatherBlock:(state:HistorySliceState,action: PayloadAction<WeatherBlockData>)=>{
        state.historyData=[...state.historyData,action.payload]
    },
    deleteCards: (state: HistorySliceState) => {
        state.historyData = [];
    },
},
selectors:{
    history: (state:HistorySliceState)=>state.historyData
},
});

export const historyActions = historySlice.actions
export const historySelectors = historySlice.selectors