import { useAppDispatch, useAppSelector } from "store/hooks"
import WeatherBlock from "../../components/WeatherBlock/WeatherBlock"
import { HistoryPageWrapper, ButtonContainer } from "./styles"
import {
  searchActions,
  searchSelectors,
} from "store/redux/search/searchSlice"
import Button from "components/Button/Button"
import { v4 } from "uuid"

function History() {
  const { history, error, status } = useAppSelector(
    searchSelectors.weatherData,
  )
  const dispatch = useAppDispatch()

  const weatherCardBlocks = history.map((weatherCard: any) => {
    return (
      
      <WeatherBlock
        key={v4()}
       city={weatherCard.city}
        temp={weatherCard.temp}
        icon={weatherCard.iconURL}
      > 
      </WeatherBlock>
    )
  })

  const deleteCards = () => {
    dispatch(searchActions.deleteCards())
  }

  return (
    <HistoryPageWrapper>
      {weatherCardBlocks}
      <ButtonContainer>
        <Button name="Delete all cards" onClick={deleteCards} />
      </ButtonContainer>
      
    </HistoryPageWrapper>
  )
}
export default History


