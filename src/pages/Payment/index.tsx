/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Button, CardPaymentInput } from '@/components';
import Apple from '@/assets/icons/icons8-apple-pay.svg';
import Kaspilg from '@/assets/icons/kaspi-bank.svg';
import Paypal from '@/assets/icons/icons8-paypal.svg';

import classes from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
interface IPayment {
  CardNumber: string;
  CardCVC: string;
}
const Payment: React.FC = () => {
  const navigate = useNavigate();
  const [payment, setPayment] = React.useState<IPayment>({
    CardNumber: '',
    CardCVC: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(payment);
  };

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div className={classes['info']}>
      <div className={classes['info__wrapper']}>
        <div className={classes['info__up']}>
          <p className={classes['info__up__title']}>Доставка документов</p>
          <h2 className={classes['info__up__delivery-no']}>Заказ № 0022404432</h2>
          <p className={classes['info__up__additional']}>
            Выдача копий документов регистрационного дела, заверенных регистрирующим органом,
            включая план (схемы) объектов недвижимости
          </p>
        </div>
        <div className={classes['dashedCard']}>
          <div className={classes['miniHeader']}>
            <h2 className={classes['h3Header']}>Оплата заказа</h2>
            <h2 className={classes['h3Header']}>Заказ №070490</h2>
          </div>
          <h1 className={classes['price']}>2560.0 ₸</h1>

          <CardPaymentInput
            label='Card Number'
            id='cardNumber'
            type='text'
            mask='9999 9999 9999 9999'
            placeholder='0000 0000 0000 0000'
            onChange={handleChange}
          />
          <CardPaymentInput
            label='Expiration Date'
            id='expirationDate'
            type='text'
            mask='99/99'
            placeholder='MM/YY'
            onChange={handleChange}
          />
          <CardPaymentInput
            label='CVV'
            id='cvv'
            type='text'
            mask='999'
            onChange={handleChange}
            placeholder='***'
          />
          <div className={classes['separator']} />
          <div className={classes['buttons-wrapper']}>
            <div className={classes['button-row']}>
              <button className={classes['black-button']}>
                <img src={Apple} className={classes['icon']} />
              </button>
              <button className={classes['blue-button']}>
                <img src={Paypal} className={classes['icon']} />
              </button>
              <button className={classes['red-button']}>Kaspi</button>
            </div>
          </div>
          <Button text={'Оплатить'} onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
