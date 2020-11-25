import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
function Home (){
    return(
        <div>
            <Navbar></Navbar>
            <h1>Bienvenido a la tienda del Baraton</h1>
            <Card></Card>
        </div>
    )
}
export default Home;