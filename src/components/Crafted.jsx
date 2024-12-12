import React from 'react'

export default function Crafted() {
  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem]"
        src="/living-area-2.jpg"
        alt="minimal furniture"
      />

      <div className='absolute text-white text-right flex flex-col gap-5 w-full px-10'>
        <h2 className='text-8xl'>Crafted Just <br /> For You</h2>
        <p>We understand that you want the perfect <br /> furniture to fit you and your home, that is why we <br /> offer customized order service. </p>
        <button></button>
      </div>

      
    </div>
  )
}
