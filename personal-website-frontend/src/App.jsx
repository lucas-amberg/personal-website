import { useState } from 'react'
import './styles/app.css'
import Header from './components/Header'
import WhoAmI from './components/WhoAmI'
import MySkills from './components/MySkills'

function App() {
  return (
    <div className='app-page'>
      <Header/>
      <WhoAmI/>
      <MySkills/>
    </div>
  )
}

export default App
