import React, { useState } from 'react';

import LoginLogo from '../../assets/icons/login.svg';

import classes from './styles.module.scss';
import { Button, Input } from '@/components';

interface IAuthForm {
  iin: string;
  password: string;
}

const Login = () => {
  const [authForm, setAuthForm] = useState<IAuthForm>({
    iin: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    return;
  };

  return (
    <div className={classes['login']}>
      <div className={classes['login__wrapper']}>
        <div className={classes['login__left']}>
          <p className={classes['login__delivery']}>Доставка документов</p>
          <h2 className={classes['login__enter-header']}>Войдите в систему</h2>
          <p className={classes['login__info']}>
            Для входа используйте ИИН сотрудника и пароль, который вам выдали
          </p>
          <div className={classes['u-margin-bottom-md']}>
            <Input
              name={'iin'}
              onChange={handleChange}
              label={'ИИН'}
              value={authForm.iin}
              // placeholder={'1234123412341234'}
            />
          </div>
          <div className={classes['u-margin-bottom-md']}>
            <Input
              name={'password'}
              onChange={handleChange}
              label={'Пароль'}
              value={authForm.password}
              type={'password'}
              // placeholder={'123456789'}
            />
          </div>
          <Button onClick={handleSubmit} text={'Войти'} />
        </div>
        <div className={classes['login__right']}>
          <img src={LoginLogo} alt={'login'} className={classes['login__img']} />
        </div>
      </div>
    </div>
  );
};

export default Login;
