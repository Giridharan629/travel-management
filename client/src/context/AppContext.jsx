import { createContext, useEffect, useState } from "react";


export const AppContext =  createContext()

export const AppContextProvider = (props) =>{

    const [filteredHotels, setFilteredHotels] = useState(null)
    const [selectedHotel,setSelectedHotel] = useState(null)
    const [hotels, setHotels] = useState([])

    const value = {
        filteredHotels, setFilteredHotels,
        selectedHotel, setSelectedHotel,
        hotels, setHotels
    }

    useEffect(()=>{
        setFilteredHotels(JSON.parse( localStorage.getItem("filteredHotels")) || "No matches found")
        setSelectedHotel(JSON.parse(localStorage.getItem("selectedHotel")))
        setHotels(JSON.parse(localStorage.getItem("allHotels")))
    },[])


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}