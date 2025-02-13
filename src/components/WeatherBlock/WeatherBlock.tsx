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
          src={icon}
        />
         <img
          src={icon}
        />
         <img
          src={icon}
        />
      </IconContainer>
    </WeatherBlockContainer>
  )
}

export default WeatherBlock
