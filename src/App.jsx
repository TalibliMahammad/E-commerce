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
import ErrorPage from './Components/Layout/ErrorPage'
import ContactUs from './Components/Layout/ContactUs'
import PaymentSection from './Components/Layout/PaymentSection'
import AboutUs from './Components/Layout/OurStory'


function App() {


  return (
    <>

  
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/ContactUs" element={<ContactUs />} />
    <Route path="/AboutUs" element={<AboutUs />} />
    <Route path="/WishList" element={<WishList />} />
    <Route path="/Cart" element={<Cart/>} />
    <Route  path="/AllProducts/:mainCategory/:subCategory" element={<AllProduct/>} />
    <Route path="/DetailPage/:id" element={<DetailPage />} />
    <Route path="/category/:categoryKey/:subItem?" element={< CategoryProduct />} />
    <Route path="/:category/:categoryName?" element={< Categoryboxproduct />} />
    <Route path="/Payment" element={< PaymentSection />} />
    <Route path="/error" element={<ErrorPage/>} />
    </Routes>
    
       
  </>
  )
}

export default App
