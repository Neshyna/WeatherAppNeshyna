export interface SearchSliceState {
    data: any | [] | {city: string, temp: number, icon: string } | WeatherData
    currentWeatherData: WeatherData 
    error?: string 
    status: "default" | "loading" | "success" | "error"
  }
  
  export interface WeatherData {
    city: string;
    temp: number;
    icon: string;
  }
