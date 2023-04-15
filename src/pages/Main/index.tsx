import React from 'react';
import { Button, Input } from '@/components';

import classes from './styles.module.scss';

interface IDelivery {
  iin: string;
  delivery_number: string;
}

const Main: React.FC = () => {
  const [delivery, setDelivery] = React.useState<IDelivery>({
    iin: '',
    delivery_number: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDelivery({ ...delivery, [e.target.name]: e.target.value });
  };

  const handleButtonClick = () => {
    return;
  };

  return (
    <div className={classes['main']}>
      <div className={classes['main__wrapper']}>
        <p className={classes['main__delivery']}>Доставка документов</p>
        <p className={classes['main__info']}>Пожалуйста введите свои данные.</p>
        <div className={classes['u-margin-bottom-sm']}>
          <Input
            name={'iin'}
            onChange={handleChange}
            label={'ИИН'}
            value={delivery.iin}
            placeholder={'1234123412341234'}
          />
        </div>
        <div className={classes['u-margin-bottom-md']}>
          <Input
            name={'delivery_number'}
            onChange={handleChange}
            label={'Номер заказа'}
            value={delivery.delivery_number}
            placeholder={'123456789'}
          />
        </div>
        <Button text={'Получить данные'} onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Main;
