import Card from '@/components/Card';
import React from 'react';
import classes from './styles.module.scss';
import { Button, Input } from '@/components';

const DelivererOrders = () => {
  const handleButtonClick = () => {
    return;
  };
  return (
    <div>
      <Card>
        <p className={classes['order-num']}>Заказ № 0022404432</p>
        <div className={classes['column']}>
          <div className={classes['row']}>
            <p className={classes['titleRequest']}>Получатель: </p>{' '}
            <p className={classes['response']}>Абзалова Асель Рифкатовна</p>
          </div>
          <div className={classes['row']}>
            <p className={classes['titleRequest']}>Название госуслуги: </p>{' '}
            <p className={classes['response']}>
              Выдача копий документов регистрационного дела, заверенных регистрирующим органом,
              включая план (схемы) объектов недвижимости
            </p>
          </div>
          <div className={classes['row']}>
            <p className={classes['titleRequest']}>Отделение ЦОНа:</p>{' '}
            <p className={classes['response']}>
              Отдел №1 города Петропавловск по обслуживанию населения филиала некоммерческого
              акционерного общества «Государственная корпорация «Правительство для граждан» по
              Северо-Казахстанской области
            </p>
          </div>
          <div className={classes['row']}>
            <p className={classes['titleRequest']}>Адрес ЦОНа:</p>{' '}
            <p className={classes['response']}>Абзалова Асель Рифкатовна</p>
          </div>
          <div className={classes['row']}>
            <p className={classes['titleRequest']}>Адрес доставки:</p>{' '}
            <p className={classes['response']}>Абзалова Асель Рифкатовна</p>
          </div>
          <div className={classes['row']}>
            <p className={classes['titleRequest']}>Время оформления заказа:</p>{' '}
            <p className={classes['response']}>Абзалова Асель Рифкатовна</p>
          </div>
          <div className={classes['row']}>
            <p className={classes['titleRequest']}>Статус:</p>{' '}
            <p className={classes['response']}>Абзалова Асель Рифкатовна</p>
          </div>
          <div className={classes['column']}>
            <p className={classes['response']}>
              Чтобы поменять статус, пожалуйста введите код, который вам скажет получатель{' '}
            </p>
            <div className={classes['row']}>
              <Input
                label={''}
                placeholder='0000'
                onChange={() => {
                  return;
                }}
              />
              <Button onClick={handleButtonClick} text={'Проверить'} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DelivererOrders;
