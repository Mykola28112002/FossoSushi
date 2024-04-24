
import css from './styles.module.scss';

const AboutUs = () => {
    return (
        <section id='ABOUT' className={css.ABOUT_US}>
            <h2 className={css.title}>ABOUT US</h2>
            <div className={css.textBox}>
            <p className={css.text}>At our sushi workshop in Edmonton, we pride ourselves on creating stunning and mouthwatering sushi dishes. Our team of Ukrainian chefs infuses every roll with passion and expertise, ensuring a delightful culinary experience for our customers.</p>
            <p className={css.text}>Whether you opt for delivery or self-pickup, convenience is key in enjoying our delectable sushi offerings. From traditional favorites to innovative creations, we strive to cater to every palate and preference. Join us in savoring the flavors of Japan with a Ukrainian twist, right here in Edmonton.</p>
            </div>
        </section>
    );
};

export default AboutUs;
