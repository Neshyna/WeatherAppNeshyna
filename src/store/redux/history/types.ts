export interface WeatherBlockData {
  cityName: string;       
  temperature: number; 
}

export interface HistorySliceState {
  historyData: any;
  history: WeatherBlockData[]
}