import Sushi from '../../assets/img/Sushi.jpg';
import css from './styles.module.scss';
import { Majesticons } from '../../assets/svgComponents/Majesticons';

const RecommendedList = ({ recomList }) => {
    return (
        <div className={css.setsList}>
            <ul className={css.setsUl}>
                {recomList.length > 0 ? recomList.map((a, index) => {
                    const { id, name, price, description, img } = a;
                    return <li key={id} className={css.item}>
                        {img !== undefined ?
                            <img src={img} alt={img} width={'100%'}  /> :
                            <div className={css.imgBackground}>
                                <div className={css.overlay}>
                                    <span className={css.text}>Photo will come later</span>
                                </div>
                                <img src={Sushi} alt={Sushi} width={'100%'} />
                            </div>
                        }
                        <div className={css.praysBox}>
                            <span className={css.name}>{name}</span>
                            <span className={css.prays}>{price}$</span>
                        </div>
                        <div className={css.contentBox}>
                            <div className={css.byBox}>
                                <p style={{ whiteSpace: 'pre-wrap' }}>{description}</p>
                            </div>
                            <div className={css.btnBox}>
                                <button className={css.btn}>
                                    <Majesticons fill='#fff' />
                                </button>
                            </div>
                        </div>
                    </li>
                }
                ) : 
                    <div className={css.contentNullBox}>
                        <h2>WELL BE AVAILABLE SOON!</h2>
                    </div>
                }
            </ul>
        </div>
        
    );
};

export default RecommendedList;
