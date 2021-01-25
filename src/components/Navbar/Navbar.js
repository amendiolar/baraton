import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
//import payload from '../../utils/payload';
import './Navbar.scss';
import useForm from '../../hooks/useForm';
import axios from 'axios';

function Navbar() {
 // const user1 = payload()

    const [user, setUser] = useState();
    const [rol,setRol] = useState();
    const token = localStorage.getItem('token')


    useEffect(() =>{
        console.log(user)
        if(token){
        const config = {
            headers:{
                Authorization:`JWT ${token}`
            }
        }
        axios.get("https://ecomerce-master.herokuapp.com/api/v1/user/me",config)
        .then(({data}) =>{
            const {user} = data;
            console.log(user);
            setUser(user);

        })
        }
    },[token])
  
    useEffect(() =>{
        if(user){
            const {role} = user
            setRol(role)
        }
    })

    console.log(rol)

    const sendData = (search) => {
        console.log(search)
        axios.post("https://ecomerce-master.herokuapp.com/")
            .then((response) =>{
                console.log(response)
            }).catch((error) =>{
                alert(error.response.data)
            })
    }

    const {inputs, handleInputChange, handleSubmit} = useForm(sendData,{})


  // https://getbootstrap.com/docs/4.5/components/navbar/#nav

	switch(rol) {
    case 'CUSTOMER':
   return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            Baraton
        </a>
        <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarTogglerDemo02" 
            aria-controls="navbarTogglerDemo02" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>

        <form className="form-inline my-2 my-lg-0 col-6">
                <input className="form-control mr-sm-2" 
                type="search" 
                value={inputs.search}
                onChange={handleInputChange}
                placeholder="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" 
                type="submit"
                onClick={handleSubmit}>
                    Search
                </button>
        </form>
                
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
           
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Home 
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/" >
                            <img src="data:image/png;base64,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"
                            width="15px"  ></img>
                            !Hola, {user.first_name}!
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">
                            Logout
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/" tabindex="-1">
                            Cart
                        </Link>
                    </li>
                </ul>
                                       
        </div>
    </nav>
  );

    case 'ADMIN':
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            Baraton
        </a>
        <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarTogglerDemo02" 
            aria-controls="navbarTogglerDemo02" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>

        <form className="form-inline my-2 my-lg-0 col-6">
                <input className="form-control mr-sm-2" 
                type="search" 
                value={inputs.search}
                onChange={handleInputChange}
                placeholder="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" 
                type="submit"
                onClick={handleSubmit}>
                    Search
                </button>
        </form>
                
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
           
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Home 
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/" >
                            <img src="data:image/png;base64,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"
                            width="15px"  ></img>
                            !Hola, {user.first_name}!
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">
                            Logout
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Product Create / Edit
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/" tabindex="-1">
                            Cart
                        </Link>
                    </li>
                </ul>
                            
        </div>
    </nav>
  );

    default:
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            Baraton
        </a>
        <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarTogglerDemo02" 
            aria-controls="navbarTogglerDemo02" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>

        <form className="form-inline my-2 my-lg-0 col-6">
                <input className="form-control mr-sm-2" 
                type="search" 
                value={inputs.search}
                onChange={handleInputChange}
                placeholder="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" 
                type="submit"
                onClick={handleSubmit}>
                    Search
                </button>
        </form>
                
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Home 
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/signup" tabindex="-1">
                        Signup
                    </Link>
                </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
                          
            
            
        </div>
    </nav>
  );
    }
  }
export default Navbar;
