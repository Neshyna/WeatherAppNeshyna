import {
  City,
  IconContainer,
  Temp,
  TempNameContainer,
  WeatherBlockContainer,
} from "./styles"
import { WeatherBlockProps } from "./types"

const WeatherBlock: React.FC<WeatherBlockProps> = ({ city, temp, icon }) => {
  return (
    <WeatherBlockContainer>
      <TempNameContainer>
        <Temp>{temp}°C</Temp>
        <City>{city}</City>
      </TempNameContainer>
      <IconContainer>
        <img
          src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
        />
      </IconContainer>
    </WeatherBlockContainer>
  )
}

export default WeatherBlock
