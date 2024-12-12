import React from 'react'

export default function Crafted() {
  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem]"
        src="/living-area-2.jpg"
        alt="minimal furniture"
      />

      <div className='absolute text-white text-right flex flex-col gap-5 w-full p-10 lg:p-20'>
        <h2 className='text-6xl lg:text-8xl uppercase'>Crafted Just <br /> For You</h2>
        <p className='text-sm pl-20 mb-5'>We understand that you want the perfect <br /> furniture to fit you and your home, that is why we <br /> offer customized order service. </p>
        <button className='border py-2 px-4 rounded-full w-52 absolute bottom-0 right-10 lg:bottom-5 lg:right-20'>Customize Your Order</button>
      </div>

      
    </div>
  )
}
