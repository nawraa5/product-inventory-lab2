import AllProduct from "./pages/AllProductPage"
import ProductDetails from "./pages/ProductDetailsPage"
import CreateProduct from "./pages/CreateProductPage"
import UpdateProduct from "./pages/UpdateProductPage"
import NavBar from "./components/NavBar"
import { Routes, Route } from 'react-router'
import Homepage from "./pages/Homepage"

function App() {
  
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products" element={<AllProduct/>} />
        <Route path="/products/create" element={<CreateProduct/>} />
        <Route path="/products/:productId" element={<ProductDetails/>} />
        <Route path="/products/:productId/edit" element={<UpdateProduct/>} />
      </Routes>
    </div>
  )
}

export default App