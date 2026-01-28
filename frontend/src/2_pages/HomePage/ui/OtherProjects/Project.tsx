import { FC } from 'react';
import { ProjectProps as PetProjectProps } from '../PetProjects/Project';
import { Icon, Typography } from '@shared/ui';
import { COLORS } from '@shared/constants';
import styles from './OtherProjects.module.scss';

export type ProjectProps = Omit<PetProjectProps, 'image' | 'isReversed'>;

export const Project: FC<ProjectProps> = ({
  title,
  description,
  link,
  stack,
}) => {
  const stackItems = stack
    ? stack
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  return (
    <div className={styles.project}>
      <div className={styles.project__head}>
        <span className={styles.project__folder}>
          <Icon name="Folder" size={28} color={COLORS.PRIMARY} />
        </span>
        {link && (
          <a
            className={styles.project__link}
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`${title} repository`}
          >
            <Icon name="Github" size={18} color="currentColor" />
          </a>
        )}
      </div>
      <Typography className={styles.project__title} variant="h4">
        {title}
      </Typography>
      <Typography
        className={styles.project__description}
        color="gray"
        variant="small"
      >
        {description}
      </Typography>
      {stackItems.length > 0 && (
        <div className={styles.project__stack}>
          {stackItems.map((item, index) => (
            <Typography
              key={`${item}-${index}`}
              variant="small"
              fontFamily="mono"
              color="gray"
              className={styles.project__stack_item}
            >
              {item}
            </Typography>
          ))}
        </div>
      )}
    </div>
  );
};
