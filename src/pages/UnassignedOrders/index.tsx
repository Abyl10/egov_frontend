import React, { useState, useEffect } from 'react';

import classes from './styles.module.scss';
import { assignCourier, getCourierCompanies, getUnassignedOrders } from '@/requests/courier';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@mui/material';
import { useUserContext } from '@/context/userContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendSMS } from '@/requests/sms';
import { getToken } from '@/requests/generateToken';

interface ICourierCompany {
  courier_id: number;
  company_name: string;
}

const UnassignedOrders = () => {
  const [unassignedOrders, setUnassignedOrders] = useState<any>([]);
  const { user } = useUserContext();
  const [courierCompany, setCourierCompany] = useState<ICourierCompany>({
    courier_id: 0,
    company_name: '',
  });

  useEffect(() => {
    getToken();
    getUnassignedOrders().then((res) => {
      setUnassignedOrders(res);
    });
    getCourierCompanies().then((res) => {
      res.forEach((company: ICourierCompany) => {
        if (company.courier_id === user.id) {
          setCourierCompany(company);
        }
      });
    });
  }, []);

  function createData(
    order_number: string,
    full_name: string,
    service_name: string,
    tson_address: string,
    delivery_address: string,
    phoneNumber: string,
    otp: string,
  ) {
    return {
      order_number,
      full_name,
      service_name,
      tson_address,
      delivery_address,
      phoneNumber,
      otp,
    };
  }

  const getFullName = (index: number) => {
    return `${unassignedOrders[index]?.recipient_first_name} ${unassignedOrders[index]?.recipient_last_name}`;
  };

  const getFullAddress = (index: number) => {
    return `${unassignedOrders[index]?.delivery_region} область, ${unassignedOrders[index]?.delivery_city} город, ${unassignedOrders[index]?.delivery_street} улица, ${unassignedOrders[index]?.delivery_house_number} дом, ${unassignedOrders[index]?.delivery_entrance_number} подъезд, ${unassignedOrders[index]?.delivery_floor_number} этаж, ${unassignedOrders[index]?.delivery_apartment_number} квартира`;
  };

  const rows = unassignedOrders.map((order: any, ind: number) => {
    return createData(
      order?.order_number,
      getFullName(ind),
      order?.service_name,
      'г. Астана, Керей Жанибек 4',
      getFullAddress(ind),
      order.recipient_phone_number,
      order.otp,
    );
  });

  const handleAddReqeustClick = (orderNumber: string, phoneNumber: string, otp: string) => {
    assignCourier(orderNumber, user?.id).then((response) => {
      console.log(response);
      toast.success('Курьер успешно назначен!', {
        position: toast.POSITION.TOP_CENTER,
      });
      sendSMS(
        phoneNumber,
        `Ваш заказ ${orderNumber} назначен курьеру ${user.first_name} из компании ${courierCompany.company_name}. Ваш ОТП код ${response.otp} Спасибо за использование нашего сервиса! `,
      ).then((res) => {
        console.log(res);
        toast.success('СМС успешно отправлено!', {
          position: toast.POSITION.TOP_CENTER,
        });
      });
    });

    const newUnassignedOrders = unassignedOrders.filter(
      (order: any) => order.order_number !== orderNumber,
    );
    setUnassignedOrders(newUnassignedOrders);
  };

  return (
    <div className={classes['orders']}>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>{'Номер заказа'}</TableCell>
              <TableCell align='right'>{'ФИО клиента'}</TableCell>
              <TableCell align='right'>{'Название Госуслуги'}</TableCell>
              <TableCell align='right'>{'Адрес ЦОНа(g)'}</TableCell>
              <TableCell align='right'>{'Адрес доставки(g)'}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow key={`${row.order_number}-${Math.floor(Math.random() * 10000) + 1}`}>
                <TableCell component='th' scope='row'>
                  {row.order_number}
                </TableCell>
                <TableCell align='right'>{row.full_name}</TableCell>
                <TableCell align='right'>{row.service_name}</TableCell>
                <TableCell align='right'>{row.tson_address}</TableCell>
                <TableCell align='right'>{row.delivery_address}</TableCell>
                <TableCell align='right'>
                  <Button
                    variant='contained'
                    color='success'
                    onClick={() =>
                      handleAddReqeustClick(row.order_number, row.phoneNumber, row.otp)
                    }
                  >
                    Добавить
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UnassignedOrders;
