import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './pages/MyYarn.css'
import Home from './pages/Home'
import MyYarn from './pages/MyYarn'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-yarn" element={<MyYarn />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
