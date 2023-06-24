import { Fragment } from 'react'
import styles from './mayLike.module.css'
import { IoMdRadioButtonOn } from 'react-icons/io'

export default function MayLike(){
    return(
        <Fragment>
            <div className={styles.MayLike}>
            <div className={styles.details}>
                <img className={styles.images} src="./images/pic5.jpg" alt="cake"/>
                <p className={styles.part}>Friendship anniversary cake <IoMdRadioButtonOn style={{border:"1px solid green",color: "green"}}/></p>
            </div>
            <div className={styles.details}>
                <img className={styles.images} src="./images/pic2.jpg" alt="cake"/>
                <p className={styles.part}>Racing car<IoMdRadioButtonOn style={{border:"1px solid green",color: "green"}}/></p>
            </div>
            <div className={styles.details}>
                <img className={styles.images} src="./images/pic6.jpg" alt="cake"/>
                <p className={styles.part}>Couple cake<IoMdRadioButtonOn style={{border:"1px solid green",color: "green"}}/></p>
            </div>
            <div className={styles.details}>
                <img className={styles.images} src="./images/red velvet.jpg" alt="cake"/>
                <p className={styles.part}>Red Velvet<IoMdRadioButtonOn style={{border:"1px solid green",color: "green"}}/></p>
            </div>
            <div className={styles.details}>
                <img className={styles.images} src="./images/eggless redvelvet.webp" alt="cake"/>
                <p className={styles.part}>Red velvet celebrate love<IoMdRadioButtonOn style={{border:"1px solid green",color: "green"}}/></p>
            </div>
            </div>
        </Fragment>
    )
}