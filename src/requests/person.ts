import axios from 'axios';
import { IOrderData, ListResponse } from '@/ts/types';

export const getDeliveryInfo = (requestId: string, requestIIN: string): Promise<ListResponse> => {
  return axios
    .get(
      `http://89.218.80.61/vshep-api/con-sync-service?requestId=${requestId}&requestIIN=${requestIIN}&token=eyJG6943LMReKj_kqdAVrAiPbpRloAfE1fqp0eVAJ-IChQcV-kv3gW-gBAzWztBEdFY`,
    )
    .then((response) => response.data);
};

export const getPersonInfo = (requestIIN: string) => {
  return axios
    .get(`http://hakaton-fl.gov4c.kz/api/persons/${requestIIN}/`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Authorization: `Bearer ${localStorage.getItem('gov_token')}`,
      },
    })
    .then((response) => response.data);
};

export const getPersonInfoByIIN = (requestIIN: string): Promise<any> => {
  return axios
    .get(`http://127.0.0.1:8000/persons/${requestIIN}/`)
    .then((response) => response.data);
};

export const getPhoneNumber = (requestIIN: string) => {
  return axios
    .get(`http://127.0.0.1:8000/get_phone_number/${requestIIN}/`)
    .then((response) => response.data);
};

export const saveOrder = (orderData: IOrderData) => {
  return axios
    .post('http://127.0.0.1:8000/save_order', orderData)
    .then((response) => response.data);
};

export const getAllOrders = () => {
  return axios.get(`http://127.0.0.1:8000/orders`).then((res) => res.data);
};
