import { AnimatePresence, motion } from "framer-motion"
import styles from './Header.module.scss';
import { Button,  Icon, Typography } from '@shared/ui';
import { COLORS } from "@shared/constants";
import { links } from "../model/links";
import Link from "next/link";
export const MobileHeader = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const closeMenu = () => setIsOpen(false);
  return (
          <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={styles.mobileBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.div
              id="mobile-menu"
              className={styles.mobileCont}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className={styles.mobileWrapper}>

              <div className={styles.mobileTop}>
                <Icon
                  name="X"
                  size={24}
                  strokeWidth={2}
                  color={COLORS.WHITE}
                  className={styles.mobileClose}
                  onClick={closeMenu}
                />
              </div>
              <div className={styles.mobileNavs}>
                {links.map((link) => (
                  <a
                    key={link.id}
                    className={styles.mobileNavs_item}
                    onClick={closeMenu}
                  >
                    <Typography
                      fontFamily="mono"
                      color="primary"
                      className={styles.ordinal}
                    >
                      {link.ordinal_number}.
                    </Typography>
                    <Typography className={styles.link}>
                      {link.title}
                    </Typography>
                  </a>
                ))}
              </div>
              <Link href={'https://github.com/Birkerochek'}>
                <Button
                  label="Github"
                  size="small"
                  variant="primaryOutline"
                  iconPosition="left"
                  fullWidth
                  onClick={closeMenu}
                >
                  <Icon name="Github" size={20} strokeWidth={2} />
                </Button>
              </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

  )
}