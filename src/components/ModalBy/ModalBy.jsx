import React, {useState} from 'react';
import css from './styles.module.scss';
import { useGlobalState } from '../../GlobalStateContext/GlobalStateContext';
import { useNavigate } from 'react-router-dom';

function ModalBy() {
  const { globalState, setGlobalState } = useGlobalState();
  const navigate = useNavigate();
  const closeModal = () => {
    setGlobalState(prevState => ({
        ...prevState,
        isModalByOpen: false
    }));
  };
  const openCard = () => {
    setGlobalState(prevState => ({
        ...prevState,
        isModalByOpen: false
    }));
    navigate('/order');
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  return (
    <div>
      {globalState.isModalByOpen && (
        <div className={css.modal}>
          <div className={css.modalKontent}>
            <h2>Added to cart</h2>
            <div className={css.buttonBox}>
              <button onClick={openCard} className={css.closeButton}>
                Go to basket
              </button>
              <button onClick={closeModal} className={css.closeButton}>
                Continue shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalBy;
