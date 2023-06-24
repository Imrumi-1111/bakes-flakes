import { Fragment } from 'react'
import styles from './mayLike.module.css'

export default function MayLike(){
    return(
        <Fragment>
            <div className={styles.MayLike}>
            <div className={styles.details}>
                <img className={styles.images} src="./images/pic1.jpg" alt="cake"/>
                <p></p>
            </div>
            <div className={styles.details}>
                <img className={styles.images} src="./images/pic2.jpg" alt="cake"/><p></p>
            </div>
            <div className={styles.details}>
                <img className={styles.images} src="./images/pic6.jpg" alt="cake"/><p></p>
            </div>
            <div className={styles.details}>
                <img className={styles.images} src="./images/red velvet.jpg" alt="cake"/><p></p>
            </div>
            <div className={styles.details}>
                <img className={styles.images} src="./images/eggless redvelvet.webp" alt="cake"/><p></p>
            </div>
            </div>
        </Fragment>
    )
}