import React from 'react';
import css from './styles.module.scss';

const Allergens = ({id}) => {
    return (
        <div id={id} className={css.Allergens}>
            <h2 className={css.title}>Allergens</h2>
            <ul className={css.textList}>
                <li>1. Fish (such as salmon, tuna, mackerel)</li>
                <li>2. Shellfish (like shrimp, crab, lobster)</li>
                <li>3. Soy (including soy sauce)</li>
                <li>4. Gluten (found in soy sauce and some imitation crab meat)</li>
                <li>5. Sesame seeds</li>
                <li>6. Eggs</li>
                <li>7. Dairy (in some creamy sauces or toppings)</li>
                <li>8. Wheat (in tempura batter or some soy sauces)</li>
                <li>9. Mustard (in some spicy sauces)</li>
                <li>10. Tree nuts</li>
            </ul>
        </div>
    );
};

export default Allergens;
