import { Role } from '@/ts/types';
import React from 'react';
import DelivererTabs from '@/pages/DelivererTabs';
import { DeliveryInfo, Login, Main, Payment } from '@/pages';

type IRoute = {
  name: string;
  path: string;
  component: React.ReactElement;
  roles: Role[];
};

export const ROUTES: IRoute[] = [
  {
    name: 'Main',
    path: '/',
    component: <Main />,
    roles: [Role.CLIENT, Role.ADMIN],
  },
  {
    name: 'DeliveryInfo',
    path: '/delivery-info/:id',
    component: <DeliveryInfo />,
    roles: [Role.CLIENT, Role.ADMIN],
  },
  {
    name: 'Payment',
    path: '/payment',
    component: <Payment />,
    roles: [Role.CLIENT, Role.ADMIN],
  },

  {
    name: 'DelivererOrders',
    path: '/courier-orders',
    component: <DelivererTabs index={0} value={0} />,
    roles: [Role.CLIENT, Role.ADMIN],
  },
  {
    name: 'Login',
    path: '/login',
    component: <Login />,
    roles: [Role.COURIER, Role.TSON, Role.ADMIN, Role.CLIENT],
  },
];
