import React, { useState } from 'react';
import css from './styles.module.scss';

const DeliveryForm = ({ formData, setFormData, handleSubmit }) => {
  const [errors, setErrors] = useState({});

  // Функція для обробки зміни значення форми
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Функція для валідації форми
  const validateForm = () => {
    const newErrors = {};

    // Перевірка обов'язкових полів
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else {
      // Перевірка формату телефонного номера (простий приклад)
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Invalid phone number';
      }
    }

    // Перевірка поля для часу прийому
    if (!formData.pickingTime) {
      newErrors.pickingTime = 'Picking time is required';
    }

    // Якщо є помилки, повертаємо об'єкт з помилками
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleFormSubmit = (e) => {
    if (validateForm()) {
      handleSubmit(e);
    }
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <h2>PICKUP</h2>
      <p>Fill out the form to receive delivery. Once we receive your information, we will call you within 15 minutes to confirm your order.</p>
      <div className={css.box}>
        {errors.firstName && <p className={css.errorMessage}>{errors.firstName}</p>}
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className={errors.firstName ? `${css.errorInput} ${css.firstName}` : css.firstName}
        />
      </div>
      
      <div className={css.box}>
        {errors.phoneNumber && <p className={css.errorMessage}>{errors.phoneNumber}</p>}
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className={errors.phoneNumber ? `${css.errorInput} ${css.phoneNumber}` : css.phoneNumber}
        />
      </div>
      
      <div className={css.box}>
        {errors.pickingTime && <p className={css.errorMessage}>{errors.pickingTime}</p>}
        <textarea
          type="text"
          name="pickingTime"
          placeholder="Order picking time"
          value={formData.pickingTime}
          onChange={handleChange}
          className={errors.pickingTime ? `${css.errorInput} ${css.pickingTime}` : css.pickingTime}
        />
      </div>
      
      

      <textarea
        placeholder="Indicate how many people you need utensils for, and do you have allergies to any products? Here you can specify any additional information that will help us make the best product for you."
        type="text"
        name="allergies"
        value={formData.allergies}
        onChange={handleChange}
      />

      <button className={css.btn} type="submit">SEND ORDER</button>
    </form>
  );
};

export default DeliveryForm;
