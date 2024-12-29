import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Startgame from './Component/Startgame'
import Gameplay from './Component/Gameplay'

function App() {
  const [isgamestarted, setisgamestarted] = useState(false);

  const togglegameplay = () => {
    setisgamestarted((prev) => !prev);
  }

  return <>
    {
      isgamestarted ? <Gameplay></Gameplay> : <Startgame
        toggle={togglegameplay}></Startgame>
    }
  </>
}

export default App
