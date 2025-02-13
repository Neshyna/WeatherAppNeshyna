import { useAppDispatch, useAppSelector } from "store/hooks"
import WeatherBlock from "../../components/WeatherBlock/WeatherBlock"
import { HistoryPageWrapper } from "./styles"
import {
  historyActions,
  historySelectors,
} from "store/redux/history/historySlice"
import Button from "components/Button/Button"
import { v4 } from "uuid"

function History() {
  const historyData = useAppSelector(historySelectors.history)
  const dispatch = useAppDispatch()

  const history = historyData.map(block => {
    return (
      <WeatherBlock
        key={v4()}
        city={block.city}
        temp={block.temp}
        icon={block.icon}
      ></WeatherBlock>
    )
  })

  const deleteCards = () => {
    dispatch(historyActions.deleteCards())
  }

  return (
    <HistoryPageWrapper>
      {history}
      <Button name="Delete all cards" onClick={deleteCards} />
    </HistoryPageWrapper>
  )
}
export default History


