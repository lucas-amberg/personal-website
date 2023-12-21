import { useState } from 'react'
import './styles/app.css'
import Header from './components/Header'
import WhoAmI from './components/WhoAmI'

function App() {
  return (
    <div className='app-page'>
      <Header/>
      <WhoAmI/>
    </div>
  )
}

export default App
