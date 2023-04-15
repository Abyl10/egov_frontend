import { DeliveryInfo, Main } from '@/pages';
import React from 'react';

export enum Role {
  CLIENT = 'CLIENT',
  ADMIN = 'ADMIN',
  COURIER = 'COURIER',
  TSON = 'TSON',
}

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
];