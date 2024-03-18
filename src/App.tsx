import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Header, Main } from './components'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div id="main-site" className="box-border">
        <Header/>
        <Main/>
      </div>
    </div>
  )
}

export default App
