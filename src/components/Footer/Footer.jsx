import css from './styles.module.scss';
import { Phone } from '../../assets/svgComponents/Phone';
import { Facebook } from '../../assets/svgComponents/Facebook';
import { Instagram } from '../../assets/svgComponents/Instagram';
import { Tiktok } from '../../assets/svgComponents/Tiktok';
import { Mail } from '../../assets/svgComponents/Mail';
import { MapPin } from '../../assets/svgComponents/MapPin';
import MapComponent from '../MapComponent/MapComponent';
import {ArrSocial} from '../../materials';

const Footer = () => {
  const { facebook, instagram, tiktok } = ArrSocial;
    return (
        <footer id='CONTACT' className={css.footer}>
        <h2 className={css.footerTitle}>CONTACTS</h2>
        <a className={css.footerTel} href="tel:+18259674847" width={24} height={24}><Phone />+1 825 967 4847</a>
        <div className={css.socialBox}>
          <a href={instagram}>
            <Instagram />
          </a>
          <a href={facebook}>
            <Facebook />
          </a>
          <a href={tiktok}>
            <Tiktok />
          </a>
        </div>
        <p className={css.footerText}>Follow us on social networks to stay updated on our latest products and promotions!</p>
        <a className={css.footerEmail} href="mailto:fosso.sushi.restaurant@gmail.com"><Mail /> fosso.sushi.restaurant@gmail.com</a>
        <h2 className={css.workingTitle}>Working hours:</h2>
        <ul className={css.workingList}>
          <li>
            <span>Tuesday</span>
            <span>2pm.-9pm.</span>
          </li>
          <li>
            <span>Wednesday</span>
            <span>2pm.-9pm.</span>
          </li>
          <li>
            <span>Thursday</span>
            <span>2pm.-9pm.</span>
          </li>
          <li>
            <span>Friday</span>
            <span>2pm.-9pm.</span>
          </li>
          <li>
            <span>Saturday</span>
            <span>2pm.-9pm.</span>
          </li>
        </ul>
        <h2>ADDRESS</h2>
        <a href='https://www.google.com/maps/place/8861+63+Ave+NW,+Edmonton,+AB+T6E+0E9,+%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0/@53.4995546,-113.4677359,17z/data=!3m1!4b1!4m6!3m5!1s0x53a018bd92984281:0x14c31b875d55318!8m2!3d53.4995546!4d-113.465161!16s%2Fg%2F11c25yyvdj?entry=ttu' className={css.cartText}>
          <MapPin />  Edmonton AB, 8861 63 Ave
        </a>
        <div className={css.cartBox}>
          <div><MapComponent /></div>
        </div>
        <div className={css.line}></div>
        <span className={css.textFooter}>(c) Fosso_sushi_studio 2024. All rights reserved.</span>
      </footer>
    );
};

export default Footer;
