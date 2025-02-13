import Search from "../../components/Search/Search"
import Button from "../../components/Button/Button"
import { HomePageWrapper, SearchWrapper, ButtonWrapper } from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { searchActions, searchSelectors } from "store/redux/search/searchSlice"
import Spinner from "components/Spinner/Spinner"
import WeatherBlock from "../../components/WeatherBlock/WeatherBlock"
import Error from "../../components/Error/Error"
import { useState } from "react"

function Home() {
  const { currentWeatherData, error, status } = useAppSelector(
    searchSelectors.weatherData,
  )
  const dispatch = useAppDispatch()
  const [city, setCity] = useState<string>("")
  
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }
  const getWeather = () => {
    if (!city) {
      alert("Enter city")
      return
    }
    dispatch(searchActions.getWeather(city))
  }
  const isLoading: boolean = status === "loading"
  return (
    <HomePageWrapper>
      <SearchWrapper>
        <Search
          name="city"
          id="city"
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={onChange}
        />
        <ButtonWrapper>
          <Button name="Search" onClick={getWeather} disabled={isLoading} />
        </ButtonWrapper>
      </SearchWrapper>
      {status === "success" && currentWeatherData.city && (
        <WeatherBlock
          city={currentWeatherData.city}
          temp={currentWeatherData.temp}
          icon={currentWeatherData.iconURL}
        />
      )}
      {isLoading && <Spinner />}
      {status === "error" && error && <Error error={error|| "Something went wrong with API data"} />}
    </HomePageWrapper>
  )
}
export default Home
