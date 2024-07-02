import React from 'react'
import cafeLogo from '/images/LogoW.png'
import '/styles/templates/header.css'

export default function Header() {
    return (
        <nav class="header">
            <div class="logo-container">
                <a href="/index.html">
                    <img src={cafeLogo} alt="cafe logo" id="cafe-logo"/>
                </a>
                <small>Experience Sustainability</small>
            </div>
            <div id="nav-pages">
                <a>Our Specialty</a>
                <a>About Us</a>
                <a href="/menu.html">Menu</a>
                <a>Careers</a>
                <div id="order-now-button">
                    <a>Order Now</a>
                </div>
            </div>
        </nav>
    )
}