import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import masonryIconUrl from './assets/favicon.svg?url'
import './index.css'
import { setFavicon } from './setFavicon'
import App from './App.tsx'

setFavicon(masonryIconUrl)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
