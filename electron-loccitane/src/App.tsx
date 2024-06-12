import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/electron-vite.animate.svg'
import './index.css'
import Test from './pages/Test/test'
import { Link } from 'react-router-dom'
import BotaoTema from './hooks/ToggleTheme/BotaoThema'

function App() {
  const [count, setCount] = useState(0)
  
  const openElectronWindow = () => {
    const { BrowserWindow } = require('electron');
    let win = new BrowserWindow({ width: 800, height: 600, fullscreen: true });
    };

  return (
    <>
      <div>
        <a href="https://electron-vite.github.io" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <Link to={'test'} onClick={openElectronWindow}>
          <BotaoTema/>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
