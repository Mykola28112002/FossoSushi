import React, {useState} from 'react';
import ModalMenu from '../components/ModalMenu/ModalMenu';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import FilterMenu from '../components/FilterMenu/FilterMenu';
import MenuList from '../components/MenuList/MenuList';
import DeliveryForm from '../components/DeliveryForm/DeliveryForm';
import PickupForm from '../components/PickupForm/PickupForm';
import { useGlobalState } from '../GlobalStateContext/GlobalStateContext';
import Modal from '../components/Modal/Modal';
import emailjs from '@emailjs/browser';

const Order = () => {
    const serviceId = 'service_jp5ey5m';
    const userId = '685QO5Je5D_QH2K8C';
    const botToken = '6670329183:AAFmT1iq-5X0_2Ahieq1O7qn_6m7XdYLHJE';
    const chatId = '692784566';
    const [selectedOption, setSelectedOption] = useState('DELIVERY');
    const { globalState, setGlobalState } = useGlobalState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formDataPickup, setFormDataPickup] = useState({
        firstName: '',
        phoneNumber: '',
        pickingTime: '',
        allergies: '',
    });
    const [formDataDelivery, setFormDataDelivery] = useState({
        firstName: '',
        phoneNumber: '',
        address: '',
        deliveryTime: '',
        allergies: '',
    });
    const orderArr = globalState.orderArr;
    const title = {
        textAlign: 'center',
        marginTop: '40px',
    };
    const box = {
        background: '#103533'
    };
    const nameAndQuantityArray = orderArr.map(item => `${item.name}:(${item.quantity})pcs.`)
    const text = nameAndQuantityArray.join('\n');
    const handleSubmitPickup = async (e) => {
        e.preventDefault();
        setIsModalOpen(true);

        const smsData = {
            name: formDataPickup.firstName,
            number: formDataPickup.phoneNumber,
            pickingTime: formDataPickup.pickingTime,
            allergies: formDataPickup.allergies,
            sushi: text,
        };
        // Створіть повідомлення для відправки до Telegram
        const message = `Name: ${smsData.name}\nNumber: ${smsData.number}\nPicking Time: ${smsData.pickingTime}\nAllergies: ${smsData.allergies}\nSushi: ${smsData.sushi}`;
        try {
            // Відправка HTTP-запиту до Telegram Bot API для відправки повідомлення
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                }),
            });

            if (response.ok) {
                console.log('Message sent to Telegram successfully');
            } else {
                console.error('Error sending message to Telegram:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending message to Telegram:', error);
        }

        // Скидаємо стан замовлення та прокручуємо сторінку догори
        setGlobalState(prevState => ({
            ...prevState,
            orderArr: []
        }));
        window.scrollTo(0, 0);
    };


    const handleSubmitDelivery = async (e) => {
        e.preventDefault();
    //     fetch(`https://api.telegram.org/bot${botToken}/getUpdates`)
    // .then(response => response.json())
    // .then(data => {
    //     if (data.ok) {
    //         // Оновлення успішно отримано
    //         const updates = data.result;

    //         // Перебираємо оновлення, щоб знайти `chat_id`
    //         updates.forEach(update => {
    //             const chatId = update.message?.chat?.id;
    //             console.log(`Chat ID: ${chatId}`);
    //         });
    //     } else {
    //         console.error('Failed to get updates:', data.description);
    //     }
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
        setIsModalOpen(true);

        const smsData = {
            name: formDataDelivery.firstName,
            number: formDataDelivery.phoneNumber,
            address: formDataDelivery.address,
            deliveryTime: formDataDelivery.deliveryTime,
            allergies: formDataDelivery.allergies,
            sushi: text,
        };

        // Відправлення SMS
        const templateId = 'template_1lcxxp4';
        emailjs.send(serviceId, templateId, smsData, userId)
            .then((response) => {
                console.log('SMS sent successfully:', response.status);
            })
            .catch((error) => {
                console.error('Error sending SMS:', error);
            });

        // Відправлення повідомлення у Telegram
        const sendToTelegram = async () => {
            const message = `Name: ${smsData.name}\nNumber: ${smsData.number}\nAddress: ${smsData.address}\nDelivery Time: ${smsData.deliveryTime}\nAllergies: ${smsData.allergies}\nSushi: ${smsData.sushi}`;
            // Відправляємо HTTP-запит до Telegram Bot API для відправки повідомлення
            try {
                const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                    }),
                });

                if (response.ok) {
                    console.log('Message sent to Telegram successfully');
                } else {
                    console.error('Error sending message to Telegram:', response.statusText);
                }
            } catch (error) {
                console.error('Error sending message to Telegram:', error);
            }
        };
        // Викликаємо функцію для відправлення повідомлення у Telegram
        await sendToTelegram();
        // Скидаємо стан замовлення та прокручуємо сторінку догори
        setGlobalState(prevState => ({
            ...prevState,
            orderArr: []
        }));
        window.scrollTo(0, 0);
    };

    
    return (
        <div style={box}>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <ModalMenu />
            <Header />
            <FilterMenu selectedOption={selectedOption} setSelectedOption={setSelectedOption} type='order' />
            <h2 style={title}>YOUR ORDER</h2>
            <MenuList type='order' menuList={orderArr} />
            {orderArr.length > 0 && (selectedOption === 'DELIVERY' ?
                <DeliveryForm
                    formData={formDataDelivery}
                    setFormData={setFormDataDelivery}
                    handleSubmit={handleSubmitDelivery}
                /> :
                <PickupForm
                    formData={formDataPickup}
                    setFormData={setFormDataPickup}
                    handleSubmit={handleSubmitPickup}
                />)}
            <Footer />
        </div>
    );
}

export default Order;
