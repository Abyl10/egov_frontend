import axios from 'axios';

export const getMyDelivers = (id: number) => {
  return axios.get(`http://127.0.0.1:8000/courier/${id}/orders`).then((res) => res.data);
};

export const getUnassignedOrders = () => {
  return axios.get(`http://127.0.0.1:8000/unassigned_orders`).then((res) => res.data);
};

export const assignCourier = (order_number: string, courier_id: number) => {
  return axios
    .post(`http://127.0.0.1:8000/assign_courier`, { order_number, courier_id })
    .then((res) => res.data);
};
