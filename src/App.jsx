import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Quality from './Quality'
import FurnitureDisplay from './FurnitureDisplay'
import Manufacture from './components/Manufacture'
import Crafted from './components/Crafted'

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
      </div>
    </div>
  )
}
