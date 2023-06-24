import { Fragment } from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import {TbSearch} from 'react-icons/tb'

export default function NavBar(){
    
    return(
        <Fragment>
            <div className={styles.logo}>
                <p>Bakes and flakes</p>
                <p><img
                src="./images/logo.png"
                alt="logo"
                border="1rem"
                width='50rem'
                /></p>
            
            <div className={styles.NavBar}>
                <p className={styles.para}><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></p>
                <p className={styles.para}><Link to="/about" style={{ textDecoration: 'none' }}>About</Link></p>
                <p className={styles.para}><Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></p>
               
                
               
            
            </div>
            <div className={styles.searchbar}>
                <p><TbSearch
                size="0.8rem"
                />
                <input className={styles.input} placeholder="Search items"/></p>
            </div>
            </div>
        </Fragment>
    )
}