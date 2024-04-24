import React, { createContext, useState, useContext, useEffect } from 'react';

// Створюємо контекст глобального стану
const GlobalStateContext = createContext();

// Створюємо компонент-постачальник для надання стану дочірнім компонентам
export const GlobalStateProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState(() => {
        // Перевіряємо, чи є дані у localStorage і використовуємо їх, якщо вони є, або встановлюємо значення за замовчуванням
        const savedState = localStorage.getItem('globalState');
        return savedState ? JSON.parse(savedState) : {
            isModalOpen: false,
            orderArr: []
        };
    });

    // Підписуємося на зміни globalState і зберігаємо їх у localStorage
    useEffect(() => {
        localStorage.setItem('globalState', JSON.stringify(globalState));
    }, [globalState]);

    return (
        <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

// Власний хук для зручного отримання та оновлення глобального стану
export const useGlobalState = () => useContext(GlobalStateContext);
