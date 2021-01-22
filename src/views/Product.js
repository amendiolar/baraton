import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/Navbar";
import axios from 'axios';

const Product = () => {
  
  const token = localStorage.getItem('token')
  
  const {productId} =useParams()
  const [selectedProduct, setSelectedProduct] = useState({});
  
 //const mensaje = alert("Para comprar hay que tener un usuario e ingresar")

  useEffect(() => {
    const handleSelectedProduct = async () => {
      const { data } = await axios.get(
        `https://ecomerce-master.herokuapp.com/api/v1/item/${productId}`
      );
      return setSelectedProduct(data);
    };
    handleSelectedProduct();
  }, [productId]);

  
  return (

    <div className="animate__animated animate__fadeIn">
      <NavBar toProduct="/product" />
    
        <div className="container-custom ">
        {token ? (
            <div className="row justify-content-md-between">
            <div className="col-lg-5">
                <img
                    className= "rounded mx-auto d-block"
                    src={selectedProduct.image}
                    alt={selectedProduct.product_name}
                    width= '500 px'
                />
            </div>
            <div className=" col-lg-6">
                <div className="mt-3 ">
                    <div className="container-custom title-heart" >
                        <h5 className="card-title">
                            {selectedProduct.product_name}
                        </h5>
                    </div>
                    <div className="container-custom">
                        <h4>{selectedProduct.brand}</h4>
                        <p>Price: {selectedProduct.price}</p>
                        <h4 className="mt-3">Description:</h4>
                        <p>{selectedProduct.description}</p>
                        <p className="mt-2">SKU:  {selectedProduct.sku}</p>
                    </div>
                    <div className="card-body">
                        <button type="button" className="btn btn-success">Agregar</button>
                    </div>
                </div>
            </div>
        </div>

        ) : (
            <div className="row justify-content-md-between">
                <div className="col-lg-5">
                    <img
                        className= "rounded mx-auto d-block"
                        src={selectedProduct.image}
                        alt={selectedProduct.product_name}
                        width= '500 px'
                    />
                </div>
                <div className=" col-lg-6">
                    <div className="mt-3 ">
                        <div className="container-custom title-heart" >
                            <h5 className="card-title">
                                {selectedProduct.product_name}
                            </h5>
                        </div>
                        <div className="container-custom">
                            <h4>{selectedProduct.brand}</h4>
                            <p>Price: {selectedProduct.price}</p>
                            <h4 className="mt-3">Description:</h4>
                            <p>{selectedProduct.description}</p>
                            <p className="mt-2">SKU:  {selectedProduct.sku}</p>
                        </div>
                        <div className="card-body">
                            <button type="button" className="btn btn-secondary">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        </div>
    </div>
  );
};

export default Product;