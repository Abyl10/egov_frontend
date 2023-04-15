import React, { InputHTMLAttributes, useRef } from 'react';
// import styles from './styles.module.scss';
import classes from './styles.module.scss';

interface CardPaymentInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  mask?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
}

const CardPaymentInput: React.FC<CardPaymentInputProps> = ({ label, mask, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle the input value change and apply the mask if it's defined
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = inputRef.current;
    if (mask && input) {
      const unmaskedValue = event.target.value.replace(/[^\d]/g, '');
      const maskedValue = mask
        .split('')
        .map((char, i) => (char === '9' ? unmaskedValue.charAt(i) || '' : char))
        .join('');
      input.value = maskedValue;
    }
  };

  return (
    // <div className={styles.cardPaymentInput}>
    <div className={classes['form']}>
      <label className={classes['form__label']} htmlFor={rest.id}>
        {label}
      </label>
      <div className={classes['form__input-wrapper']}>
        <input
          {...rest}
          className={classes['form__input']}
          ref={inputRef}
          onChange={handleValueChange}
        />
      </div>
    </div>
    // </div>
  );
};

export default CardPaymentInput;
