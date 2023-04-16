import React, { useState, useEffect } from 'react';

import classes from './styles.module.scss';
import { assignCourier, getUnassignedOrders } from '@/requests/courier';
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

const UnassignedOrders = () => {
  const [unassignedOrders, setUnassignedOrders] = useState<any>([]);
  const { user } = useUserContext();
  useEffect(() => {
    getUnassignedOrders().then((res) => {
      setUnassignedOrders(res);
    });
  }, []);

  function createData(
    order_number: string,
    full_name: string,
    service_name: string,
    tson_address: string,
    delivery_address: string,
  ) {
    return { order_number, full_name, service_name, tson_address, delivery_address };
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
    );
  });

  const handleAddReqeustClick = (orderNumber: string) => {
    assignCourier(orderNumber, user?.id).then((res) => {
      toast.success('Order assigned successfully!', {
        position: toast.POSITION.TOP_CENTER,
      });
    });
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
              <TableRow key={row.order_number}>
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
                    onClick={() => handleAddReqeustClick(row.order_number)}
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
