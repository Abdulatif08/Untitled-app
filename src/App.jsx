import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TruckDispatcher from './components/TruckDispatcher'
import Course from './components/Course'
import CourseFeatures from './components/CourseFeatures'
import AboutCours from './components/AboutCours'
import Result from './components/Result'
import FreeCourse from './components/FreeCourse'
import WhyChooseus from './components/WhyChooseus'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header/>
   <main>
     <Hero/>
    <TruckDispatcher/>
    <Course/>
    <AboutCours/>
    <Result/>
    <CourseFeatures/>
    <FreeCourse/>
    <WhyChooseus/>
    <CTA/>
    <FAQ/>
   </main>
   <Footer/>
    </>
  )
}

export default App