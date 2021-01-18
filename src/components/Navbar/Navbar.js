import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import payload from '../../utils/payload';
import './Navbar.scss';
import useForm from '../../hooks/useForm';
import axios from 'axios';

function Navbar() {
  const user1 = payload();
    console.log(user1)

    const [user, setUser] = useState()
    const token = localStorage.getItem('token')


    useEffect(() =>{
        if(token){
        const config = {
            headers:{
                Authorization:`JWT ${token}`
            }
        }
        axios.get("https://ecomerce-master.herokuapp.com/api/v1/user/me",config)
        .then(({response}) =>{
            const {user} = response;
            setUser(user)
        })
        }
    },[token])

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
            {user ? (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        Home 
                        <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/" >
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
            ) : (
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
                )            
            }
            
        </div>
    </nav>
  );
}

export default Navbar;

