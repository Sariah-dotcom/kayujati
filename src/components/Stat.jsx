import React from 'react'

export default function Stat(props) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex gap-1'>
        <p className='text-5xl lg:text-7xl'>{props.figure}</p>
        <p className='text-xl font-bold'>{props.unit}</p>
      </div>
      <div>
        <p className='text-xs text-center text-grey'>{props.description}</p>
      </div>
    </div>
  )
}
