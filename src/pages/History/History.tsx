import { useAppSelector } from "store/hooks"
import WeatherBlock from "../../components/WeatherBlock/WeatherBlock"
import { HistoryPageWrapper } from "./styles"
import { historyActions,historySelectors } from "store/redux/history/historySlice"
import Button from "components/Button/Button"

function History() {
const historyData = useAppSelector(historySelectors.history)

  const history = historyData.map(block => {
    return <WeatherBlock key={block.id}></WeatherBlock>
  })

  const deleteCards = () => {
    dispatch(historyActions.deleteCards())
  }

  return (
  <HistoryPageWrapper>
    {history}
  <Button name="Delete all cards" onClick={deleteCards}/>
  </HistoryPageWrapper>
  )
}
export default History

function dispatch(arg0: any) {
  throw new Error("Function not implemented.")
}
