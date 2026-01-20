import { LogoIcon } from '@shared/assets';
import styles from './Header.module.scss'
export const Header = () => {
  return (
    <>
      <LogoIcon />
      <h1 className={styles.titleHeader}>Solovev Portfolio</h1>
    </>
  );
};
