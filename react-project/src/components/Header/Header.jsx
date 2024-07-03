import React from 'react'
import cafeLogo from '/images/LogoW.png'
import './header.css'

export default function Header({ selectedPage }) {
    return (
        <nav className="header">
            <div className="logo-container">
                <a onClick={() => selectedPage('home')}>
                    <img src={cafeLogo} alt="cafe logo" id="cafe-logo"/>
                </a>
                <small>Experience Sustainability</small>
            </div>
            <div id="nav-pages">
                <a>Our Specialty</a>
                <a onClick={() => selectedPage('about')}>About Us</a>
                <a onClick={() => selectedPage('menu')}>Menu</a>
                <a onClick={() => selectedPage("career")}>Careers</a>
                <div id="order-now-button">
                    <a>Order Now</a>
                </div>
            </div>
        </nav>
    )
}
