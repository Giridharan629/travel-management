import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { toast } from 'react-toastify'
import axios from 'axios'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const [input, setInput] = useState("")
  const [name, setName] = useState(null)
  const [range, setRange] = useState(1000)
  const [catagory, setCatagory] = useState(null)
  const [selectedCatagory, setSelectedCatagory] = useState("");

  const Navigate = useNavigate()

  const {setFilteredHotels} = useContext(AppContext)

  const handleChange = (event) => {
    setSelectedCatagory(event.target.value);
  };

  const handleSearch = async(e)=>{
    try {

      if(e.target.value !== ""){
        
        const {data} = await axios.post("http://localhost:8800/api/hotels/hotel-names",{city:e.target.value.trim()})

        console.log(data)
        
        if(!data.success){
          setName(null)
        }else{
          setName(data.hotels)
        }

      }else{

        setName(null)

      }
      
    } catch (error) {

      toast.error(error.message)
      
    }
  }

  useEffect(()=>{
    const getCatagory = async () => {

      try {
        
        const {data} = await axios.get("http://localhost:8800/api/hotels/hotel-types")

        // console.log(data)

        if(!data.success){
          return
        }else{
          setCatagory(data.catagory)
          return
        }

      } catch (error) {

        console.log(error.message)
        
      }
      
    }
    getCatagory()

  },[])

  const handleFilter = async ()=>{
    try {

      let query = {
        range: range
      }

      if(input !== ""){
        query.city = input
      }
      if(selectedCatagory !== ''){
        query.type = selectedCatagory
      }


      const {data} = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/hotels/filter-hotels",query)

      if(!data.success){
        setFilteredHotels([])
        Navigate("/search-result")
      }else{
        localStorage.setItem("filteredHotels", JSON.stringify(data.hotels))
        
        setFilteredHotels(JSON.parse( localStorage.getItem("filteredHotels")))
        Navigate("/search-result")
      }
      
    } catch (error) {

      console.log(error.message)
      
    }
  }



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
          <div className="w-full h-full  bg-sky-400 absolute top-0 mix-blend-multiply"></div>

          <div className="absolute max-sm:mt-10 text-white top-[50%] left-[50%] translate-[-50%] container mx-auto px-10  ">

            <p className='font-thin mb-3 max-sm:text-xs max-sm:mb-2'>OUR PACKAGES</p>

            <h3 className='text-4xl max-sm:text-xl font-bold mb-10 max-sm:mb-5 tracking-wider'
            >
              Search your suitable Hotels
            </h3>

            <div className=" relative grid gap-3 max-sm:flex max-sm:flex-col grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]  w-full bg-white text-zinc-800 p-5 pb-15 py-10 rounded-xl" >

              <div className="w-full ">


                <p className='mb-5 text-sm'>Search your destination:</p>


                <div className='relative flex items-center justify-between px-3 h-10 bg-gray-200 rounded-full text-zinc-800'>
                  <input 
                  type="text" 
                  value={input}
                  className='h-full w-full outline-0 text-sm mr-2'
                  placeholder='Enter destination here'
                  onChange={(e)=>{
                    setInput(e.target.value)
                    handleSearch(e)
                  }}
                  />
                  <i className="fa-solid fa-location-dot text-xl text-zinc-700"></i>

                    {
                      name !== null ? 
                        <div className="absolute z-20 top-full overflow-hidden left-0 w-full bg-gray-100 mt-2 border-2 border-gray-300 rounded-xl max-h-[300px] overflow-y-auto ">
                          {

                            name.map((data, index)=>(
                              <p 
                              onClick={()=>{
                                setInput(data.city)
                                setName(null)
                              }}
                              className=" py-2 px-3 hover:bg-white cursor-pointer" key={index}>
                                {data.city}
                              </p>
                            ))
                          }
                        </div>
                        
                        : null
                      
                    }
                </div>

          
              </div>

              <div className="w-full ">


                <p className='mb-5 text-sm'>Select Catagory:</p>


                <div className='flex items-center justify-between px-3 h-10 bg-gray-200 rounded-full text-zinc-800'>
                <select className='w-full h-full cursor-pointer outline-0' value={selectedCatagory} onChange={handleChange}>
                  <option value="" disabled>Select an option</option>
                  {
                    catagory !== null ?
                    catagory.map((data,index)=>(
                      <option key={index} value={data}>{data}</option>

                    )):<></>
                  }
                </select>
                </div>
              
          
              </div>
              

              <div className="w-full">

                <div className="mb-5 text-sm flex justify-between">
                  <p className=''>
                    Max price:
                  </p>
                  <p>${range}</p>
                </div>


                <div className='flex items-center justify-between px-3 h-10 bg-gray-200 rounded-full text-zinc-800'>
                  <input 
                  type="range" 
                  min={0}
                  max={5000}
                  value={range}
                  onChange={(e)=>setRange(e.target.value)}
                  className='h-full w-full cursor-pointer outline-0 text-sm mr-2'
                  />
                </div>

          
              </div>

              <button
              className='btn-primary max-sm:text-xs flex items-center gap-2 absolute left-[50%] bottom-[-18px] translate-x-[-50%] text-sm cursor-pointer hover:scale-102  '
              onClick={()=>{
                console.log(input,selectedCatagory, range)
                handleFilter()
              }}
              >
                APPLY FILTERS 
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