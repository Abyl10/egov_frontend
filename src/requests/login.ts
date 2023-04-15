import axios from 'axios';

import { Role } from '@/ts/types';

interface IUser {
  first_name: 'string';
  last_name: 'string';
  role: number;
  token: 'string';
}

// role 0 - admin
// role 1 - user
// role 2 - courier
// role 3 - tson
// CLIENT = 'CLIENT',
// ADMIN = 'ADMIN',
// COURIER = 'COURIER',
// TSON = 'TSON',

interface AuthForm {
  iin: string;
  password: string;
}

export const login = (form: AuthForm): Promise<IUser> => {
  return axios
    .post('http://127.0.0.1:8000/login', form, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then((response) => response.data);
};
