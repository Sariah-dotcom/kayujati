import React from 'react';

export default function Hero() {
  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {/* Background image */}
      <img
        className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem]"
        src="/hero-img.jpg"
        alt="Minimal living room furniture"
      />

      <div className="flex flex-col items-center h-full">
          
          <div className='absolute top-5 lg:top-20 gap-3 flex flex-col w-full px-5 justify-between lg:justify-normal lg:gap-[10rem] lg:flex-row text-white'>
            <div className='lg:w-[20%]'>
              <img className="h-20 md:h-24 lg:ml-10" src="/circle.png" alt="Badge" />
            </div>

            {/* Hero text */}
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-3 ml-[45%] -mb-8 lg:ml-16 md:-mb-12 lg:w-full'>
                <p className="text-xs md:text-lg ">For Urban Living </p>
                <hr className='w-[15%] md:w-[10%]' />
              </div>
              <h1 className="text-8xl font-bold md:text-[10rem] ml-auto">kayujati</h1>
              <p className="text-xs ml-auto md:text-lg">
                We believe that good <br /> design should be easy <br /> to accept
              </p>
            </div>
          </div>
        {/* CTA buttons and video */}
        <div className='lg:w-full left-3 absolute bottom-5 flex flex-col gap-5 lg:justify-between lg:px-10 lg:flex-row lg:items-center'>
          <div className="flex flex-col text-white gap-3">
            <button className="border border-white backdrop-blur-lg bg-opacity-30 rounded-full py-2 px-4 lg:px-10 lg:py-3">
              Shop Ready Stock
            </button>
            <button className="border border-white backdrop-blur-lg bg-opacity-30 rounded-full py-2 px-4 lg:px-10 lg:py-3">
              Pre-Order Instead
            </button>
          </div>

          <div className='h-32 w-52 rounded-[1rem] border border-white p-5 bg-white backdrop-blur-lg bg-opacity-20'>
            <video autoPlay loop muted className='rounded-[1rem]' src="/furniture-broll.mp4"></video>
          </div>
        </div>
        

      </div>
    </div>
  );
}
