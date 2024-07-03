import React from 'react'
import styles from './about-page.module.css'

export default function AboutPage() {
    
    return (
        <main className={styles.main}>
            <div className={styles['maria-image']}></div>
            <div className={styles['owner-info']}>
                <span className={styles['subheading']}>Meet the makers of CHAFÉ</span>
                <h1 className={styles['heading']}>Maria`s Story</h1>
                <span className={styles['description']}>In 1976, our founder Maria Oliveira wanted to share her mother`s passion for tea & coffee making with her community.</span>
                <span className={styles['description']}>Partnering with her husband Timm Alens, the pair collaborated with local farmers to ensure the high quality of their products.</span>
            </div>
            <div className={styles[`goal-description`]}>
                <span className={styles['subheading']}>Our goal to make a difference</span>
                <h1 className={styles['heading']}>LENDING A HAND</h1>
                <span className={styles['description']}>Chafé supports charities like the Rainforest Alliance and values customers that are thoughtful of their carbon footprint and environmental impact.</span>
                <span className={styles['description']}>Inspired by the Amazon`s refreshing sights, Chafé is an elevated café that provides its community with freshly steeped teas made from the finest floras.</span>
            </div>
            <div className={styles[`goal-image`]}></div>
        </main>
    )
}