import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

const SearchResult = () => {

    const {filteredHotels, setFilteredHotels,setSelectedHotel} = useContext(AppContext)
    const Navigate = useNavigate()

    useEffect(()=>console.log(filteredHotels))

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
    <div className='mb-5 mt-30 min-h-[100dvh] container mx-auto'>
        
        <div className="">
            <p className=" text-3xl font-bold my-10 px-2">
                Matched results
            </p>

            <div className="grid gap-3  sm:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
                {
                    filteredHotels?.length !==0 ?
                    filteredHotels
                    ?.map((item,index)=>(
                                                    
                          <div className=" p-2 max-w-[400px] mx-auto w-full " key={item._id || index}>
                            <div className="w-full h-full hover:scale-102 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">

                                <div className="h-60 overflow-hidden">
                                    <img
                                    src={ item.photos[0] ||"/no_images.jpg"} 
                                    className=' object-cover h-full w-full'
                                    // alt={item.name} 
                                    />
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

                                    <p 
                                    className="text-zinc-700 my-5 flex flex-col h-[120px] justify-between"
                                    onClick={()=>{
                                        localStorage.setItem("selectedHotel", JSON.stringify(item))
                                        setSelectedHotel(item)
                                        relatedHotels(item.city)
                                        Navigate("/book-hotel")
                                      }}
                                    >
                                        {
                                            item.desc
                                        }
                                    <button className='btn-primary max-sm:mt-2 max-sm:text-xs w-fit text-white tracking-wider hover:tracking-widest transition-all cursor-pointer'>Details <i className="fa-solid fa-circle-info"></i></button>
                                    </p>

                                  </div>
                                    
                                </div>
                                    
                              </div>
                            )
                    ):
                    <div className="ml-3">
                        <p className='text-2xl'></p>
                        <p>No matches found</p>
                    </div>
                }

            </div>
            {
                filteredHotels?.length ===0 &&
                <div className=" w-full grid place-items-center ">
                    <img 
                    src="/no_matches.webp" 
                    className='w-full sm:w-80'
                    alt="" />
                    <p className="text-2xl text-zinc-600">Oops</p>
                </div>
            }
                <div className=" w-full grid place-items-center mt-10">
                    <button onClick={()=>Navigate("/")} className='btn-primary  cursor-pointer hover:scale-102'>Back</button>
                </div>

        </div>
    </div>
  )
}

export default SearchResult