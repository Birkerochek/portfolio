import { getImageUrl, type MediaLike } from '@shared/utils';
import { Icon, Typography } from '@shared/ui';
import { COLORS } from '@shared/constants';
import Image from 'next/image';
import { FC } from 'react';
import styles from './PetProjects.module.scss';

export interface ProjectProps {
  id?: number | string;
  title: string;
  description: string;
  link?: string;
  image?: MediaLike;
  stack?: string;
  isReversed?: boolean;
}

export const Project: FC<ProjectProps> = ({
  title,
  description,
  link,
  image,
  stack,
  isReversed = false,
}) => {
  const imageUrl = getImageUrl(image);
  const stackItems = stack
    ? stack.split(',').map((item) => item.trim()).filter(Boolean)
    : [];
  console.log(imageUrl)
  return (
    <div
      className={`${styles.project} ${isReversed ? styles.project_reverse : ''}`}
    >
      <div className={styles.project__media}>
        {imageUrl ? (
          <Image
            className={styles.project__image}
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 900px) 100vw, 60vw"
          />
        ) : (
          <div className={styles.project__placeholder}>
            <Typography variant="small" color="gray" fontFamily="mono">
              Preview
            </Typography>
          </div>
        )}
      </div>
      <div className={styles.project__content}>
      
        <Typography className={styles.project__title} variant="h3">
          {title}
        </Typography>
        <div className={styles.project__description}>
          <Typography color="gray">{description}</Typography>
        </div>
        <div className={styles.project__meta}>
          <div className={styles.project__stack}>
            {stackItems.map((item, index) => 
            
            (
              
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
          {link && 
          (

           <a
              className={styles.project__link}
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} repository`}
            >
              <Icon name="Github" size={18} color={COLORS.GRAY_LIGHT} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
