import { useState } from 'react'
import './styles/app.css'
import Header from './components/Header'
import WhoAmI from './components/WhoAmI'
import MySkills from './components/MySkills'
import Portfolio from './components/Portfolio'
import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'

function App() {
  return (
    <div className='app-page'>
      <Header/>
      <WhoAmI/>
      <MySkills/>
      <Portfolio/>
      <WorkExperience/>
      <Contact/>
    </div>
  )
}

export default App
