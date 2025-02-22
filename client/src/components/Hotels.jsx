import React from 'react'

const hotels = [
    {
      "name": "Burj Al Arab",
      "city": "Dubai",
      "country": "UAE",
      "category": "Luxury",
      "price_per_night": 1500,
      "currency": "USD",
      "duration": "Per Night",
      "image": "https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/hero/burj-al-arab-profile-exterior_6-4_landscape.jpg?h=1080&w=1620",
      "description": "One of the most luxurious hotels in the world, offering stunning architecture and top-tier hospitality."
    },
    {
      "name": "The Plaza Hotel",
      "city": "New York",
      "country": "USA",
      "category": "Luxury",
      "price_per_night": 1000,
      "currency": "USD",
      "duration": "Per Night",
      "image": "https://www.themilliardaire.com/en/wp-content/uploads/2014/10/the-plaza-hotel-new-york-4.jpg",
      "description": "A historic and iconic hotel in the heart of New York City, known for its grandeur and luxury."
    },
    {
      "name": "Ritz Paris",
      "city": "Paris",
      "country": "France",
      "category": "Luxury",
      "price_per_night": 1200,
      "currency": "USD",
      "duration": "Per Night",
      "image": "https://www.orminatours.com/wp-content/uploads/2018/07/France-Paris-The-Ritz-9.jpg",
      "description": "A prestigious hotel known for its elegance, history, and world-class service in Paris."
    },
    {
      "name": "Taj Lake Palace",
      "city": "Udaipur",
      "country": "India",
      "category": "Heritage Luxury",
      "price_per_night": 800,
      "currency": "USD",
      "duration": "Per Night",
      "image": "https://www.tata.com/content/dam/tata/images/newsroom/heritage/desktop/50_years_taj_lake_palace_banner_desktop_1920x1080.jpg",
      "description": "A stunning hotel on Lake Pichola offering royal heritage and unmatched beauty."
    },
    {
      "name": "Marina Bay Sands",
      "city": "Singapore",
      "country": "Singapore",
      "category": "Modern Luxury",
      "price_per_night": 900,
      "currency": "USD",
      "duration": "Per Night",
      "image": "https://www.jomjalan.com/wp-content/uploads/2019/03/marina-sands.jpg",
      "description": "A modern architectural marvel featuring an infinity pool with breathtaking city views."
    },
    {
      "name": "The Ritz-Carlton",
      "city": "Kyoto",
      "country": "Japan",
      "category": "Traditional Luxury",
      "price_per_night": 700,
      "currency": "USD",
      "duration": "Per Night",
      "image": "https://global-uploads.webflow.com/5cf16f74881a650c03c2f354/5ea1d4535b00b8683a6625da_50373940_2600x1585.jpg",
      "description": "A blend of traditional Japanese aesthetics and modern luxury, located along the Kamogawa River."
    }
  ]

const Hotels = () => {
  return (
    <section>
        <div className="">
            <p className=" text-3xl font-bold my-10 px-2">
                Most Luxury Hotels
            </p>

            <div className="grid gap-3  sm:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
                {
                    hotels.map((item,index)=>(
                        <div className=" p-2  " key={index}>
                            <div className="w-full h-full hover:scale-102 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">

                                <div className="h-60 overflow-hidden">
                                    <img 
                                    src={item.image} 
                                    className=' object-fill h-full w-full'
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
                                        <p className=" font-bold  ">${item.price_per_night}<span className='text-xs text-zinc-600 font-normal'>/night</span></p>
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
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Hotels