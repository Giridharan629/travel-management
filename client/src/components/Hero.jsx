import React from 'react'
import Header from './Header'

const Hero = () => {
  return (
    <div>
        <div className='min-h-[100dvh] '>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/maldiv_bag.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="w-full h-full  bg-sky-400 absolute mix-blend-multiply">hello</div>

          <div className="absolute max-sm:mt-10 text-white top-[50%] left-[50%] translate-[-50%] container mx-auto px-10  ">

            <p className='font-thin mb-3 max-sm:text-xs max-sm:mb-2'>OUR PACKAGES</p>

            <h3 className='text-4xl max-sm:text-xl font-bold mb-10 max-sm:mb-5 tracking-wider'
            >
              Search your Holiday
            </h3>

            <div className=" relative grid gap-3 max-sm:flex max-sm:flex-col grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]  w-full bg-white text-zinc-800 p-5 pb-15 py-10 rounded-xl" >

              <div className="w-full ">


                <p className='mb-5 text-sm'>Search your destination:</p>


                <div className='flex items-center justify-between px-3 h-10 bg-gray-200 rounded-full text-zinc-800'>
                  <input 
                  type="text" 
                  className='h-full w-full outline-0 text-sm mr-2'
                  placeholder='Enter destination here'
                  />
                  <i className="fa-solid fa-location-dot text-xl text-zinc-700"></i>
                </div>

          
              </div>

              <div className="w-full ">


                <p className='mb-5 text-sm'>Select your Date:</p>


                <div className='flex items-center justify-between px-3 h-10 bg-gray-200 rounded-full text-zinc-800'>
                  <input 
                  type="text" 
                  className='h-full w-full outline-0 text-sm mr-2'
                  placeholder='dd/mm/yyy'
                  />
                    <i className="fa-solid fa-calendar-days"></i>
                </div>
              
          
              </div>

              <div className="w-full">

                <div className="mb-5 text-sm flex justify-between">
                  <p className=''>
                    Max price:
                  </p>
                  <p>$5000</p>
                </div>


                <div className='flex items-center justify-between px-3 h-10 bg-gray-200 rounded-full text-zinc-800'>
                  <input 
                  type="range" 
                  className='h-full w-full outline-0 text-sm mr-2'
                  />
                </div>

          
              </div>

              <button
              className='btn-primary max-sm:text-xs flex items-center gap-2 absolute left-[50%] bottom-[-18px] translate-x-[-50%] text-sm cursor-pointer hover:scale-102  '
              >
                MORE FILTERS 
                <i className="fa-solid fa-filter"></i> 
              </button>

            </div>

            {/* =========links======= */}

            <div className="flex gap-5 text-xl mt-10">
              <i className=" cursor-pointer hover:scale-110 fa-brands fa-facebook"></i>
              <i className=" cursor-pointer hover:scale-110 fa-brands fa-square-instagram"></i>
              <i className=" cursor-pointer hover:scale-110 fa-brands fa-square-x-twitter"></i>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Hero