import { Fragment } from 'react'
import styles from './cake.module.css'
import NavBar from '../atoms/navbar/navbar'
import BestSeller from '../molecules/bestSeller/bestSeller'
import MayLike from '../molecules/maylike/mayLike'

export default function Home() {
    return (
        <Fragment>
            <div className={styles.Home}>
                <NavBar />
                <div className={styles.slide}>
                    <div className={styles.images}><img src="./images/cake2.jpg" alt="cake" height={300}/></div>
                    <div className={styles.images}><img src="./images/chocopie.jpg" alt="cake" height={300}/></div>
                    <div className={styles.images}><img src="./images/au gratin.jpg" alt="true" height={300}/></div>
                    <div className={styles.images}><img src="./images/choco.jpeg" alt="cake" height={300}/></div>
                    <div className={styles.images}><img src="./images/cheesy pizza.jpg" alt="pizza" height={300}/></div>
                    <div className={styles.images}><img src="./images/potato au gratin.jpg" alt="potato au gratin" height={300}/></div>
                    <div className={styles.images}><img src="./images/plum-cake.jpg" alt="cake" height={300}/></div>
                </div>
                <h2> Surprise your loved one</h2>
                <MayLike/>
                <h2> Our Best Seller</h2>
                <BestSeller/>
            </div>
        </Fragment>
    )
}