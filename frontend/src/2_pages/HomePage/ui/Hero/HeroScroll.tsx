import { motion } from 'framer-motion';
import { Typography } from '@shared/ui';
import { COLORS } from '@shared/constants';
import styles from './Hero.module.scss';
import { Icon } from '@shared/ui';
export const HeroScroll = () => {
  return (
    <motion.div
     initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
    >
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
    </motion.div>
  );
};
