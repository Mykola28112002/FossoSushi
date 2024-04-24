import React from 'react';
import { Check } from '../../assets/svgComponents/Check'
import { Close } from '../../assets/svgComponents/Close'
import css from './styles.module.scss';

function Modal({isModalOpen, setIsModalOpen}) {
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <div className={css.modal}>
          <div className={css.modalKontent}>
            <button onClick={closeModal} className={css.closeButton}>
                <Close />
            </button>
            <h2>Thank you for your order! Wait for a call within 15 minutes.</h2>
            <Check/>
          </div>
          <div className={css.modalOverlay} onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
}

export default Modal;
