import { FC } from 'react';
import styles from './Styles.module.scss';
import { Typography } from '../Typography/Typography';

type BlockTitleProps = {
  title: string;
  number: string | number;
}
export const BlockTitle: FC<BlockTitleProps> = ({
  title,
  number,
}) => {
  return (
    <div className={styles.blockTitle}>
      <Typography fontFamily='mono' variant='body' color='primary'>{number}.</Typography>
      <Typography variant='h2' style={{textWrap: 'nowrap'}}>{title}</Typography>
      <div className={styles.blockTitle_line}></div>
    </div>
  )
}