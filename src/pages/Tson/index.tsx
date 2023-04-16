import React, { useEffect, useState } from 'react';

import classes from './styles.module.scss';
import { getAllOrders } from '@/requests/person';
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

const Tson = () => {
  const [allOrders, setAllOrders] = useState<any>([]);

  useEffect(() => {
    getAllOrders().then((res) => {
      setAllOrders(res);
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
    return `${allOrders[index]?.recipient_first_name} ${allOrders[index]?.recipient_last_name}`;
  };

  const getFullAddress = (index: number) => {
    return `${allOrders[index]?.delivery_region} область, ${allOrders[index]?.delivery_city} город, ${allOrders[index]?.delivery_street} улица, ${allOrders[index]?.delivery_house_number} дом, ${allOrders[index]?.delivery_entrance_number} подъезд, ${allOrders[index]?.delivery_floor_number} этаж, ${allOrders[index]?.delivery_apartment_number} квартира`;
  };

  const rows = allOrders.map((order: any, ind: number) => {
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

  return (
    <div className={classes['tson']}>
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
                  <Button variant='contained' color='success'>
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

export default Tson;
