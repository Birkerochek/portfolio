'use client';
import { BlockTitle, Container, Typography } from '@shared/ui';
import { motion, useInView } from 'framer-motion';
import { useRef, type CSSProperties } from 'react';
import type { SkillCategory } from '../../api/getSkills';
import type { aboutBlock } from '../../api/getPage';
import styles from './About.module.scss';
import Image from 'next/image';
import { getImageUrl } from '@shared/utils/getImageUrl';
import { useThemeStore } from '@shared/lib';

type AboutData = aboutBlock & { skillCategories: SkillCategory[] };

type AboutProps = {
  aboutData: AboutData;
};

export const About = ({ aboutData }: AboutProps) => {
  const {
    firstP,
    secondP,
    thirdP,
    approach,
    skillCategories,
    additionalSkills,
  } = aboutData;
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const theme = useThemeStore((state) => state.theme);
  return (
    <Container >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView && { opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <BlockTitle title="Обо мне" number={'01'} />
      </motion.div>
      <div className={styles.about} ref={ref}>
        <motion.div
          className={`${styles.cell} ${styles.mainText}`}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView && { opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography variant="body" color="gray">
            {firstP}
          </Typography>
          <Typography variant="body" color="gray">
            {secondP}
          </Typography>
          <Typography variant="body" color="gray">
            {thirdP}
          </Typography>
        </motion.div>
        <div className={`${styles.cell} ${styles.approach}`}>
          <motion.div
            className={styles.approachLabel}
            initial={{ opacity: 0 }}
            animate={isInView && { opacity: 1}}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Typography variant="body" color="gray">
              МОЙ ПОДХОД
            </Typography>
          </motion.div>
          {approach.map((item, i) => (
            <motion.div
              className={styles.approach__item}
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView && { opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
            >
              <div className={styles.approach__item_left}>
                <Typography variant="body" color="primary" fontFamily="mono">
                  0{i + 1}.
                </Typography>
              </div>
              <div className={styles.approach__item_right}>
                <Typography variant="body">{item.title}</Typography>
                <Typography variant="body" color="gray">
                  {item.text}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className={`${styles.cell} ${styles.keySkills}`}
          initial={{ opacity: 0, }}
          animate={isInView && { opacity: 1, }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className={styles.keySkillsTitle}
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Typography variant="h4">Ключевые навыки</Typography>
          </motion.div>
          {skillCategories.map((skillCategory, i) => {
            const url = getImageUrl(skillCategory.icon?.url);

            return (
              <motion.div
                className={`${styles.subcell} ${styles.keySkills__skill}`}
                style={
                  {
                    backgroundColor: skillCategory.color,
                    '--skill-color': skillCategory.color,
                  } as CSSProperties
                }
                key={skillCategory.id}
                initial={{ opacity: 0,  scale: 0.95 }}
                animate={isInView && { opacity: 1,  scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              >
                <div className={styles.keySkills__skill__top}>
                  <div className={styles.keySkills__skill__top_iconBg}>
                    {url && (
                      <Image
                        src={url}
                        alt={skillCategory.title}
                        width={skillCategory.icon?.width || 20}
                        height={skillCategory.icon?.height || 20}
                      />
                    )}
                  </div>

                  <Typography
                    variant="body"
                    className={styles.keySkills__skill_title}
                    color={theme === 'dark' ? 'white' : 'black'}
                  >
                    {skillCategory.title}
                  </Typography>
                </div>
                <div className={styles.keySkills__skill__bottom}>
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.id}
                      className={styles.keySkills__skill__bottom_tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView && { opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.7 + i * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <Typography
                        className={styles.keySkills__skill__bottom_tag_text}
                        variant="small"
                        color="gray"
                      >
                        {skill.title}
                      </Typography>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          className={`${styles.cell} ${styles.extraSkills}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          <Typography variant="body" color="gray">
            ДОПОЛНИТЕЛЬНЫЕ НАВЫКИ
          </Typography>
          <div className={styles.extraSkills__items}>
            {additionalSkills.map((item, index) => (
              <motion.div
                className={styles.extraSkills__items_item}
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView && { opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
              >
                <Typography variant="body">{item.title}</Typography>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Container>
  );
};
