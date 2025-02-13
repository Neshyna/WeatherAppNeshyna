export interface WeatherBlockData {
  temp: number;
  city: string;
  icon: string;
}

export interface HistorySliceState {
  historyData:  WeatherBlockData[]
}