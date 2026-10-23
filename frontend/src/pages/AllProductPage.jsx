import { useState, useEffect } from "react"
import { fetchAllProducts} from "../services/productService"
import { Link } from "react-router"


function AllProduct() {
    const [ products, setProducts ] = useState([])

    async function getAllProduct(){
        const response = await fetchAllProducts()
        setProducts(response)
    }

    useEffect(()=>{
        getAllProduct()
    },[])
  return (
    <div>
        <h1>All Products</h1>

        {products.map((oneProduct)=> 
        <div key={oneProduct._id}>
            <h2>Name: {oneProduct.title}</h2>
            <Link to={`/products/${oneProduct._id}`}>See Product Details</Link>
        </div>
        )}
    </div>
  )
}

export default AllProduct