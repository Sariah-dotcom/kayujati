import React from 'react'
import Stat from './Stat'

export default function About() {
  return (
    <section className='flex flex-col gap-5 px-5 lg:px-20 lg:gap-[5rem]'>
        
        <div className='flex flex-col lg:flex-row gap-5'>
            <div className='lg:w-[60%]'>
                <div className='flex'>
                    <p className='text-grey'>About Us</p>
                    <hr className='h-3'/>
                </div>
                <h2 className='text-4xl lg:text-6xl'>For Urban <br /> Living.</h2>
            </div>

            <div className='lg:w-[40%]'>
                <p className='indent-16 lg:text-lg'>We believe that good design should be easy to accept and comfortable to enjoy.
                    For this reason, we collaborate with the best local designers to create furniture 
                    that is sutiable for the needs of urban life- furniture that is pleasant to look at, realiable
                    for the long term, but not difficult to deliver.
                </p>
            </div>
        </div>

        <div className='flex flex-col gap-20 px-20 mt-20 lg:flex-row'>
            <Stat 
                figure='900'
                unit='+'
                description='Products that we have created and sold on the market'
            />

            <Stat 
                figure='200K'
                unit='+'
                description='Happy and loyal customers buy our products'
            />

            <Stat 
                figure='98'
                unit='%'
                description='Customers who have purchased will come back again'
            />
        </div>
    </section>
  )
}
