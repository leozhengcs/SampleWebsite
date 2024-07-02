import React, { useState, useEffect } from 'react'
import styles from './menu-page.module.css'

export default function MenuPage() {

    const [menus, setMenus] = useState({
        floralTeaMenu: [],
        steepedBrewMenu: [],
        sweetTreatMenu: []
      });
    
      useEffect(() => {
        const fetchMenuData = async () => {
          try {
            const response = await fetch("/data/menu-data.JSON");
    
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
            <div className={`${styles['featured-item']} ${styles['floral-teas']}`} onClick={() => document.getElementById('floral-tea-header').scrollIntoView()}>
                <section>
                    <span>Floral Teas</span>
                    <a href="#">View Menu</a>
                </section>
            </div>
            <div className={`${styles['featured-item']} ${styles['steeped-brews']}`} onClick={() => document.getElementById('steeped-brew-header').scrollIntoView()}>
                <section>
                    <span>Steeped Brews</span>
                    <a href="#">View Menu</a>
                </section>
            </div>
            <div className={`${styles['featured-item']} ${styles['sweet-treats']}`} onClick={() => document.getElementById('sweet-treat-header').scrollIntoView()}>
                <section>
                    <span>Sweet Treats</span>
                    <a href="#">View Menu</a>
                </section>
            </div>
        </main>
        <div className={styles.menu}>
            <h1 className={styles['menu-h1']}>Collections</h1>
            <h2 className={`${styles['menu-h2']}`} id="floral-tea-header">Floral Teas</h2>
            <div className={styles['menu-section']}>
                {menus.floralTeaMenu.map((item, index) => (
                    <div key={index} className={`${styles['menu-item-container']} ${styles.odd}`}>
                        <div className={`${styles["menu-item"]} ${styles['menu-item-container']} ${styles.odd}`}>
                            <div className={styles["description"]}>
                                <p className={styles["item-name"]}>{item.name}</p>
                                <span className={styles["item-description"]}>{item.description}</span>
                                <span className={styles["item-price"]}>{item.price}</span>
                            </div>
                            <div className={styles["item-image"]}>
                                <div className={styles["item-image-container"]}>
                                    <img className={styles.img} src={`/images/${item['image-src']}`} alt={item.name} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className={`${styles['menu-h2']}`} id="steeped-brew-header">Floral Teas</h2>
            <div className={styles['menu-section']}>
                {menus.steepedBrewMenu.map((item, index) => (
                    <div key={index} className={`${styles['menu-item-container']} ${styles.odd}`}>
                        <div className={`${styles["menu-item"]} ${styles['menu-item-container']} ${styles.odd}`}>
                            <div className={styles["description"]}>
                                <p className={styles["item-name"]}>{item.name}</p>
                                <span className={styles["item-description"]}>{item.description}</span>
                                <span className={styles["item-price"]}>{item.price}</span>
                            </div>
                            <div className={styles["item-image"]}>
                                <div className={styles["item-image-container"]}>
                                    <img className={styles.img} src={`/images/${item['image-src']}`} alt={item.name} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className={`${styles['menu-h2']}`} id="steeped-brew-header">Floral Teas</h2>
            <div className={styles['menu-section']}>
                {menus.sweetTreatMenu.map((item, index) => (
                    <div key={index} className={`${styles['menu-item-container']} ${styles.odd}`}>
                        <div className={`${styles["menu-item"]} ${styles['menu-item-container']} ${styles.odd}`}>
                            <div className={styles["description"]}>
                                <p className={styles["item-name"]}>{item.name}</p>
                                <span className={styles["item-description"]}>{item.description}</span>
                                <span className={styles["item-price"]}>{item.price}</span>
                            </div>
                            <div className={styles["item-image"]}>
                                <div className={styles["item-image-container"]}>
                                    <img className={styles.img} src={`/images/${item['image-src']}`} alt={item.name} />
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
