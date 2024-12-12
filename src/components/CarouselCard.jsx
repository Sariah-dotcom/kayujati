import React from 'react'

export default function CarouselCard(props) {
  return (
    <div className='flex flex-col gap-5 px-3 flex-shrink-0 border-r border-grey'>
      <p>{props.number}</p>
      <img className='h-full w-32 rounded-[1rem] lg:w-52' src={props.furnitureImg} alt="furniture" />
      <div>
        <h3 className='text-xl font-semibold'>{props.furnitureName}</h3>
        <p className='text-grey'>{props.category}</p>
      </div>
    </div>
  )
}
