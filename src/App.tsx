import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
