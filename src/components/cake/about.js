import { Fragment } from "react";
import styles from './about.module.css'

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


                <img src="./images/logo.png" alt="logo" />

            </div>
            <div className={styles.rest}>
            <div>
                <h2>Why To Choose Bakes&Flakes For Online Cake Delivery In India?</h2>
                <p>Now, having a birthday cake, anniversary cake or wedding cake is completely a hassle-free task with
                    Bakes&Flakes. Earlier, you would have to go from one shop to another in search for a delectable cake to
                    heighten the happiness of your special occasions. But now, with Bakes&Flakes’s online cake delivery, you
                    can browse through a variety of best quality cakes and pick your favorite cake just sitting at your
                    home. After you have selected your favorite cake from our varieties, order the cake online in a few
                    clicks and relax because Bakes&Flakes ensure same day cake delivery. Yes, now gorge on your favorite
                    delicacies and take your special occasions to new heights with Bakes&Flakes’s online cake delivery
                    service. With our melt-in-mouth delicacies now you can also deliver your heartfelt wishes and
                    affection to your loved ones on their special days. In fact, even if you live in another country
                    and wants to send a delicious cake to India for your parents, relatives, or friends on their
                    birthday, anniversary or any other occasion, then you can completely count on Bakes&Flakes for
                    timely delivery because we understand your love and emotions towards your close ones. So, go ahead
                    and place your online cake order from us from your comfort, and we will serve you the perfectly
                    baked  delicacies. Our online cake delivery service promise to deliver on the same day.</p>
            </div>
            <div>
                <h2>Buy Variety Of Bakery Items Online From Bakes&Flakes</h2>
                <p>Cakes: - We have lots and lots of different types of cakes available. You can buy cakes according to your preferences such as 
                    occasion, type, flavours, and your city. Our designer cakes have always been the talk of the town, and our photo cakes have 
                    never failed to impress people. If you are out of the country, you can easily send cake to India with same day delivery.

                    Jar Cakes: - This sweet version of the cakes is a new-age trend. Jar cakes are best suited to cater to little sweet hunger
                    pangs. At Bakingo, you can buy jar cakes in two different sizes and can also buy them with or without the combo.
                    Every single bite of our scrumptious jar cakes will make you drool madly.

                    Cupcakes: - These are the most popular and most cutest dish containing the richness and deliciousness of the cake.
                    You can buy and send cupcakes from Bakingo with so much ease to all your near and dear ones as we promise to deliver
                    oven-fresh cute delicacy. You can buy cupcakes in a combo of two, three, and six. You can also buy a single cupcake.

                    Pastries: - Pastries are good to enjoy little parties with your friends and family and sometimes also make a great snack
                    time food. Pastries at Bakingo are baked with all the premium ingredients using world-class baking process and techniques.
                    And our artist like designers put all their creativity to give an eye-catchy look to the pastries.

                    Brownies: - Brownies are baked delicacies that look like a piece of cake, just like pastries at first look but are denser
                    and a bit hard than the cake. They provide a taste that rests between a cake and a bar of chocolate. You can order different
                    kinds of brownies and brownie sets from Bakingo.

                    Pinata Cake: - Someone thought of hiding a cake inside the hard, sugary, edible covering, and it is now known as Pinata
                    Cakes. The best thing about pinata cakes is that they provide an element of surprise even after the cake is taken out of
                    the box. We deliver amazing Pinata cakes through our online cake delivery service and provide a wooden hammer for free to
                    break the hard covering.

                    Pull Me Up Cake: - We have amazing and magical Pull Me Up Cakes which provide a performance of dripping chocolate as soon
                    as you pull up the plastic covering. You will see a cake coming to its final decision before your eyes and at your comfort.</p>
            </div>
            <div className={styles.rest1}>
                <h2>Buy baked items other than cake</h2>
                <p>We also sell pizza, baked momo, au gratin and many baked items on priority.</p>
            </div>
            <div className={styles.rest1}>
                <h2>How do we take order?</h2>
                <p>Please call us 3days prior of your order or you can mail us if you have any query.</p>
            </div>
            </div>
        </Fragment>
    )
}