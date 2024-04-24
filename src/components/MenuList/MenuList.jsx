import React, { useState } from 'react';
import Sushi from '../../assets/img/Sushi.jpg';
import css from './styles.module.scss';
import { Majesticons } from '../../assets/svgComponents/Majesticons';
import { Close } from '../../assets/svgComponents/Close';
import { MajesticonsOrder } from '../../assets/svgComponents/MajesticonsOrder';
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../../GlobalStateContext/GlobalStateContext';

const MenuList = ({ type, title, menuList }) => {
    const navigate = useNavigate();
    const { globalState, setGlobalState } = useGlobalState();
    const orderArr = globalState.orderArr;
    const increment = (a) => {
        const index = orderArr.findIndex((item) => item.id === a.id);
        const newOrderArr = [...orderArr];
        newOrderArr[index] = {...newOrderArr[index], quantity: newOrderArr[index].quantity + 1 };

        setGlobalState(prevState => ({
            ...prevState,
            orderArr: newOrderArr
        }));
    };
    const decrement = (a) => {
        if (a.quantity > 1) {
            const newOrderArr = [...orderArr];
            const index = orderArr.findIndex((item) => item.id === a.id);
            newOrderArr[index] = {...newOrderArr[index], quantity: newOrderArr[index].quantity - 1 };

            setGlobalState(prevState => ({
                ...prevState,
                orderArr: newOrderArr
            }));
        }
    };
    const handleNavigation = (path) => {
        navigate(path);
    };
    const handleAddOrder = (e) => {
        setGlobalState(prevState => ({
            ...prevState,
            orderArr: [...orderArr, {...e, quantity: 1 }]
        }));
    };
    const handleDeleteOrder = (e) => {
        const filter = orderArr.filter(a => a.id !== e.id)
        setGlobalState(prevState => ({
            ...prevState,
            orderArr: filter
        }));
    };

    return (
        <div id={title} className={css.setsList}>
            <h2 className={`${css.title} ${type === 'order' && css.marginNone}`}>{title}</h2>
            <ul className={css.setsUl}>
                {menuList.length > 0 ? menuList.map((a, index) => {
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
                                {type === 'order' ? 
                                    <div className={css.btnOrderBox}>
                                        <div className={css.btnPlusBox}>
                                            <button onClick={() => increment(a)}>+</button>
                                            <span>{a.quantity}</span>
                                            <button onClick={() => decrement(a)}>-</button>
                                        </div>
                                        <button
                                            className={css.btnBy}
                                            onClick={() => handleDeleteOrder(a)}
                                        >
                                            <Close/>
                                        </button>
                                    </div>
                                    :
                                    <button
                                        className={css.btnBy}
                                        onClick={() => handleAddOrder(a)}
                                        disabled={orderArr.some(item => item.id === a.id)}
                                    >
                                        <Majesticons fill='#fff' />
                                    </button>

                                }
                                
                            </div>
                        </div>
                    </li>
                }
                ) : 
                    type === 'order' ?
                        <div className={css.contentOrder}>
                            <MajesticonsOrder fill='#fff' width={100} />
                            <p>Make an order!</p>
                            <button onClick={() => handleNavigation('/menu')} className={css.Order}>VIEW THE MENU</button>
                        </div> :
                    <div className={css.contentNullBox}>
                        <h2>WELL BE AVAILABLE SOON!</h2>
                    </div>
                }
            </ul>
        </div>
        
    );
};

export default MenuList;
