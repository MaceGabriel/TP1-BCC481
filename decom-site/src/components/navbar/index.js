import React from 'react';
import './style.css';
import { useState } from "react";
import { Link } from "react-router-dom"
import logo from "../../static/imgs/decom.jpeg"

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="navigation">
            <Link to="/" className="brand-name">
                <img className="logo" src={logo} alt="LogoDecom"/>
            </Link>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <Link className='link' to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link className='link' to="/people">Pessoas</Link>
                    </li>
                    <li>
                        <Link className='link' to="/about">Sobre</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}