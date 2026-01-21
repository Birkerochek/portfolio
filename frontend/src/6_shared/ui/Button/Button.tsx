import { FC } from 'react';
import { ButtonProps } from './types';
import styles from './Button.module.scss'
import cn from 'classnames';
export const Button: FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  iconPosition = 'left',
  fullWidth,
  children,
  ...props
}) => {
    const classes = cn(
        styles.button,
        styles[`button__${variant}`],
        styles[`button__size_${size}`],
        {
          [styles.button__fullWidth]: fullWidth,
        }
      );
  return (
    <button className={classes} {...props}>
      {iconPosition === 'left' && children}
      {label && <span >{label}</span>}
      {iconPosition === 'right' && children}
    </button>
  );
};
