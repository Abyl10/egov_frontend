import React, { useState } from 'react';
import { Button, Input } from '@/components';

import classes from './styles.module.scss';
import { getDeliveryInfo } from '@/requests/person';
import { useNavigate } from 'react-router-dom';

interface IDelivery {
  iin: string;
  delivery_number: string;
}

const Main: React.FC = () => {
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState<IDelivery>({
    iin: '',
    delivery_number: '',
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setDelivery({ ...delivery, [e.target.name]: e.target.value });
  };

  const handleButtonClick = () => {
    if (!delivery.iin || !delivery.delivery_number) {
      setError('Заполните все поля');
      return;
    } else {
      setLoading(true);
      getDeliveryInfo(delivery.delivery_number, delivery.iin).then((res) => {
        setLoading(false);
        if (res.data.resultCode === 'OK') {
          localStorage.setItem('iin', delivery.iin);
          localStorage.setItem('deliveryInfo', JSON.stringify(res.data));
          navigate(`/delivery-info/${delivery.delivery_number}`);
        } else {
          setError('Не удалось найти документ. Проверьте правильность введенных данных');
        }
      });
    }
  };

  return (
    <div className={classes['main']}>
      <div className={classes['main__wrapper']}>
        <p className={classes['main__delivery']}>Доставка документов</p>
        <p className={classes['main__info']}>Пожалуйста введите свои данные.</p>
        <div className={classes['u-margin-bottom-sm']}>
          <Input name={'iin'} onChange={handleChange} label={'ИИН'} value={delivery.iin} />
        </div>
        <div className={classes['u-margin-bottom-md']}>
          <Input
            name={'delivery_number'}
            onChange={handleChange}
            label={'Номер заказа'}
            value={delivery.delivery_number}
          />
        </div>
        {loading && <p className={classes['main__loading']}>Загрузка...</p>}
        {error && <p className={classes['main__error']}>{error}</p>}
        <Button text={'Получить данные'} onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Main;
