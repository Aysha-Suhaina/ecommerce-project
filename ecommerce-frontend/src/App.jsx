import {useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'
import { HomePage } from './pages/HomePage'
import {Routes,Route} from 'react-router'
import {Billing} from './pages/Billing'
import {Orders} from './pages/Orders'
import {TrackingPage} from './pages/TrackingPage'


function App() {
  const [cart,setCart] = useState( [] )

useEffect(() =>{
   axios.get('http://localhost:3000/api/cart-items?expand=product')
  .then((response) => {
    setCart(response.data);
  });
},[])

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart}/>}/> 
      <Route path="/checkout" element={<Billing cart={cart}/>}></Route>
      <Route path="/orders" element={<Orders/>}></Route>
      <Route path="/tracking" element={<TrackingPage/>}></Route>
    </Routes>
    
  )
}

export default App
