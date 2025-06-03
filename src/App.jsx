import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signin from './Components/Layout/Signin'
import WishList from './Pages/WishList'
import Cart from './Pages/Cart'
import AllProduct from './Components/Layout/AllProduct'
import DetailPage from './Components/Layout/DetailPage'
import CategoryProduct from './Components/Layout/categoryProduct'

import Categoryboxproduct from './Components/Layout/CategoryBoxProduct'


function App() {


  return (
    <>

  
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/WishList" element={<WishList />} />
    <Route path="/Cart" element={<Cart/>} />
    <Route  path="/AllProducts/:mainCategory" element={<AllProduct/>} />
    <Route path="/DetailPage/:id" element={<DetailPage />} />
    <Route path="/category/:categoryKey/:subItem?" element={< CategoryProduct />} />
    <Route path="/:category/:categoryName?" element={< Categoryboxproduct />} />
    <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    
       
  </>
  )
}

export default App
