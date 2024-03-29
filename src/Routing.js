import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import GetApi from './GetApi'
import ProductCart from './ProducCart'
import MCloth from './MCloth'
import WCloth from './WCloth'
import Electromics from './Electromics'
import PostProduct from './PostProduct'



export default function Routing() {
  return (
    <div>
      <BrowserRouter>
      {/* <Nav></Nav><br/> */}
            <Routes>
            <Route path='/' element={<GetApi></GetApi>}></Route>
            <Route path='/electronic' element={<Electromics></Electromics>}></Route>
            <Route path='/bappilehari' element={<ProductCart></ProductCart>}></Route>
            <Route path='/aadmikakapda' element={<MCloth></MCloth>}></Route>
            <Route path='/auratlogokakapda' element={<WCloth></WCloth>}></Route>
            <Route path='/postItem' element={<PostProduct></PostProduct>}></Route>

          </Routes>
      </BrowserRouter>
    </div>
  )
}
