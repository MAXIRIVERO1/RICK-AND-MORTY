import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavigationBar() {
    const { pathname } = useLocation();

    return (
        <nav>
        <ul>
            {pathname !== "/favorites" ? (
            <li>
                <Link to="/favorites">
                <button>Favorites</button>
                </Link>
            </li>
            ) : null}
            {pathname !== "/" ? (
            <li>
                <Link to="/">
                <button>Home</button>
                </Link>
            </li>
            ) : null}
        </ul>
        </nav>
    );
}

export default NavigationBar;

