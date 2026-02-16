import './App.css'
import { HomePage } from './pages/HomePage'
import {Routes,Route} from 'react-router'

function App() {

  return (
    <Routes>

      <Route path="/" element={<HomePage />}/> 
      <Route path="/checkout" element={<div>test chechout page hehehehe</div>}></Route>
    </Routes>
    
  )
}

export default App
