import { Fragment } from "react";
import styles from  './about.module.css'

export default function About() {
    return (
        <Fragment>
            <div className={styles.About}>
                <p> We are exactly what you are looking for. Yes, we are an FSSAI certified online cake
                    and Bakery Company that specializes in delivering absolutely lip-smacking delicacies.
                    Main office is located in West Bengal.
                    Currently, we are delivering cakes in
                    <b> Kalighat, Gariahat, Howrah, Bally, Konnagar, Serampore Dumdum, Saltlake, Bhabanipur, some parts of
                        Diamondharbour and Durgapore </b>
                    We are not just a bakery, we are not just bakers. In fact, we are just like you, a bunch of food lovers
                    fascinated with sweet indulgence, who dreamt of creating an appetizing fairy land of divine delicacies
                    that relishes the utmost desires.</p>

                    <img src="./images/logo.png" alt="logo"/>
            </div>
        </Fragment>
    )
}