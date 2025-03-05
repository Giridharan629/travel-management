import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const Hotels = () => {

  const Navigate = useNavigate()
  const {setSelectedHotel, setFilteredHotels, hotels, setHotels} = useContext(AppContext)

  useEffect( ()=>{
    const getDetails = async ()=>{

      try {
        
        const {data} = await axios.get("http://localhost:8800/api/hotels/")
        // const {data} = await axios.get("http://localhost:4000/api/partner/get-top-hotels")

        // console.log(data)
        
        if(!data){
          setHotels([])
        }else{
          localStorage.setItem("allHotels", JSON.stringify(data))
          setHotels(data)
        }
        
      } catch (error) {
        
        alert("ther is some error in fetching hotel details")
        
      }
    }

    getDetails()
  },[])

  const relatedHotels = async(city)=>{

    console.log(city,"hello")
    try {

      const {data} = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/hotels/filter-hotels",{city:city})

      console.log(data)

      if(!data.success){
        setFilteredHotels([])
      }else{
        localStorage.setItem("filteredHotels", JSON.stringify(data.hotels))
        
        setFilteredHotels(JSON.parse( localStorage.getItem("filteredHotels")))
      }

      return

    } catch (error) {

      console.log(error.message)
      
    }
  }

  return (
    <section>
        <div className="">
            <p className=" text-3xl font-bold my-10 px-2">
                Most Luxury Hotels
            </p>

            <div className="grid gap-3  sm:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
                {
                    hotels?.filter((item)=>item.featured == true).map((item,index)=>(
                                                    
                          <div 
                          className=" p-2  0" 
                          key={item._id || index}
                          >
                            <div className="w-full h-full hover:scale-102 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">

                                <div className="h-60 overflow-hidden">
                                    <img 
                                    src={ item.photos[0] ||"/no_images.jpg"} 
                                    className=' object-cover h-full w-full'
                                    alt={item.name} />
                                    </div>

                                    <div className="p-4">
                                    <p className=" font-bold text-zinc-800 text-lg">{item.name}</p>
                                    <div className=" flex items-center gap-2 mt-2 text-sm">
                                    <i className="fa-solid fa-location-dot"></i>
                                    {item.city}
                                    </div>
                                    
                                    <div className="flex justify-between py-3 my-2 border-y-2 border-y-gray-200/70 ">
                                        <p className="">{item.type}</p>
                                        <p className=" font-bold  ">${item.cheapestPrice}<span className='text-xs text-zinc-600 font-normal'>/night</span></p>
                                    </div>
                                    <div className=" my-5">

                                        <p className="text-zinc-700 max-h-[100px] overflow-hidden flex flex-col h-[120px] justify-between">
                                            {
                                              item.desc
                                            }
                                        </p>
                                      </div>
                                      <button 
                                      className='btn-primary max-sm:mt-2 max-sm:text-xs w-fit text-white tracking-wider hover:tracking-widest transition-all cursor-pointer'
                                      onClick={()=>{
                                        localStorage.setItem("selectedHotel", JSON.stringify(item))
                                        setSelectedHotel(item)
                                        relatedHotels(item.city)
                                        Navigate("/book-hotel")
                                      }}
                                      >
                                        Details 
                                        <i className="fa-solid fa-circle-info"></i>
                                      </button>

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