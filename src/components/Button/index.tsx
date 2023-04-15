import React from 'react';

import classes from './styles.module.scss';

interface IProps {
  text: string;
  onClick: () => void;

}

const Button : React.FC<IProps> = ({text, onClick}) => {
  return (
    <button className={classes['button']} onClick={onClick}>
      <p className={classes['button__text']}>{text}</p>
    </button>
  )
}

export default Button;