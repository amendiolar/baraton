import React, { useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Cards from '../components/Card';
import axios from 'axios';
function Home (){
    const [products, setProducts]= useState([]);
        console.log(products)
    
        useEffect(() => {
        axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
            .then((response) => {
              console.log(response.data)
             setProducts(response.data)
            })
        },[])

    return(
        <div>
            <Navbar></Navbar>
            <h1>Bienvenido a la tienda del Baraton</h1>
            <Cards items={products} />
        </div>
    )
}
export default Home;