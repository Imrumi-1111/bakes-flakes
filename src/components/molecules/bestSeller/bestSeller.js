import { Fragment } from 'react'
import styles from './bestSeller.module.css'
import { BiRupee } from "react-icons/bi"
import { AiFillStar } from "react-icons/ai"
import { IoMdRadioButtonOn } from 'react-icons/io'

export default function BestSeller(){
    return(
        <Fragment>
            <div className={styles.BestSeller}>
                
                <div className={styles.details}><img className={styles.image} src="./images/pic7.jpg" alt="cake" />
                <p className={styles.part1}>Bengal special Roshogolla cake  <IoMdRadioButtonOn style={{ border:"1px solid green",color: "green"}}/></p>
                <p className={styles.para11}>{<BiRupee/>} 440</p>
                <p className={styles.para}> 5<AiFillStar style={{color:"skyblue"}}/></p></div>
                
                <div className={styles.details}><img className={styles.image} src="./images/Kiwi-Cake.jpg" alt="cake" />
                <p className={styles.part}>Kiwi Cake  <IoMdRadioButtonOn style={{border:"1px solid green",color: "green"}}/></p>
                <p className={styles.para1}>{<BiRupee/>} 599</p>
                <p className={styles.para}>4.6<AiFillStar style={{color:"skyblue"}}/></p></div>
                
                <div className={styles.details}><img className={styles.image} src="./images/gems.jpg" alt="cake" />
                <p className={styles.part}>Gems Cake <IoMdRadioButtonOn style={{border:"1px solid green",color: "green"}}/></p>
                <p className={styles.para1}>{<BiRupee/>} 490</p>
                <p className={styles.para}>4.8<AiFillStar style={{color:"skyblue"}}/></p></div>
                
                <div className={styles.details}><img className={styles.image} src="./images/oreo.jpg" alt="cake" />
                <p className={styles.part}>Oreo Cake <IoMdRadioButtonOn style={{border:"1px solid green",color: "green"}}/></p>
                <p className={styles.para1}>{<BiRupee/>} 400</p>
                <p className={styles.para}>4.9<AiFillStar style={{color:"skyblue"}}/></p>
                </div>
                

            </div>
        </Fragment>
    )
}