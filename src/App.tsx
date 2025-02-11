import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'


const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      Weather app
    </BrowserRouter>
  )
}

export default App
