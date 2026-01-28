import React, { PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './Container.module.scss';

interface ContainerProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({ children, className, style }) => {
  return <div className={cn(styles.container, className)} style={style}>{children}</div>;
};
