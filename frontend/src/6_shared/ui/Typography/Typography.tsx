import { FC } from 'react';
import { TypographyProps } from './types';
import styles from './Typography.module.scss';
import cn from 'classnames';
export const Typography: FC<TypographyProps> = ({
  as = 'p',
  variant = 'body',
  color = 'primary',
  children,
  className,
  customStyles = false,
  ...props
}) => {
  const Component = as as React.ElementType;
  const classes = customStyles
    ? className
    : cn(
        styles.typography,
        styles[`typography--${variant}`],
        styles[`typography--color-${color}`],
        className
      );
  return (
    <>
      <Component className={classes} {...props}>
        {children}
      </Component>
    </>
  );
};
