// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import links from './data'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'




function App() {
  // const [count, setCount] = useState(0)

  return(
    <>
        <Routes>
          <Route path={links[0].link} element={<MainPage/>}/>
          <Route path={links[1].link} element={<AboutPage/>}/>
          <Route path={links[2].link} element={<LoginPage/>}/>
        </Routes>
    </>
  )

}

export default App
