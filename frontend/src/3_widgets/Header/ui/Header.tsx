'use client';
import { LogoIcon } from '@shared/assets';
import styles from './Header.module.scss';
import { Button, Container, Typography } from '@shared/ui';
import { links } from '../model/links';
import { Icon } from '@shared/ui/Icon/Icon';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PAGES } from '@shared/constants';
export const Header = () => {
  const fVariants = {
    hidden: { y: -100 },
    visible: { y: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      variants={fVariants}
    >
      <Container className={styles.header}>
        <Link href={PAGES.MAIN}>
          <LogoIcon />
        </Link>
        <div className={styles.header__right}>
          <div className={styles.header__navs}>
            {links.map((link) => (
              <a key={link.id} className={styles.header__navs_nav}>
                <Typography
                  fontFamily="mono"
                  color="primary"
                  className={styles.ordinal}
                >
                  {link.ordinal_number}.
                </Typography>
                <Typography className={styles.link}>{link.title}</Typography>
              </a>
            ))}
          </div>
          <Link href={'https://github.com/Birkerochek'}>
            <Button
              label="Github"
              size="small"
              variant="primaryOutline"
              iconPosition="left"
            >
              <Icon name="Github" size={20} strokeWidth={2} />
            </Button>
          </Link>
        </div>
      </Container>
    </motion.div>
  );
};
