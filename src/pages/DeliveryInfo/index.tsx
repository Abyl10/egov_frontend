import React from 'react';

import classes from './styles.module.scss';
import { Input } from '@/components';

const DeliveryInfo: React.FC = () => {
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
        <div className={classes['info__form']}>
          <p className={classes['info__form__title']}>Данные получателя</p>
          <div className={classes['info__form__fio']}>
            <Input
              label={'Имя'}
              onChange={() => {
                return;
              }}
            />
            <Input
              label={'Фамилия'}
              onChange={() => {
                return;
              }}
            />
          </div>
          <div className={classes['u-margin-bottom-md']}>
            <Input
              label={'ИИН'}
              onChange={() => {
                return;
              }}
            />
          </div>
          <div className={classes['u-margin-bottom-md']}>
            <Input
              label={'Номер Телефона'}
              onChange={() => {
                return;
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
