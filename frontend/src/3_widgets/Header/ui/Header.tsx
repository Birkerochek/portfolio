'use client';
import { LogoIcon } from '@shared/assets';
import styles from './Header.module.scss';
import { Button, Container, Typography } from '@shared/ui';
import { links } from '../model/links';
import { Icon } from '@shared/ui/Icon/Icon';
import Link from 'next/link';
import {  motion } from 'framer-motion';
import { COLORS, PAGES } from '@shared/constants';
import { useEffect, useState } from 'react';
import { MobileHeader } from './MobileHeader';
export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const fVariants = {
    hidden: { y: -100 },
    visible: { y: 0 },
  };
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  

  return (
    <>
      <motion.div
        className={styles.headerWrapper}
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
                <a
                  key={link.id}
                  className={styles.header__navs_nav}
                  href={link.href}
                >
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
          {!isOpen && (

          <Icon
            name="Menu"
            size={24}
            strokeWidth={2}
            color={COLORS.WHITE}
            className={styles.burger}
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          />
          )}
        </Container>
      </motion.div>
      <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
};
