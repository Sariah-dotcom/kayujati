import React from 'react'

export default function Details(props) {
  return (
    <div className='flex flex-col gap-10 lg:flex-row lg:items-center'>
      <img className='lg:px-20 lg:h-[80vh] rounded-[1.5rem]' src={props.image} alt="living area" />
        
        <div className='flex flex-col gap-5 px-5 lg:w-[40%]'>
            <h2 className='text-4xl'>{props.title}</h2>
            <p className='text-grey'>{props.text}</p>
            <button className='border rounded-full py-2 px-4 w-32'>Learn More</button>
        </div>
    </div>
  )
}
