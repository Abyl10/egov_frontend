import axios from 'axios';

export const sendSMS = (phone: string, smsText: string) => {
  return axios
    .post(`http://127.0.0.1:8000/send_sms`, {
      phone,
      smsText,
    })
    .then((res) => {
      return res.data;
    });
};

export const checkOtp = (order_number: string, otp: string) => {
  return axios
    .post(`http://127.0.0.1:8000/check_otp?order_number=${order_number}&otp=${otp}`)
    .then((res) => {
      return res.data;
    });
};
