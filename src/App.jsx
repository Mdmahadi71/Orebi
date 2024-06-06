import Home from "./pages/Home"
import {createBrowserRouter ,createRoutesFromElements , RouterProvider ,Route} from 'react-router-dom'
import Layout from './components/Layout'
import ShopPage from "./pages/ShopPage"
import ProductPage from "./pages/ProductPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import LoginPage from "./pages/LoginPage"
import SingupPage from "./pages/SingupPage"
import AccountPage from "./pages/AccountPage"
import Shopdetils from "./components/Shopdetils"
import CartPage from "./pages/CartPage"
import Checkout from "./pages/Checkout"


function App() {

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}> </Route>
    <Route path="/Shop" element={<ShopPage/>}> </Route>
    <Route path="/Shop/:Id" element={<Shopdetils/>}> </Route>
    <Route path="/ProductPage" element={<ProductPage/>}> </Route>
    <Route path="/About" element={<AboutPage/>}> </Route>
    <Route path="/Contacts" element={<ContactPage/>}> </Route>
    <Route path="/Login" element={<LoginPage/>}> </Route>
    <Route path="/Singup" element={<SingupPage/>}> </Route>
    <Route path="/Myaccount" element={<AccountPage/>}> </Route>
    <Route path="/cart" element={<CartPage/>}> </Route>
    <Route path="/checkout" element={<Checkout/>}> </Route>
  </Route>
))
  
  return (
   <>
    <RouterProvider router={router} >

    </RouterProvider>
   </>
  )
}

export default App
