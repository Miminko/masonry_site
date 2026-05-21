import { useEffect } from 'react'
import Header from './Header'
import Container from './Container'
import Footer from './Footer'

function App() {
  useEffect(() => {
    document.body.classList.add('is-preload')
    const timer = window.setTimeout(() => {
      document.body.classList.remove('is-preload')
    }, 100)

    return () => {
      clearTimeout(timer)
      document.body.classList.remove('is-preload')
    }
  }, [])

  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  )
}

export default App
