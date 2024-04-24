import React, {useEffect, useRef, useState} from 'react';
import css from './styles.module.scss';
import { Delivery } from '../../assets/svgComponents/Delivery';

const FilterMenu = ({type, selectedOption, setSelectedOption}) => {
    const buttonRef = useRef(null);
    
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.focus();
        }
    }, []);

    
    
    return (
        <div className={css.FilterMenu} id='DELIVERY'>
            {type !== 'order' ? 
                <div className={css.Filter}>
                    <button ref={buttonRef} onClick={() => scrollToSection('DELIVERY')}><Delivery />DELIVERY</button>
                    <button onClick={() => scrollToSection('SETS')}>SETS</button>
                    <button onClick={() => scrollToSection('SUSHI')}>SUSHI</button>
                    <button onClick={() => scrollToSection('HOT-ROLLS')}>HOT ROLL</button>
                    <button onClick={() => scrollToSection('TEMPURA')}>TEMPURA</button>
                    <button onClick={() => scrollToSection('SUSHI-BURGER')}>SUSHI-BURGER</button>
                    <button onClick={() => scrollToSection('DRINKS')}>DRINKS</button>
                    <button onClick={() => scrollToSection('ALLERGEN')}>ALLERGEN</button>
                </div> :
                <div className={css.FilterDELIVERY}>
                    <button className={`${selectedOption === 'DELIVERY' && css.FilterBtnActive}`} onClick={() => handleOptionClick('DELIVERY')}><Delivery />DELIVERY</button>
                    <button className={`${selectedOption === 'PICKUP' && css.FilterBtnActive}`} onClick={() => handleOptionClick('PICKUP')}>PICKUP</button>
                </div>
            }
            <div className={css.deliveryTime}>
                <p>Delivery is available from 3pm. to 10pm.</p>
            </div>
        </div>
    );
};

export default FilterMenu;
