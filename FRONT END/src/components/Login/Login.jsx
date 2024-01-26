import React, { useState } from 'react';
import { getAccess } from "../../Redux/Actions/actions.js";
import { useDispatch } from 'react-redux';
import { objUser } from "./credentials.js";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import style from "./login.module.css"

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ user, setUser ] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        user.email === objUser.email && user.password === objUser.password ? 
        dispatch(getAccess(true)) :
        dispatch(getAccess(false));
        setUser({})
        user.email === objUser.email && user.password === objUser.password ?
        navigate("/home") :
        Swal.fire({
            title: "Error",
            text: "Incorrect password, please try again",
            icon: "error",
            confirmButtonText: "OK"
        })
        
    }
    return (
        <div className={style.div}>
            <form onSubmit={handleSubmit} className={style.form}>
                <label htmlFor="">Email :</label><br />
                <input type="text" value={user.email} name="email" onChange={handleChange} required/><br />
                <label htmlFor="">Password :</label><br />
                <input type="password" value={user.password} name="password" onChange={handleChange} required/><br />
                <button type='submit'>ENTER</button>
            </form>
        </div>
    )
}

export default Login