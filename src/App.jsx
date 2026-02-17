import './App.css'
import { HomePage } from './pages/HomePage'
import {Routes,Route} from 'react-router'
import {Billing} from './pages/Billing'
import {Orders} from './pages/Orders'
import {TrackingPage} from './pages/TrackingPage'

function App() {

  return (
    <Routes>

      <Route path="/" element={<HomePage/>}/> 
      <Route path="/checkout" element={<Billing/>}></Route>
      <Route path="/orders" element={<Orders/>}></Route>
      <Route path="/tracking" element={<TrackingPage/>}></Route>
    </Routes>
    
  )
}

export default App
