import HeroImg from '../../assets/img/Hero.jpg';
import css from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import RecommendedList from '../RecommendedList/RecommendedList';
import { ArrReccomended } from '../../materials'

const Recommend = () => {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <section className={css.RECOMMEND}>
            <h2 className={css.title}>WE RECOMMEND</h2>
            <RecommendedList recomList={ArrReccomended} />
            <button onClick={() => handleNavigation('/menu')} className={css.btn}>VIEW THE MENU</button>
            <h3 className={css.titleBot}>Dishes that we create with love!</h3>
        </section>
    );
};

export default Recommend;
