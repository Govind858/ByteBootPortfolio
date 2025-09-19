import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import HomeContent from './Components/HomeContent'
import Introduction from './Components/Introduction'
import Service from './Components/Service'
import Products from './Components/Products'
import Clients from './Components/Clients'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HomeContent/>
      <Introduction/>
      <Service/>
      <Products/>
      <Clients/>
      <Contact/>
    </>
  )
}

export default App
