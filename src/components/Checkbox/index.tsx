import React, { FC, HTMLProps } from 'react';
import classes from './styles.module.scss';

interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  checked?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ checked = false, ...rest }) => {
  return (
    <label className={classes['checkbox']}>
      <input type='checkbox' className={classes['input']} checked={checked} {...rest} />
      <span className={classes['checkmark']}></span>
    </label>
  );
};

export default Checkbox;
