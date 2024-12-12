import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Quality from './Quality'

export default function App() {
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-[5rem]'>
        <Hero />
        <About />
        <Quality />
      </div>
    </div>
  )
}
