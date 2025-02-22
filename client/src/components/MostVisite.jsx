import React from 'react'


const destinations =  [
    {
      "name": "Maldives",
      "city": "Male",
      "country": "Maldives",
      "category": "Luxury Relax",
      "price": 300,
      "image": "https://the-travelcenter.com/wp-content/uploads/2020/07/106616793-1594805802117gettyimages-900809876-scaled.jpg",
      "description": "A tropical paradise with crystal-clear waters, white sandy beaches, and luxurious overwater bungalows."
    },
    {
      "name": "Disneyland",
      "city": "Orlando",
      "country": "USA",
      "category": "Entertainment",
      "price": 150,
      "image": "https://www.tripsavvy.com/thmb/LCINurZ9u4CBjUgNKH4-4o0lJNE=/2048x1365/filters:fill(auto,1)/12372879563_d7d347f9e5_k-5c40d51a46e0fb0001d4a2e6.jpg",
      "description": "The happiest place on Earth, offering thrilling rides, magical parades, and beloved Disney characters."
    },
    {
      "name": "Swiss Alps",
      "city": "Zermatt",
      "country": "Switzerland",
      "category": "Adventure Relax",
      "price": 200,
      "image": "https://wallpaperaccess.com/full/5434876.jpg",
      "description": "A breathtaking mountain range perfect for skiing, snowboarding, and stunning scenic views."
    },
    {
      "name": "Bora Bora",
      "city": "Bora Bora",
      "country": "French Polynesia",
      "category": "Luxury Relax",
      "price": 400,
      "image": "https://th.bing.com/th/id/R.8ce64444e6a3ce811ab5059cf5e2919f?rik=66tNDZgY3NdIYw&riu=http%3a%2f%2fbeautifulplacestovisit.com%2fwp-content%2fuploads%2f2010%2f04%2fBora_Bora_French_Polynesia41.jpg&ehk=LnBAzlyUKkxPXSU5yCZzmXezRIMIupu7XrX2NfFgMOI%3d&risl=&pid=ImgRaw&r=0",
      "description": "A dreamy island getaway with turquoise waters, coral reefs, and luxurious resorts."
    },
    {
      "name": "Tokyo Disneyland",
      "city": "Tokyo",
      "country": "Japan",
      "category": "Entertainment",
      "price": 120,
      "image": "https://tripplanet.ru/wp-content/uploads/asia/japan/tokyo/tokyo-disneyland.jpg",
      "description": "An exciting theme park blending Japanese culture with classic Disney magic."
    },
    {
      "name": "Banff National Park",
      "city": "Alberta",
      "country": "Canada",
      "category": "Adventure Nature",
      "price": 100,
      "image": "https://peakvisor.com/img/news/banff-national-park.jpg",
      "description": "A spectacular national park with turquoise lakes, snow-capped mountains, and diverse wildlife."
    }
  ]

const MostVisite = () => {
  return (
    <section>
        <div className="">
        <p className=" max-sm:text-xl text-3xl font-bold my-10 px-2">
        Most visited destinations
            </p>

            <div className=" grid gap-3 sm:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
                {
                    destinations.map((item,index)=>(
                        <div className=" p-2  " key={index}>
                            <div className=" hover:scale-102 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">

                                <div className="h-60 max-sm:h-40   overflow-hidden">
                                    <img 
                                    src={item.image} 
                                    className=' object-cover h-full w-full'
                                    alt="" />
                                </div>

                                <div className="p-4">
                                    <p className=" font-bold text-zinc-800 text-lg">{item.name}</p>
                                    <div className=" flex items-center gap-2 mt-2 text-sm">
                                        <i className="fa-solid fa-location-dot"></i>
                                        {item.country}
                                    </div>
                                    
                                    <div className="flex justify-between py-3 my-2 border-y-2 border-y-gray-200/70 ">
                                        <p className="">{item.category}</p>
                                        <p className=" font-bold  ">${item.price}</p>
                                    </div>

                                    <p className="text-zinc-700 my-5 flex flex-col h-[120px] justify-between">
                                        {
                                            item.description
                                        }
                                    <button className='btn-primary max-sm:mt-2 max-sm:text-xs max-sm:tracking-wider w-fit text-white tracking-wider hover:tracking-widest transition-all cursor-pointer'>Details <i className="fa-solid fa-circle-info"></i></button>
                                    </p>

                                </div>

                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default MostVisite