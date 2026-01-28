import { motion } from 'framer-motion';
import { Button, Icon, Typography } from '@shared/ui';
import { COLORS } from '@shared/constants';
import styles from './Hero.module.scss';
import { HeroBlock } from '@pages/HomePage/api/getPage';
import Link from 'next/link';
export const HeroLeft = ({ data }: { data: HeroBlock }) => {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <motion.div
      className={styles.hero__left}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Typography fontFamily="mono" color="primary" variant="small">
          FRONTEND DEVELOPER
        </Typography>
      </motion.div>
      <div className={styles.hero_name}>
        <Typography variant="h1">{data.name}</Typography>
        <Typography color="primary" variant="h1">
          {data.surname}
        </Typography>
      </div>
      <Typography
        color="gray"
        className={styles.info}
        style={{ textWrap: 'wrap' }}
      >
        {data.heroText}
      </Typography>
      <div className={styles.hero__links}>
        <Link
          className={styles.hero__links_link}
          href="https://github.com/Birkerochek"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon
            name="Github"
            size={20}
            strokeWidth={1.67}
            color={COLORS.WHITE}
          />
        </Link>

        <Link
          target="_blank"
          rel="noreferrer noopener"
          className={styles.hero__links_link}
          href="https://t.me/romka185"
        >
          <Icon name="Send" size={20} strokeWidth={1.67} color={COLORS.WHITE} />
        </Link>
        <Link
          href={'mailto:roman.solovev.work@gmail.com'}
          className={styles.hero__links_link}
        >
          <Icon name="Mail" size={20} strokeWidth={1.67} color={COLORS.WHITE} />
        </Link>
        <Link href={'tel:+79514569504'} className={styles.hero__links_link}>
          <Icon
            name="Phone"
            size={20}
            strokeWidth={1.67}
            color={COLORS.WHITE}
          />
        </Link>
      </div>
      <div className={styles.hero__btns}>
        <Button
          label="Смотреть проекты"
          size="large"
          variant="primary"
          type="button"
          onClick={() => scrollToSection('pet-projects')}
        />

        <Button
          label="Связаться"
          size="large"
          variant="black"
          type="button"
          onClick={() => scrollToSection('contacts')}
        />
      </div>
    </motion.div>
  );
};
