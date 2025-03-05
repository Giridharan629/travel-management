import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Catagory = () => {

    const images = [
        "https://digital.ihg.com/is/image/ihg/even-hotels-eugene-5405616297-4x3",
        "https://www.mues.us/wp-content/uploads/2021/03/exterior_new-scaled-e1616805070908-2048x1024.jpg",
        "https://wallpaperaccess.com/full/902484.jpg",
        "https://wallpaperaccess.com/full/4722330.jpg",
        "https://images5.alphacoders.com/364/364342.jpg"

    ]

    const [catagorys, setCatagorys] = useState([])

    useEffect(()=>{

        const getCatagory = async ()=>{

            
            try {
                
                const {data} = await axios.get("http://localhost:8800/api/hotels/countByType")

                // console.log(data)

                if(data.length === 0){
                    return
                }
                
                setCatagorys(data)
                
            } catch (error) {
                
                console.log(error.message)
                
            }
            
        }

        getCatagory()
    },[])

  return (
    <div className='container mx-auto px-5'>

        <p className=" text-3xl font-bold my-10 px-2">
            Property type
        </p>
        
        <div className=" flex overflow-auto ">

            {
                catagorys.length !==0 ?
                catagorys.map((item,index)=>(
                    <div key={index} className=" text-white  relative overflow-hidden flex items-end p-2 capitalize gap-1 h-40 min-w-60 m-3 rounded-xl ">
                        <img 
                        src={images[index]} 
                        className='absolute -z-10 top-0 left-0  h-full origin-center object-cover w-full '
                        alt="" />
                        <div className=" flex items-center gap-1 bg-black/70 px-2 rounded-2xl">
                            <p>{item.type}</p>
                            <p>{item.count}</p>
                        </div>
                    </div>
                )):<></>
            }

        </div>
    </div>
  )
}

export default Catagory