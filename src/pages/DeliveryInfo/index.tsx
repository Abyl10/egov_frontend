import React, { useEffect, useState } from 'react';

import classes from './styles.module.scss';
import { Button, Checkbox, Input } from '@/components';
import { useLocation, useNavigate } from 'react-router-dom';

import { Modal } from '@mui/material';
import { getPersonInfoByIIN, getPhoneNumber, saveOrder } from '@/requests/person';
import { IOrderData } from '@/ts/types';
import { getToken } from '@/requests/generateToken';

const DeliveryInfo: React.FC = () => {
  const params = useLocation();
  const navigate = useNavigate();
  const [personInfo, setPersonInfo] = useState<any>({});
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);

  const [orderData, setOrderData] = useState<IOrderData>({
    orderNumber: '',
    serviceName: '',
    department: '',
    recipientInfo: {
      iin: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      deliveryAddress: {
        region: '',
        city: '',
        street: '',
        houseNumber: '',
        apartmentNumber: '',
        entranceNumber: '',
        floorNumber: '',
        buildingNumber: '',
        residentialComplexName: '',
        additionalInformation: '',
      },
    },
  });

  const getDeliveryId = () => {
    const deliveryId = params.pathname.split('/')[2];
    return deliveryId;
  };

  useEffect(() => {
    const token = getToken();
    const IIN = localStorage.getItem('iin');
    getPersonInfoByIIN(IIN || '')
      .then((res) => {
        setPersonInfo(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    getPhoneNumber(IIN || '').then((res) => {
      console.log(res);
      if (res.isExists) {
        setPhoneNumber(res.phone);
      } else {
        setPhoneNumber('');
      }
    });
  }, []);

  const handleButtonClick = () => {
    setOpenModal(true);
    const deliveryInfo = JSON.parse(localStorage.getItem('deliveryInfo') || '{}');
    console.log(deliveryInfo);
    const data = {
      orderNumber: getDeliveryId(),
      serviceName: 'Выдача справки о наличии либо отсутствии судимости',
      department:
        'Отдел №1 города Петропавловск по обслуживанию населения филиала некоммерческого акционерного общества «Государственная корпорация «Правительство для граждан» по Северо-Казахстанской области',
      recipientInfo: {
        iin: localStorage.getItem('iin') || '',
        firstName: personInfo.firstName,
        lastName: personInfo.lastName,
        phoneNumber: phoneNumber,
        deliveryAddress: {
          region: orderData.recipientInfo.deliveryAddress.region,
          city: orderData.recipientInfo.deliveryAddress.city,
          street: orderData.recipientInfo.deliveryAddress.street,
          houseNumber: orderData.recipientInfo.deliveryAddress.houseNumber,
          apartmentNumber: orderData.recipientInfo.deliveryAddress.apartmentNumber,
          entranceNumber: orderData.recipientInfo.deliveryAddress.entranceNumber,
          floorNumber: orderData.recipientInfo.deliveryAddress.floorNumber,
          buildingNumber: orderData.recipientInfo.deliveryAddress.buildingNumber,
          residentialComplexName: orderData.recipientInfo.deliveryAddress.residentialComplexName,
          additionalInformation: orderData.recipientInfo.deliveryAddress.additionalInformation,
        },
      },
    };
    saveOrder(data).then((res) => {
      console.log(res);
    });
  };

  const handleModalButtonClick = () => {
    setOpenModal(false);
    navigate('/payment');
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleOrderDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderData((prev) => ({
      ...prev,
      recipientInfo: {
        ...prev.recipientInfo,
        deliveryAddress: {
          ...prev.recipientInfo.deliveryAddress,
          [name]: value,
        },
      },
    }));
  };

  return (
    <div className={classes['info']}>
      <div className={classes['info__wrapper']}>
        <div className={classes['info__up']}>
          <p className={classes['info__up__title']}>Доставка документов</p>
          <h2 className={classes['info__up__delivery-no']}>{`Заказ № ${getDeliveryId()}`}</h2>
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
              value={personInfo.firstName || ''}
              disabled
            />
            <Input
              label={'Фамилия'}
              onChange={() => {
                return;
              }}
              value={personInfo.lastName || ''}
              disabled
            />
          </div>
          <div className={classes['u-margin-bottom-md']}>
            <Input
              label={'ИИН'}
              onChange={() => {
                return;
              }}
              value={personInfo.iin || ''}
              disabled
            />
          </div>
          <div className={classes['u-margin-bottom-md']}>
            <Input
              label={'Номер Телефона'}
              onChange={handlePhoneNumberChange}
              value={phoneNumber || ''}
            />
          </div>
          <div>
            <h2 className={classes['info__form__delivery-title']}>Доставка</h2>
            <div className={classes['info__form__fio']}>
              <Input label={'Область'} onChange={handleOrderDataChange} name={'region'} />
              <Input label={'Город'} onChange={handleOrderDataChange} name={'city'} />
            </div>
            <div className={classes['info__form__fio']}>
              <Input label={'Улица'} onChange={handleOrderDataChange} name={'street'} />
              <Input label={'Номер дома'} onChange={handleOrderDataChange} name={'houseNumber'} />
            </div>
            <div className={classes['info__form__fio']}>
              <Input label={'Подъезд'} onChange={handleOrderDataChange} name={'entranceNumber'} />
              <Input label={'Этаж'} onChange={handleOrderDataChange} name={'floorNumber'} />
              <Input label={'Квартира'} onChange={handleOrderDataChange} name={'apartmentNumber'} />
            </div>
            <div className={classes['u-margin-bottom-md']}>
              <Input
                label={'Название ЖК'}
                onChange={handleOrderDataChange}
                name={'residentialComplexName'}
              />
            </div>
            <div className={classes['u-margin-bottom-md']}>
              <Input
                label={'Дополнительная информация'}
                onChange={handleOrderDataChange}
                name={'additionalInformation'}
              />
            </div>
            <div className={classes['checkbox']}>
              <Checkbox
                checked={checked}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setChecked(event.target.checked);
                }}
              />
              <label htmlFor='my-checkbox'>Я принимаю условия публичного договора-оферты.</label>
            </div>
            <div className={classes['checkbox']}>
              <Checkbox
                checked={checked1}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setChecked1(event.target.checked);
                }}
              />
              <label htmlFor='my-checkbox'>
                Я ознакомлен и согласен с условиями политики конфиденциальности и персональных
                данных.
              </label>
            </div>
            <div className={classes['u-margin-bottom-md']}>
              <Button onClick={handleButtonClick} text={'Заказать доставку'} />
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className={classes['modal']}>
          <div className={classes['modal__wrapper']}>
            <div className={classes['modal__top']}>
              <h2 className={classes['modal__header']}>Внимание</h2>
              <p className={classes['modal__x']}>x</p>
            </div>
            <p className={classes['modal__text']}>
              Документы выдаются только заявителю! В случае отсутствия заявителя требуется
              нотариальная доверенность на получение документов в оригинале!
            </p>
            <div className={classes['modal__button']}>
              <Button onClick={handleModalButtonClick} text={'OK'} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeliveryInfo;
