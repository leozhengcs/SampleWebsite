import React, { useState, useEffect } from 'react'
import '/styles/menu.css'

export default function MenuPage() {

    const [menus, setMenus] = useState({
        floralTeaMenu: [],
        steepedBrewMenu: [],
        sweetTreatMenu: []
      });
    
      useEffect(() => {
        const fetchMenuData = async () => {
          try {
            const response = await fetch("../data/menu-data.JSON");
    
            if (!response.ok) {
              throw new Error("Network response is not okay");
            }
    
            const data = await response.json();
            setMenus(data); // Update state with fetched data
          } catch (err) {
            console.log("Error fetching menu data:", err);
          }
        };
    
        fetchMenuData(); // Call fetchMenuData when component mounts
    }, []);

    return ( <>
        <main>
            <div id="floral-teas" className="featured-item" onClick={() => document.getElementById('floral-tea-header').scrollIntoView()}>
                <section>
                    <span>Floral Teas</span>
                    <a href="#">View Menu</a>
                </section>
            </div>
            <div id="steeped-brews" className="featured-item" onClick={() => document.getElementById('steeped-brew-header').scrollIntoView()}>
                <section>
                    <span>Steeped Brews</span>
                    <a href="#">View Menu</a>
                </section>
            </div>
            <div id="sweet-treats" className="featured-item" onClick={() => document.getElementById('sweet-treat-header').scrollIntoView()}>
                <section>
                    <span>Sweet Treats</span>
                    <a href="#">View Menu</a>
                </section>
            </div>
        </main>
        <div id="menu">
            <h1>Collections</h1>
            <h2 className="section-header" id="floral-tea-header">Floral Teas</h2>
            <div id="floral-tea-section" className="menu-section">
                {menus.floralTeaMenu.map((item, index) => (<div key={index} className="menu-item-container">
                    <div className="menu-item">
                        <div className="description">
                        <p className="item-name">{item.name}</p>
                        <span className="item-description">{item.description}</span>
                        <span className="item-price">{item.price}</span>
                        </div>
                        <div className="item-image">
                        <div className="item-image-container">
                            <img src={`/images/${item['image-src']}`} alt={item.name} />
                        </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <h2 className="section-header" id="steeped-brew-header">Steeped Brews</h2>
            <div id="steeped-brew-section" className="menu-section">
                {menus.steepedBrewMenu.map((item, index) => (
                <div key={index} className="menu-item-container">
                    <div className="menu-item">
                        <div className="description">
                        <p className="item-name">{item.name}</p>
                        <span className="item-description">{item.description}</span>
                        <span className="item-price">{item.price}</span>
                        </div>
                        <div className="item-image">
                        <div className="item-image-container">
                            <img src={`/images/${item['image-src']}`} alt={item.name} />
                        </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <h2 className="section-header" id="sweet-treat-header">Sweet Treats</h2>
            <div id="sweet-treat-section" className="menu-section">
                {menus.sweetTreatMenu.map((item, index) => (
                    <div key={index} className="menu-item-container">
                        <div className="menu-item">
                            <div className="description">
                            <p className="item-name">{item.name}</p>
                            <span className="item-description">{item.description}</span>
                            <span className="item-price">{item.price}</span>
                            </div>
                            <div className="item-image">
                            <div className="item-image-container">
                                <img src={`/images/${item['image-src']}`} alt={item.name} />
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}
