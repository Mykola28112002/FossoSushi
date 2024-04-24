import { Phone } from '../../assets/svgComponents/Phone';
import css from './styles.module.scss';

const Hero = () => {
    return (
      <section className={css.Hero}>
        <div className={css.HeroBtnBox}>
          <a href="tel:+18259674847" className={css.btn}>ORDER NOW <Phone className={css.Phone} /></a>
          <span className={css.text}>We speak English, <br/> Ukrainian, Polish</span>
        </div>
      </section>
    );
};

export default Hero;
