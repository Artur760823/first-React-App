import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/navigation.css";

const list = [
    { name: 'Start', path: "/", exact: true },
    { name: 'Produkty', path: "/products" },
    { name: 'Kontakt', path: "/contact" },
    { name: 'Panel Admina', path: "/admin" },
]

const Navigation = () => {
    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact>{item.name}</NavLink>
        </li>
    ))
    return (
        <aside>
            <nav className="main">
                <ul>
                    {menu}
                </ul>
            </nav>
        </aside>
    );
}

export default Navigation;