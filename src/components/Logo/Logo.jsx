import { Game } from '../../assets/svgComponents/Game';
import { FOSSO } from '../../assets/svgComponents/FOSSO';
import css from './styles.module.scss';

const Logo = () => {
    return (
        <section className={css.logo}>
        <div className={css.logoBox}>
          <Game />
          <FOSSO />
        </div>
        <span className={css.text}>sushi&studio</span>
      </section>
    );
};

export default Logo;
