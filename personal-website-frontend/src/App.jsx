import './styles/app.css'
import { Fade } from 'react-awesome-reveal'
import Header from './components/Header'
import WhoAmI from './components/WhoAmI'
import MySkills from './components/MySkills'
import Portfolio from './components/Portfolio'
import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Education from './components/Education'


//This component is the main page of the site, it has the following:

//Header (Logo and my name)
//WhoAmI (Description about me)
//Resume view button
//Skills list
//Portfolio projects
//Work experience list
//Contact info
function App() {

  return (
    <div className='app-page'>
      <Header/>
      <WhoAmI/>
      <Resume/>
      <MySkills/>
      <Education/>
      <Portfolio/>
      <WorkExperience/>
      <Contact/>
    </div>
  )
}

export default App
