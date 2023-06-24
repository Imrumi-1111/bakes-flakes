import { Fragment } from 'react'
import styles from './bestSeller.module.css'
import { BiRupee } from "react-icons/bi"

export default function BestSeller(){
    return(
        <Fragment>
            <div className={styles.BestSeller}>
                
                <div className={styles.details}><img className={styles.image} src="./images/pic7.jpg" alt="cake" />
                <p>{<BiRupee/>} 440</p></div>
                
                <div className={styles.details}><img className={styles.image} src="./images/Kiwi-Cake.jpg" alt="cake" />
                <p>{<BiRupee/>} 599</p></div>
                
                <div className={styles.details}><img className={styles.image} src="./images/gems.jpg" alt="cake" />
                <p>{<BiRupee/>} 490</p></div>
                
                <div className={styles.details}><img className={styles.image} src="./images/oreo.jpg" alt="cake" />
                <p>{<BiRupee/>} 400</p></div>
                

            </div>
        </Fragment>
    )
}