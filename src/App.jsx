import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signin from './Components/Layout/Signin'
import WishList from './Pages/WishList'
import Cart from './Pages/Cart'


function App() {


  return (
    <>

  
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/WishList" element={<WishList />} />
    <Route path="/Cart" element={<Cart/>} />
    </Routes>
    
       
  </>
  )
}

export default App
