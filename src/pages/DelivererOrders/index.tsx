import Card from '@/components/Card';
import React, { useEffect, useState } from 'react';
import classes from './styles.module.scss';
import { Button, Input } from '@/components';
import { getMyDelivers } from '@/requests/courier';
import { useUserContext } from '@/context/userContext';

const DelivererOrders = () => {
  const [myOrder, setMyOrder] = useState<any>([]);
  const { user } = useUserContext();

  useEffect(() => {
    getMyDelivers(user.id).then((res) => {
      setMyOrder(res);
      console.log(res);
    });
  }, []);

  const handleButtonClick = () => {
    return;
  };

  const getFullName = () => {
    return `${myOrder[0]?.recipient_first_name} ${myOrder[0]?.recipient_last_name}`;
  };

  const getFullAddress = () => {
    return `${myOrder[0]?.delivery_region} область, ${myOrder[0]?.delivery_city} город, ${myOrder[0]?.delivery_street} улица, ${myOrder[0]?.delivery_house_number} дом, ${myOrder[0]?.delivery_entrance_number} подъезд, ${myOrder[0]?.delivery_floor_number} этаж, ${myOrder[0]?.delivery_apartment_number} квартира`;
  };
  return (
    <div>
      {myOrder.length > 0 ? (
        <Card>
          <p className={classes['order-num']}>{`Заказ № ${myOrder[0]?.order_number}`}</p>
          <div className={classes['column']}>
            <div className={classes['row']}>
              <p className={classes['titleRequest']}>Получатель: </p>{' '}
              <p className={classes['response']}>{getFullName()}</p>
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
              <p className={classes['response']}>{getFullAddress()}</p>
            </div>
            <div className={classes['row']}>
              <p className={classes['titleRequest']}>Дополнительная информация:</p>{' '}
              <p className={classes['response']}>{myOrder[0]?.delivery_additional_information}</p>
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
      ) : (
        <p className={classes['no_requests']}>У вас нет заказов</p>
      )}
    </div>
  );
};

export default DelivererOrders;
