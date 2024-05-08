import Sushi from '../../assets/img/Sushi.jpg';
import css from './styles.module.scss';
import { Majesticons } from '../../assets/svgComponents/Majesticons';
import { useGlobalState } from '../../GlobalStateContext/GlobalStateContext';

const RecommendedList = ({ recomList }) => {
    const { globalState, setGlobalState } = useGlobalState();
    const handleAddOrder = (e) => {
        setGlobalState(prevState => ({
            ...prevState,
            orderArr: [...prevState.orderArr, {...e, quantity: 1 }]
        }));
        
    };
    return (
        <div className={css.setsList}>
            <ul className={css.setsUl}>
                {recomList.length > 0 ? recomList.map((a) => {
                    const { id, name, price, description, img, pcs } = a;
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
                            <div>
                                <span className={css.name}>{name}</span>
                                <span >{pcs}</span>
                            </div>
                            <span className={css.prays}>{price}$</span>
                        </div>
                        <div className={css.contentBox}>
                            <div className={css.byBox}>
                                <p style={{ whiteSpace: 'pre-wrap' }}>{description}</p>
                            </div>
                            <div className={css.btnBox}>
                                <button
                                    className={css.btn}
                                    onClick={() => handleAddOrder(a)}
                                    disabled={globalState.orderArr.some(item => item.id === a.id)}
                                >
                                    <Majesticons fill='#000' />
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
