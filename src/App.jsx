import Home from "./pages/Home"
import {createBrowserRouter ,createRoutesFromElements , RouterProvider ,Route} from 'react-router-dom'
import Layout from './components/Layout'
import Shop from "./components/Shop"


function App() {

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}> </Route>
    <Route path="/Shop" element={<Shop/>}> </Route>
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
