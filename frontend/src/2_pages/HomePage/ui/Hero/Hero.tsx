'use client';
import { Button, Container, Icon, Typography } from '@shared/ui';
import styles from './Hero.module.scss';
import { COLORS } from '@shared/constants';
import { Me } from '@shared/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <Container className={styles.hero}>
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
          <Typography variant="h1">Роман</Typography>
          <Typography color="primary" variant="h1">
            Соловьев
          </Typography>
        </div>
        <Typography color="gray" className={styles.info}>
          Разработчик с фокусом на React и Next.js. Создаю современные,
          pixel-perfect веб-приложения с акцентом на производительность и UX.
        </Typography>
        <div className={styles.hero__links}>
          <div className={styles.hero__links_link}>
            <Icon
              name="Github"
              size={20}
              strokeWidth={1.67}
              color={COLORS.WHITE}
            />
          </div>
          <div className={styles.hero__links_link}>
            <Icon
              name="Send"
              size={20}
              strokeWidth={1.67}
              color={COLORS.WHITE}
            />
          </div>
          <div className={styles.hero__links_link}>
            <Icon
              name="Mail"
              size={20}
              strokeWidth={1.67}
              color={COLORS.WHITE}
            />
          </div>
          <div className={styles.hero__links_link}>
            <Icon
              name="Phone"
              size={20}
              strokeWidth={1.67}
              color={COLORS.WHITE}
            />
          </div>
        </div>
        <div className={styles.hero__btns}>
          <Button label="Смотреть проекты" size="large" variant="primary" />

          <Button label="Связаться" size="large" variant="black" />
        </div>
      </motion.div>
      <motion.div
        className={styles.hero__right}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
      >
        <div className={styles.hero__right_blob_1}></div>
        <div className={styles.hero__right_blob_2}></div>
        <Image
          className={styles.hero__right_img}
          src={Me}
          alt="me"
          width={316}
          height={316}
        />
        <motion.div
          className={styles.hero__right_tag_left}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div>
            <Typography fontFamily="mono" variant="small">
              React & TypeScript
            </Typography>
          </div>
        </motion.div>
        <motion.div
          className={styles.hero__right_tag_right}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div>
            <Typography fontFamily="mono" variant="small" color="primary">
              ~1 год с Next.js
            </Typography>
          </div>
        </motion.div>
      </motion.div>
      <div></div>
      <motion.div
        className={styles.hero__scroll}
        style={{ x: '-50%' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Typography color="gray" variant="caption">
          SCROLL
        </Typography>
        <Icon name="ChevronDown" size={20} color={COLORS.GRAY_LIGHT} />
      </motion.div>
    </Container>
  );
};
