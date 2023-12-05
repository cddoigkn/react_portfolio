import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
// import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'
import Contact from './components/Contact'

export default function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AboutMe />}/>
          <Route path='/projects' element={<Portfolio />}/>
          <Route path='/contact' element={<Contact2 />}/>
          <Route path='/resume' element={<Resume />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}
