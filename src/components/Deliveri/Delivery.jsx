import { Shop } from '../../assets/svgComponents/Shop';
import { Car } from '../../assets/svgComponents/Car';
import { Solar } from '../../assets/svgComponents/Solar';
import css from './styles.module.scss';

const Delivery = () => {
    return (
        <section className={css.delivery}>
            <ul className={css.deliveryList}>
            <li>
                <Shop/>
                <h2>Working hours:</h2>
                <p>From Tuesday to Sunday</p>
                <span>2pm.-10pm.</span>
            </li>
            <li>
                <Car/>
                <h2>DELIVERY</h2>
                <p>From Tuesday to Sunday</p>
                <span>3pm.-10pm.</span>
            </li>
            <li>
                <Solar/>
                <h2>PICKUP</h2>
                <p>From Tuesday to Sunday</p>
                <span>3pm.-10pm.</span>
            </li>
            </ul>
        </section>
    );
};

export default Delivery;
