/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from 'react';
import EyeIcon from '@/assets/icons/eye.svg';
import EyeOff from '@/assets/icons/eye-off.svg';

import classes from './styles.module.scss';

interface IProps {
  label?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
}

const Input: React.FC<IProps> = ({
  label,
  type = 'text',
  onChange,
  name,
  value,
  disabled,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleEyeIconClick = () => {
    if (inputRef.current) {
      inputRef.current.type = inputRef.current.type === 'text' ? 'password' : 'text';
      setShowPassword(inputRef.current?.type === 'text');
    }
  };

  return (
    <div className={classes['form']}>
      <label className={classes['form__label']} htmlFor={label}>
        {label}
      </label>
      <div className={classes['form__input-wrapper']}>
        <input
          className={classes['form__input']}
          id={label}
          name={name}
          onChange={onChange}
          ref={inputRef}
          type={type}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
        />
      </div>
      {type === 'password' && (
        <div className={classes['icon']}>
          <img
            alt={'eye icon'}
            onClick={handleEyeIconClick}
            src={showPassword ? EyeOff : EyeIcon}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
