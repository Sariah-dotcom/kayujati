import React from 'react'
import Carousel from './Carousel'

export default function FurnitureDisplay() {
  return (
    <section className='px-5 flex flex-col gap-10 lg:px-20'>
        <div className='flex flex-col gap-5 w-full lg:flex-row lg:justify-between lg:items-center'>
            <div>
                <h2 className='text-4xl'>Latest Furniture</h2>
                <p className='text-grey'>Our Newest Products</p>
            </div>
            <button className='border py-2 px-4 rounded-full'>Shop Ready Stock</button>
        </div>

        <Carousel />
      
    </section>
  )
}
