import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Quality from './components/Quality'
import FurnitureDisplay from './components/FurnitureDisplay'
import Manufacture from './components/Manufacture'
import Crafted from './components/Crafted'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-[5rem] lg:gap-[10rem]'>
        <Hero />
        <About />
        <Quality />
        <FurnitureDisplay />
        <Manufacture />
        <Crafted />
        <Footer />
      </div>
    </div>
  )
}
