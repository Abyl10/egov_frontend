import React, { useEffect, useState } from 'react';

import classes from './styles.module.scss';
import { Button, Checkbox, Input } from '@/components';
import { useLocation, useNavigate } from 'react-router-dom';

import { Modal } from '@mui/material';

const DeliveryInfo: React.FC = () => {
  const params = useLocation();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);

  const getDeliveryId = () => {
    const deliveryId = params.pathname.split('/')[2];
    return deliveryId;
  };

  // useEffect(() => {
  //   console.log(getDeliveryId());
  //   const iin = localStorage.getItem('iin');
  //   getPersonInfo(iin || '').then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  const handleButtonClick = () => {
    setOpenModal(true);
  };

  const handleModalButtonClick = () => {
    setOpenModal(false);
    navigate('/payment');
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
          <div>
            <h2 className={classes['info__form__delivery-title']}>Доставка</h2>
            <div className={classes['info__form__fio']}>
              <Input
                label={'Область'}
                onChange={() => {
                  return;
                }}
              />
              <Input
                label={'Город'}
                onChange={() => {
                  return;
                }}
              />
            </div>
            <div className={classes['u-margin-bottom-md']}>
              <Input
                label={'Улица и дом'}
                onChange={() => {
                  return;
                }}
              />
            </div>
            <div className={classes['u-margin-bottom-md']}>
              <Input
                label={'Дополнительная информация'}
                onChange={() => {
                  return;
                }}
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
