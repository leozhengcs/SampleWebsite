import React from 'react'
import cafeLogo from '/images/LogoW.png'
import '/styles/templates/header.css'

export default function Header() {
    return (
        <nav className="header">
            <div className="logo-container">
                <a onClick={() => setCurrentPage('home')}>
                    <img src={cafeLogo} alt="cafe logo" id="cafe-logo"/>
                </a>
                <small>Experience Sustainability</small>
            </div>
            <div id="nav-pages">
                <a>Our Specialty</a>
                <a>About Us</a>
                <a onClick={() => setCurrentPage('menu')}>Menu</a>
                <a>Careers</a>
                <div id="order-now-button">
                    <a>Order Now</a>
                </div>
            </div>
        </nav>
    )
}
