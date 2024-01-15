import AboutMe from './compnents/AboutMe'
import ContactMe from './compnents/ContactMe'
import Footer from './compnents/Footer'
import Repos from './compnents/Repos'
import Resume from './compnents/Resume'
import Header from './compnents/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header /> {/*Loads header at all times */}
      <Routes> {/*Swtiches loaded compenents based on url path */}
        <Route path="/" element={<AboutMe />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/repos" element={<Repos />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer /> {/*Loads footer at all times */}
    </>
  )
}

export default App
