import React from 'react'

const Navbar = (
  {
    toggle
  }
) => {


  return (
    <div>
        <div className="">
            <ul className={`absolute max-lg:shadow-2xl max-lg:bg-white text-zinc-600 text-sm w-[90%] p-5 lg:p-0 rounded-2xl  flex flex-col top-0 left-[50%] translate-x-[-50%] text-center lg:translate-0 lg:static lg:flex-row gap-5 transition-transform ${toggle ? "max-lg:translate-y-25" : "max-lg:mt-[-150%]"} `}>
                <li className='cursor-pointer hover:scale-102 transition-transform'>Home</li>
                <li className='cursor-pointer hover:scale-102 transition-transform'>Packages</li>
                <li className='cursor-pointer hover:scale-102 transition-transform'>Shop</li>
                <li className='cursor-pointer hover:scale-102 transition-transform'>About</li>
                <li className='cursor-pointer hover:scale-102 transition-transform'>Pages</li>
                <li className='cursor-pointer hover:scale-102 transition-transform'>News</li>
                <li className='cursor-pointer hover:scale-102 transition-transform'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar