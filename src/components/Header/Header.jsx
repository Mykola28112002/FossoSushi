import { EvaMenu } from '../../assets/svgComponents/EvaMenu';
import { Majesticons } from '../../assets/svgComponents/Majesticons';
import { LogoMenu } from '../../assets/svgComponents/LogoMenu';
import css from './styles.module.scss';
import { useGlobalState } from '../../GlobalStateContext/GlobalStateContext';
import { useNavigate } from 'react-router-dom';
import { Phone } from '../../assets/svgComponents/Phone';

const Header = ({type}) => {
    const { setGlobalState } = useGlobalState();
    
    const openModal = () => {
        setGlobalState(prevState => ({
            ...prevState,
            isModalOpen: true
        }));
    };
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <>
            <header className={type === 'home' ? css.btnHeader : css.btnHeaderMenu}>
                {type !== 'home' && <LogoMenu />}
                <div className={css.btnBox}>
                    <button onClick={() => handleNavigation('/order')} className={css.btn}>
                        <Majesticons  fill={type === 'home' ? "#DA5541" : "#fff"}/>
                    </button>
                    <button className={css.btn} onClick={openModal}>
                        <EvaMenu fill={type === 'home' ? "#DA5541" : "#fff"}/>
                    </button>
                </div>
                <a href="tel:+18259674847" className={css.btnPhone}>
                    <Phone/>
                </a>
            </header>
        </>
        
    );
};

export default Header;
