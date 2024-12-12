import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-col gap-[3rem]'>
        <h2 className='text-8xl text-center lg:text-[25rem] font-goudy font-bold text-grey'>kayujati</h2>
        <div className='flex flex-col gap-10 lg:flex-row lg:items-center'>
            <div className='flex flex-col gap-3 lg:w-[60%]'>
                <h3 className='font-goudy text-2xl font-bold lg:text-4xl'>kayujati</h3>
                <p>We believe that good design should be easy to accept and comfortable to enjoy</p>
            </div>
            
            <div className='flex flex-col gap-12'>
                <ul className='flex gap-5 text-grey'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Certifications</a></li>
                </ul>

                <div className='flex flex-col gap-12'>
                    <div>
                        <h3>Contact Us</h3>
                        <p>+1(999)888-77-66</p>
                        <p>hello@kayujati.com</p>
                    </div>

                    <div>
                        <h3>Location</h3>
                        <p>Moscow</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
