import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../logoR&M.png"
import style from "./navigationBar.module.css"
import { useDispatch } from 'react-redux';
import { getAccess } from "../../Redux/Actions/actions.js"

function NavigationBar() {
    const { pathname } = useLocation();
    const dispatch = useDispatch()
    const handleLog = () => {
        dispatch(getAccess(false))
    };

    return (
        <div className={style.content}>
            <img className={style.img} src={logo} alt="logo" />
                <Link to="/create">
                <button>Create</button>
                </Link>
            {pathname !== "/favorites" ? (
                <Link to="/favorites">
                <button>Favorites</button>
                </Link>
            ) : null}
            {pathname !== "/home" ? (
                <Link to="/home">
                <button>Home</button>
                </Link>
            ) : null}
            {pathname !== "/" ? (
                <Link to="/">
                <button onClick={handleLog}>Logout</button>
                </Link>
            ) : null}
        </div>
    );
}

export default NavigationBar;

