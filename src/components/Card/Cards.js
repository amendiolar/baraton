import React from 'react';
import PropTypes from 'prop-types';

function Cards (props){

    // eslint-disable-next-line react/prop-types
    console.log(props.items)
    
    return(
    <div className="row row-cols-1 row-cols-md-3">       
            { props.items.map((product, index) =>(
        <div className="col mb-4" key={index}>
        <div className="card h-100" >
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                    {product.product_name}
                </h5>
                <p className="card-text">
                    {product.description}
                </p>
             </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{product.brand}</li>
                <li className="list-group-item">{product.price}</li>
            </ul>
            <div className="card-body">
                <button type="button" className="btn btn-success">Agregar</button>
            </div>
        </div>
        </div>    
        ))}
        
    </div>    
    );

}

export default Cards;
Cards.propTypes={items:PropTypes.array}