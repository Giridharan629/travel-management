import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const HotelBooking = () => {

    const {selectedHotel, filteredHotels, setSelectedHotel, hotels} = useContext(AppContext)

    
    const Navigate = useNavigate()
    const [view, setView] = useState(false)
    const [period, setPeriod] = useState(1)
    const [rooms, setRooms] = useState([])
    const [selectedRooms, setSelectedRooms] = useState([]);
    const [dates, setDates ] = useState([])
    const [warning, setWarning] = useState(false)
    const [image, setImage] = useState(selectedHotel?.photos[0])

    const oneDay = 1000 * 60* 60 * 24
    const newDate = new Date()
    // console.log(newDate.getTime(), newDate)

    
    const getDates = (e)=>{
        const currentDate = new Date()
        
        const selectedDate = new Date(e.target.value)
        
        currentDate.setHours(0,0,0,0)
        selectedDate.setHours(0,0,0,0)
        
        // console.log(currentDate.getTime() , selectedDate.getTime())
        
        if(currentDate.getTime() > selectedDate.getTime() ){
            setWarning(true)
        }
        else{
            setWarning(false)

            // console.log(new Date(newDate.getTime() + oneDay*3))

            const dates = []
            
            let i = 0
            while (i< period){
                const date = new Date( selectedDate.getTime() + oneDay * i )
                
                dates.push(date.getTime())

                i++
            }

            setDates(dates)


        }

    }



    const isAvailable = (roomNumber) => {
        const unavailableDates = roomNumber.unavailableDates || [];
        
        // Convert unavailable dates to timestamps for easier comparison
        const unavailableTimes = unavailableDates.map(date => new Date(date).getTime());
        console.log("unavailable times",unavailableTimes,"dates", dates)
    
        // Check if any selected date overlaps with unavailable dates
        const isFound = dates.some(time => unavailableTimes.includes(time));
    
        return !isFound; // Room is available only if no overlap is found
    };
    



    const handleclick = (e)=>{
        e.preventDefault()
        setView(true)
    }

    useEffect(() => {
        const storedHotel = localStorage.getItem("selectedHotel");
        if (storedHotel) {
            setSelectedHotel(JSON.parse(storedHotel));
        }
    }, []);


    const getRooms = async (e) => {
        e.preventDefault()
        try {
            
            const {data} = await axios.get(`http://localhost:8800/api/hotels/room/${selectedHotel?._id}`)

            if(data){
                setRooms(data)
            }
            else{
                return
            }
        } catch (error) {

            console.log(error.message)
            
        }
    }

    const handleSelect = (e)=>{

        const checked = e.target.checked
        const value = e.target.value

        setSelectedRooms(
            checked 
            ? 
            [...selectedRooms, value] 
            : 
            selectedRooms.filter(item => item !== value)
        )

    }

    const handleBook = async (e) => {

        e.preventDefault()

        try {

            await Promise.all(selectedRooms.map(roomId=>{
                const {data} = axios.put(`http://localhost:8800/api/rooms/availability/${roomId}`,{dates:dates})

                if(data){
                    return console.log("success")
                }else{
                    return console.log("unsuccessful booking")

                }

            }))
            
        } catch (error) {

            console.log(error.message)
            
        }
        
    }


  return (
    <div id='top' className='container mx-auto px-5 my-20 '>
        <div className=" lg:flex w-full relative gap-5 ">
            <div className="relative lg:max-w-[50%] lg:min-w-[50%] min-h-full">

            <div className="relative rounded-sm max-h-[400px]  min-h-[400px] max-sm:min-h-fit max-sm:maxh-[400px] max-sm:overflow-y-hidden shadow-lg lg:h-fit lg:max-w-full w-full h-full  overflow-hidden">
                {
                    selectedHotel?.photos.length > 0 ?
                        <img 
                        src="/premium.png" 
                        className='absolute top-0 left-0 max-sm:w-14 w-17'
                        alt="" 
                        /> : null
                    }
                <img 
                src={ image ||"/no_images.jpg" } 
                className=' min-h-[400px] max-h-[400px] w-auto max-sm:min-h-fit mx-auto'
                alt="" />
                
                <img 
                src={ image ||"/no_images.jpg" } 
                className=' absolute -z-5 min-w-full top-0 left-0 blur-2xl opacity-50'
                alt="" />

            </div>

            <div className="flex my-5 overflow-x-auto overflow-y-hidden  relative h-20 max-sm:h-auto gap-3 ">
                {
                    selectedHotel?.photos.length > 1 ? 
                    selectedHotel?.photos.map((image,index)=>(
                        <>
                        <div key={index} className=" max-h-20 max-sm:max-h-20 max-sm:min-h-20 max-sm:min-w-20 max-sm:max-w-20 relative rounded-sm overflow-hidden cursor-pointer">
                            <img
                            src={image}
                            className='rounded-sm hover:scale-103 transition-all h-full'
                            onClick={()=>setImage(image)}
                            />
                        </div>
                        </>
                    )):<></>
                }
            </div>
            </div>


            <div className=" relative container   ">



                    <div className=" flex items-center justify-between my-5 ">
                        <p className="heading">{selectedHotel?.name}</p>

                        <div className="flex items-center gap-1">

                            <p className='mb-[-3px]'>{selectedHotel?.rating}</p>

                            <div className="star relative flex w-fit text-amber-500">
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>

                                <div className="rating-star flex absolute top-0 left-0 overflow-hidden  w-[90%]">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            
                            <p className=" text-sm text-gray-500">(6,845)</p>

                        </div>
                    </div>


                    <div className="">
                        <p className="text-sm text-gray-700">{selectedHotel?.desc}</p>
                    </div>
                    <div className=" text-4xl max-sm:text-2xl flex items-end mt-5 ">
                        <p className='text-red-400 relative'>-30% 
                            <span className='text-black text-xs absolute ml-3 top-1 ' > $</span>
                            <span className=" text-black ml-5 ">{selectedHotel?.cheapestPrice}</span>
                        </p>
                        <p className=' text-sm pb-1 ml-1 ' >/ night</p>
                    </div>
                    <div className="my-1">
                        <p className='font-light text-zinc-700'>M.R.P: <span className="line-through ">${selectedHotel?.cheapestPrice * .3 + selectedHotel?.cheapestPrice}</span></p>
                    </div>
                    <div className=" border-t-2 border-gray-500/20 mt-5 py-5">
                        <p className="">Inclusion</p>

                        <div className=" flex rounded-2xl overflow-hidden my-3 border-1 border-gray-400/40 ">
                            <img 
                            src="https://i1.wp.com/magzhouse.com/wp-content/uploads/2020/01/The-Best-Modern-Bedroom-Furniture-To-Get-Luxury-Accent-25.jpg?fit=1024,1024&ssl=1" 
                            className='w-20'
                            alt="" 
                            />
                            <div className=" text-sm m-2 ">
                                <p className="text-zinc-900">Luxe Twin Room</p>
                                <p className=" text-zinc-600">Twin Bed | 200 sq.ft | 2 Adults</p>
                            </div>
                        </div>
                            <ul className='list-disc text-zinc-600 ml-4 text-sm'>
                                <li>No meals included</li>
                                <li>Non-Refundable</li>
                            </ul>
                        </div>

                        <div className="">
                            <p className=" mt-5 mb-1">Address :</p>
                            <p className="text-sm text-zinc-600">
                                {selectedHotel?.address},
                            </p>
                            <p className="text-sm text-zinc-600">
                                {selectedHotel?.city    }.
                            </p>
                            <p className='mt-5 mb-1'>Distance :</p>
                            <p className="text-sm text-zinc-600">
                                {selectedHotel?.distance}.
                            </p>
                        </div>

                        <button 
                        className={` mt-5 text-sky-500 cursor-pointer hover:tracking-wider transition-all duration-700 overflow-hidden ${view ? "h-0":" h-6 "} `} 
                        onClick={(e)=>{
                            handleclick(e)
                            getRooms(e)
                        }} 
                        >
                            Wanna Book now ?
                        </button>

                        <div className={`booking-option rounded-2xl w-full bg-zinc-200/60 overflow-auto transition-all duration-1000 ${view ? "max-h-[10000px] p-3": "max-h-0 p-0"} `}>
                            <div className="w-full">
                                <p>When you want the room to stay ?</p>
                                <input 
                                type="date" 
                                // value={date}
                                onChange={getDates}
                                className=' cursor-pointer bg-white w-full my-3 sm:w-[50%] p-2 border-2 border-gray-300 rounded-lg ' 
                                />
                                {
                                    warning && <p className='text-red-500 text-sm animate-bounce'>Starting date can't be lesser than current Date </p>
                                }
                            </div>
                            <div className=" mt-3">
                                <p>How long you gonna stay here ?</p>
                                <div className="flex bg-white px-3 rounded-lg my-3">
                                    <input 
                                    type="range" 
                                    value={period}
                                    min={1} 
                                    max={30}  
                                    className=' w-[100%] max-sm:w-full my-3 cursor-pointer '
                                    onChange={e=>setPeriod(e.target.value)}
                                    />
                                    <p className='w-[110px] m-auto pl-2 text-right'>{period} day{period>1 ? "'s": ""}</p>
                                </div>
                            </div>

                            <p className='mt-5'>Select your room's</p>
                            <div className=' overflow-hidden mt-5 rounded-lg flex flex-col gap-2'>
                                {
                                    rooms?.length !== 0 ?

                                        rooms?.map((item, index)=>(
                                            <div className=" p-3 w-full bg-white flex justify-between max-sm:flex-col " key={index}>
                                                <div className=" min-w-[50%]">
                                                    <div className="">
                                                        <p className='' >{item?.title}</p>
                                                    </div>
                                                    <div className="flex mt-2">
                                                        <p> Max People : </p>
                                                        <p className='ml-2' > {item?.maxPeople}</p>
                                                    </div>
                                                    <div className="flex mt-2">
                                                        <p className='min-w-[100px]'> description : </p>
                                                        <p className='ml-2' > {item?.desc}</p>
                                                    </div>
                                                </div>
                                                    <div className="mt-5 sm:invisible sm:hidden">
                                                        Room numbers :
                                                    </div>
                                                <div className="flex gap-5 flex-wrap justify-end max-sm:mt-5 max-sm:justify-start">


                                                    {
                                                        item?.roomNumbers.length !==0 ?
                                                        item?.roomNumbers.map((roomNumber,index)=>(
                                                            <div key={index} className=" flex flex-col w-fit items-center justify-center ">
                                                                <p className='text-xs' >{roomNumber.number}</p>
                                                                <input type="checkbox" 
                                                                value={roomNumber._id} 
                                                                onChange={handleSelect}
                                                                disabled={!isAvailable(roomNumber)}
                                                                name="" 
                                                                id="" 
                                                                className='h-5 w-5 accent-sky-400 cursor-pointer'
                                                                />
                                                            </div>
                                                        ))
                                                        :<></>
                                                    }
                                                </div>
                                            </div>
                                        ))
                                        
                                        :<></>
                                    }


                            </div>
                                    <button onClick={(e)=>{
                                        handleBook(e)
                                        Navigate("/")
                                    }} className='btn-primary mt- w-full mt-5 hover:tracking-wider transition-all cursor-pointer' >Book Now</button>

                        </div>


                </div>


        </div>

        <p className='mt-10 mb-3 text-2xl'>Hotels related to your city</p>
                        <div className=" overflow-hidden flex  overflow-x-auto  ">
                            {
                                filteredHotels?.length !== 0?
                                filteredHotels
                                ?.map((item, index)=>(
                                                            
                          <div 
                          className=" p-2 my-4 min-w-80 max-w-[350px] " 
                          key={item._id || index}
                          >
                            <div className="w-full h-full hover:scale-102 rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200">

                                <div className="h-60 overflow-hidden">
                                    <img 
                                    src={ item?.photos[0] ||"/no_images.jpg"} 
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
                                      <a href="#top">
                                      <button 
                                      className='btn-primary max-sm:mt-2 max-sm:text-xs w-fit text-white tracking-wider hover:tracking-widest transition-all cursor-pointer'
                                      onClick={()=>{
                                        localStorage.setItem("selectedHotel", JSON.stringify(item))
                                        setSelectedHotel(item)
                                        
                                      }}
                                      >
                                        Details 
                                        <i className="fa-solid fa-circle-info"></i>
                                      </button>
                                        </a>

                                  </div>
                                    
                                </div>
                                    
                              </div>
                                ))
                                :<>
                                <p>No Relation found</p>
                                </>
                            }
                        </div>
        
                <div className=" w-full grid place-items-center mt-10">
                    <button onClick={()=>Navigate("/")} className='btn-primary  cursor-pointer hover:scale-102'>Back</button>
                </div>
    </div>
  )
}

export default HotelBooking