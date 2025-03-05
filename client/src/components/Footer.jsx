import React from 'react'

const Footer = () => {
  return (
    <div className='relative'>
        <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
          >
            <source src="/ocean_loop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="w-full h-full bg-sky-400 absolute top-0 left-0 -z-5 mix-blend-multiply"></div>

          

        <div className='relative grid place-items-center w-full z-8 container mx-auto py-20'>
          <div className=" relative text-white flex max-sm:flex-col gap-5 items-center">

              <div className="">
                <p className='text-xs' >KEEP IN TOUCH</p>
                <p className="text-4xl">Travel with us</p>
              </div>
              
              <input 
              type="text"  
              placeholder='Enter email id'
              className='outline-2 backdrop-blur-2xl bg-white/20 focus:outline-white rounded-full px-3 py-2'
              />

              <button className='btn-primary font-normal tracking-wide cursor-pointer' >SEND <i className="fa-solid fa-paper-plane"></i></button>

          </div>

          <div className=" relative overflow-hidden flex flex-wrap mt-10 max-lg:w-[90%] bg-white p-10 pb-20 rounded-2xl">
            <div className="">

              <img 
              src="/logo.png" 
              alt="" 
              className='w-[100px]'
              />

              <p className="text-sm text-zinc-700 sm:min-w-[350px] max-sm:w-full max-w-[500px] mt-5 ">
                Lorem ipsum dolor sit  veritatis eius illum officia commodi. Et impedit molestiae quis nulla doloremque doloribus a, laborum debitis ratione? Minima unde libero quae minus?
              </p>

              <div className="flex gap-5 text-xl mt-10">
              <i className=" cursor-pointer hover:scale-110 fa-brands fa-facebook"></i>
              <i className=" cursor-pointer hover:scale-110 fa-brands fa-square-instagram"></i>
              <i className=" cursor-pointer hover:scale-110 fa-brands fa-square-x-twitter"></i>
            </div>

            </div>

            <div className=" flex flex-wrap max-sm:justify-center max-sm:text-center justify-between mt-10 w-full">

                <div className=" min-w-[150px]  grid justify-items-center">
                  <p className="max-sm:mt-5">
                    OUR AGENCY
                  </p>
                    <div className="grid gap-2 mt-5 text-sm text-zinc-700">
                      <p className='cursor-pointer hover:text-sky-700 hover:translate-x-2 transition-all'>  Service</p>
                      <p className='cursor-pointer hover:text-sky-700 hover:translate-x-2 transition-all'>  Agency</p>
                      <p className='cursor-pointer hover:text-sky-700 hover:translate-x-2 transition-all'>  Turism</p>
                      <p className='cursor-pointer hover:text-sky-700 hover:translate-x-2 transition-all'>  Insurance</p>
                      <p className='cursor-pointer hover:text-sky-700 hover:translate-x-2 transition-all'>  Payment</p>
                    </div>
                </div>
                <div className="min-w-[150px] grid justify-items-center ">
                  <p className=" max-sm:mt-5">
                    OUR AGENCY
                  </p>
                    <div className="grid gap-2 mt-5 text-sm text-zinc-700">
                      <p className='cursor-pointer hover:text-sky-700 hover:translate-x-2 transition-all'>Service</p>
                      <p className='cursor-pointer hover:text-sky-700 hover:translate-x-2 transition-all'>Agency</p>
                      <p className='cursor-pointer hover:text-sky-700 hover:translate-x-2 transition-all'>Turism</p>
                      <p className='cursor-pointer hover:text-sky-700 hover:translate-x-2 transition-all'>Insurance</p>
                      <p className='cursor-pointer hover:text-sky-700 hover:translate-x-2 transition-all'>Payment</p>
                    </div>
                </div>
                <div className="min-w-[150px] grid justify-items-center ">
                  <p className=" max-sm:mt-5">
                    OUR AGENCY
                  </p>
                    <div className=" grid gap-2 mt-5 text-sm text-zinc-700 ">
                      <p className='cursor-pointer hover:text-sky-700 hover:translate-x-2 transition-all'>Service</p>
                      <p className='cursor-pointer hover:text-sky-700 hover:translate-x-2 transition-all'>Agency</p>
                      <p className='cursor-pointer hover:text-sky-700 hover:translate-x-2 transition-all'>Turism</p>
                      <p className='cursor-pointer hover:text-sky-700 hover:translate-x-2 transition-all'>Insurance</p>
                      <p className='cursor-pointer hover:text-sky-700 hover:translate-x-2 transition-all'>Payment</p>
                    </div>
                </div>
            </div>


            <div className="bg-sky-400 absolute bottom-0 w-full left-0 text-center text-white py-3"> all copyrights reserved</div>
          </div>


        </div>

    </div>
  )
}

export default Footer