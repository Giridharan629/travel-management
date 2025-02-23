import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Hotels = () => {

  const [hotels, setHotels] = useState([])

  useEffect( ()=>{
    const getDetails = async ()=>{

      try {
        
        const {data} = await axios.get("http://localhost:4000/api/partner/get-top-hotels")
        
        if(!data.success){
          setHotels([])
        }else{
          setHotels(data.hotels)

        }
        
      } catch (error) {
        
        alert("ther is some error in fetching hotel details")
        
      }
    }

    getDetails()
  },[])

  return (
    <section>
        <div className="">
            <p className=" text-3xl font-bold my-10 px-2">
                Most Luxury Hotels
            </p>

            <div className="grid gap-3  sm:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
                {
                    hotels
                    .filter((item)=> item.isVerified)
                    .slice(0,6)
                    .map((item,index)=>(
                                                    
                          <div className=" p-2  " key={item._id || index}>
                            <div className="w-full h-full hover:scale-102 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">

                                <div className="h-60 overflow-hidden">
                                    <img 
                                    src={item.image} 
                                    className=' object-fill h-full w-full'
                                    alt={item.name} />
                                    </div>

                                    <div className="p-4">
                                    <p className=" font-bold text-zinc-800 text-lg">{item.name}</p>
                                    <div className=" flex items-center gap-2 mt-2 text-sm">
                                    <i className="fa-solid fa-location-dot"></i>
                                    {item.city}
                                    </div>
                                    
                                    <div className="flex justify-between py-3 my-2 border-y-2 border-y-gray-200/70 ">
                                        <p className="">{item.category}</p>
                                        <p className=" font-bold  ">${item.pricePerNight}<span className='text-xs text-zinc-600 font-normal'>/night</span></p>
                                    </div>

                                    <p className="text-zinc-700 my-5 flex flex-col h-[120px] justify-between">
                                        {
                                            item.description
                                        }
                                    <button className='btn-primary max-sm:mt-2 max-sm:text-xs w-fit text-white tracking-wider hover:tracking-widest transition-all cursor-pointer'>Details <i className="fa-solid fa-circle-info"></i></button>
                                    </p>

                                  </div>
                                    
                                </div>
                                    
                              </div>
                            )
                    )
                }
            </div>

        </div>
    </section>
  )
}

export default Hotels