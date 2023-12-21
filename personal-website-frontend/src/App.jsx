import { useState } from 'react'
import './styles/app.css'
import Header from './components/Header'
import WhoAmI from './components/WhoAmI'
import MySkills from './components/MySkills'
import Portfolio from './components/Portfolio'
import WorkExperience from './components/WorkExperience'

function App() {
  return (
    <div className='app-page'>
      <Header/>
      <WhoAmI/>
      <MySkills/>
      <Portfolio/>
      <WorkExperience/>
    </div>
  )
}

export default App
