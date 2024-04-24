import React from 'react';
import css from './styles.module.scss';
import { Close } from '../../assets/svgComponents/Close';
import { Majesticons } from '../../assets/svgComponents/Majesticons';
import { EvaMenu } from '../../assets/svgComponents/EvaMenu';
import { Instagram } from '../../assets/svgComponents/Instagram';
import { Facebook } from '../../assets/svgComponents/Facebook';
import { Tiktok } from '../../assets/svgComponents/Tiktok';
import { MapPin } from '../../assets/svgComponents/MapPin';
import { useGlobalState } from '../../GlobalStateContext/GlobalStateContext';
import { useNavigate } from 'react-router-dom';
import {ArrSocial} from '../../materials';


const ModalMenu = () => {
    const { globalState, setGlobalState } = useGlobalState();
    const { facebook, instagram, tiktok } = ArrSocial;
    const isModalOpen = globalState.isModalOpen;

    const handleInnerClick = (e) => {
        e.stopPropagation();
    };
    const onClose = () => {
        setGlobalState(prevState => ({
            ...prevState,
            isModalOpen: false
        }));
    };
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        onClose()
    };
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            onClose()
        }
    };

    const handleAboutUs = () => {
        navigate('/');
        onClose();
        setTimeout(() => scrollToSection('ABOUT'), 100);
    };
    if (isModalOpen) {
        return (
            <div className={css.modalOverlay} onClick={onClose}>
                <div className={css.modal} onClick={handleInnerClick}>
                    <div className={css.modalContent}>
                        <button className={css.modalClose} onClick={onClose}>
                            <Close />
                        </button>
                        <button onClick={() => handleNavigation('/order')} className={css.btnCor}>
                            <Majesticons fill="#fff"/>
                        </button>
                        <button className={css.btnMenu} onClick={onClose}>
                            <EvaMenu fill="#fff"/>
                        </button>
                    </div>
                    <ul className={css.menuList}>
                        <li><button onClick={() => handleNavigation('/')}>HOME</button></li>
                        <li><button onClick={() => handleAboutUs()}>ABOUT US</button></li>
                        <li><button onClick={() => handleNavigation('/menu')}>MENU</button></li>
                        <li><button onClick={() => scrollToSection('CONTACT')}>CONTACT</button></li>
                        <li><button onClick={() => handleNavigation('/order')}>ORDER</button></li>
                    </ul>
                    <div className={css.infoBox}>
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
                        <p>Follow us on social networks to stay updated on our latest products and promotions!</p>
                        <a href='https://www.google.com/maps/place/8861+63+Ave+NW,+Edmonton,+AB+T6E+0E9,+%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0/@53.4995546,-113.4677359,17z/data=!3m1!4b1!4m6!3m5!1s0x53a018bd92984281:0x14c31b875d55318!8m2!3d53.4995546!4d-113.465161!16s%2Fg%2F11c25yyvdj?entry=ttu' className={css.cartText}>
                            <MapPin />  Edmonton AB, 8861 63 Ave
                        </a>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    };
};

export default ModalMenu;
