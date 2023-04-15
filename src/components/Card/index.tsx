import React from 'react';
import classes from './styles.module.scss';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div  className={classes['card']}>
      <div className={classes['card-body']}>
        {children}
      </div>
    </div>
  );
};

export default Card;
