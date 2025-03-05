import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ToastContainer } from 'react-toastify';
import { AppContextProvider } from './context/AppContext.jsx';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import SearchResult from './pages/SearchResult.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import HotelBooking from './pages/HotelBooking.jsx';
import ScrollToTop from './components/scrollToTop.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AppContextProvider>

        {/* <ToastContainer /> */}
      <BrowserRouter>


        <ScrollToTop/>
          <Header/>

          <Routes>
            
            <Route path='/' element={<App/>} />
            <Route path="/search-result" element={<SearchResult/>} />
            <Route path="/book-hotel" element={<HotelBooking/>} />

          </Routes>

          <Footer/>

      </BrowserRouter>

    </AppContextProvider>  

  </StrictMode>,
)
