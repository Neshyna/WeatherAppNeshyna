import Search from "../../components/Search/Search"
import Button from "../../components/Button/Button"
import { HomePageWrapper, SearchWrapper } from "./styles"
import { v4 } from "uuid"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { searchActions, searchSelectors } from "store/redux/search/searchSlice"
import Spinner from "components/Spinner/Spinner"
import WeatherBlock from "../../components/WeatherBlock/WeatherBlock"
import Error from "../../components/Error/Error"
import { useState } from "react"

function Home() {
  const { data, error, status } = useAppSelector(searchSelectors.weatherData)
  const dispatch = useAppDispatch()

  const [city, setCity] = useState<string>("")

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }

  const getWeather = () => {
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
        <Button name="SEARCH" onClick={getWeather} disabled={isLoading} />
        {status === "error" && <Error>{error}</Error>}
        {isLoading && <Spinner />}
      </SearchWrapper>
      <WeatherBlock data={data} />
    </HomePageWrapper>
  )
}
export default Home
