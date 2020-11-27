import React from 'react';
import {useHistory} from 'react-router-dom';
import Navbar from '../components/Navbar';
import useForm from '../hooks/useForm';
import axios from 'axios';
function Signup(){
    let history = useHistory();
    const sendData = (data) => {
        console.log(data)
        if(data.password === data.password_confirm){
        delete data.password_confirm
        axios.post("https://ecomerce-master.herokuapp.com/api/v1/signup", data)
            .then((response) =>{
                if(response.status === 201){
                    // cuando se crea el usuario lo enviamos a login
                    history.push("/")
                }
            }).catch((error) =>{
                alert(error.response.data)
            })
        }else{
            alert("Passwords no coinciden")
        }
    }
    const {inputs, handleInputChange, handleSubmit} = useForm(sendData,{})
    return(
        <form onSubmit={handleSubmit}>
            <Navbar/>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <label htmlFor="">Nombre</label>
                        <input type="text"
                        value={inputs.first_name}
                        onChange={handleInputChange}
                        className="form-control"
                        name="first_name"
                        id="first_name" />
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="">Apellidos</label>
                        <input type="text"
                        value={inputs.last_name}
                        onChange={handleInputChange}
                        className="form-control"
                        name="last_name"
                        id="last_name" />
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="">Fecha de Nacimiento</label>
                        <input type="date"
                        value={inputs.birth_date}
                        onChange={handleInputChange}
                        className="form-control"
                        name="birth_date"
                        id="birth_date" />
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="">Email</label>
                        <input type="email"
                        value={inputs.email}
                        onChange={handleInputChange}
                        className="form-control"
                        name="email"
                        id="email" />
                    </div>
                    <div>
                        <input type="radio" 
                        id="male" name="gender" value="M"/>
                        <label htmlFor="">Male</label><br/>
                        <input type="radio" id="female" name="gender" value="F"/>
                        <label htmlFor="female">Female</label><br/>
                        <input type="radio" id="other" name="gender" value="X"/>
                        <label htmlFor="other">Other</label>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="">Password</label>
                        <input type="password"
                        value={inputs.password}
                        onChange={handleInputChange}
                        className="form-control"
                        name="password"
                        id="password" />
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="">Confirma Password</label>
                        <input type="password"
                        value={inputs.password_confirm}
                        onChange={handleInputChange}
                        className="form-control"
                        name="password_confirm"
                        id="password_confirm" />
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-dark">iniciar</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Signup