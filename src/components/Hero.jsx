import React from 'react';

export default function Hero() {
  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem]"
        src="/hero-img.jpg"
        alt="minimal furniture"
      />

      <div className="flex flex-col items-center h-full">
        
        <div className="absolute text-white flex gap-10 top-10 w-full lg:gap-[7%] lg:top-14">
          
          <div className='ml-2 lg:w-[20%] lg:ml-10'>
            <img className="h-16 lg:h-24" src="/circle.png" alt="" />
          </div>
          
          {/* Hero text */}
          <div className='flex flex-col gap-2'>
            <div className="font-sans flex items-center gap-2">
              <p className="ml-6 -mb-5 lg:ml-16 text-xs lg:text-lg lg:-mb-16">For Urban Living</p>
            </div>
            
            <h1 className="text-7xl font-bold lg:text-[10rem]">kayujati</h1>
            <div>
              <p className="text-xs text-right lg:text-lg">
                We believe that good <br /> design should be easy <br /> to accept
              </p>
            </div>
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
