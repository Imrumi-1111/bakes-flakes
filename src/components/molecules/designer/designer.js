import { Fragment } from 'react'
import styles from './designer.module.css'
import { IoMdRadioButtonOn } from 'react-icons/io'

export default function Designer(){
    return(
        <Fragment>
            <div className={styles.Designer}>
            <div className={styles.details}>
                <img className={styles.images} src="./images/pic3.jpg" alt="cake"/>
                <p className={styles.part}>Barbie Cake <IoMdRadioButtonOn style={{border:"1px solid green",color: "green"}}/></p>
            </div>
            <div className={styles.details}>
                <img className={styles.images} src="./images/pic1.jpg" alt="cake"/>
                <p className={styles.part}>Yellow yellow dirty fellow<IoMdRadioButtonOn style={{border:"1px solid green",color: "green"}}/></p>
            </div>
            <div className={styles.details}>
                <img className={styles.images} src="./images/pic8.jpg" alt="cake"/>
                <p className={styles.part}>Doctor's choice <IoMdRadioButtonOn style={{border:"1px solid green",color: "green"}}/></p>
            </div>
            <div className={styles.details}>
                <img className={styles.images} src="./images/strawberry.jpeg" alt="cake"/>
                <p className={styles.part}>Strawberry chocolate cake <IoMdRadioButtonOn style={{border:"1px solid green",color: "green"}}/></p>
            </div>
            <div className={styles.details}>
                <img className={styles.images} src="./images/treeCake.jpg" alt="cake"/>
                <p className={styles.part}>Vanila Purple tree cake <IoMdRadioButtonOn style={{border:"1px solid green",color: "green"}}/></p>
            </div>
            </div>
        </Fragment>
    )
}