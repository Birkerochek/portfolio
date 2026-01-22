import { motion } from 'framer-motion';
import { Typography } from '@shared/ui';
import { Me } from '@shared/assets';
import Image from 'next/image';
import styles from './Hero.module.scss';
export const HeroRight = () => {
  return (
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

  )
}