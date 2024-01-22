import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../logoR&M.png"
import style from "./navigationBar.module.css"

function NavigationBar() {
    const { pathname } = useLocation();

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
            {pathname !== "/" ? (
                <Link to="/">
                <button>Home</button>
                </Link>
            ) : null}
        </div>
    );
}

export default NavigationBar;

