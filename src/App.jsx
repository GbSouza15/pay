import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bag from "./components/Bag.jsx";
import SharedLayout from "./pages/SharedLayout.jsx";
import Pay from "./components/Pay.jsx";
import ConfirmPay from "./components/ConfirmPay.jsx";

function App() {

  return (
      <div className='bg-[#F5F5F5] h-[100vh]'>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SharedLayout/>}>
                <Route index element={<Bag/>}></Route>
                <Route path='pay' element={<Pay/>}></Route>
                <Route path='confirm' element={<ConfirmPay/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
      </div>
  )
}

export default App
