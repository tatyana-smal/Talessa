import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './pages/MyYarn.css'
import Home from './pages/Home'
import MyYarn from './pages/MyYarn'
import Health from './pages/Health'
import Privacy from './pages/Privacy'
import Support from './pages/Support'
import { LanguageProvider } from './i18n/LanguageProvider'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-yarn" element={<MyYarn />} />
          <Route path="/health" element={<Health />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
