'use client';

import { Container, Icon, Typography } from '@shared/ui';
import styles from './Contact.module.scss';

const CONTACT_ITEMS = [
  {
    id: 'telegram',
    label: 'Telegram',
    value: '@romka185',
    href: 'https://t.me/romka185',
    icon: 'Send',
  },
  {
    id: 'email',
    label: 'Email',
    value: 'roman.solovev.work@gmail.com',
    href: 'mailto:roman.solovev.work@gmail.com',
    icon: 'Mail',
  },
  {
    id: 'phone',
    label: 'Телефон',
    value: '+7 (951) 456-95-04',
    href: 'tel:+79514569504',
    icon: 'Phone',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'Birkerochek',
    href: 'https://github.com/Birkerochek',
    icon: 'Github',
  },
] as const;

export const Contact = () => {
  return (
    <Container>
      <section className={styles.contact}>
        <Typography
          className={styles.contact__eyebrow}
          variant="small"
          fontFamily="mono"
          color="primary"
        >
          04. Что дальше?
        </Typography>
        <Typography className={styles.contact__title} variant="h2">
          Связаться со мной
        </Typography>
        <Typography className={styles.contact__subtitle} variant="body" color="gray">
          Открыт к новым проектам и возможностям. Если у вас есть интересное
          предложение или вы просто хотите поздороваться — напишите мне!
        </Typography>
        <div className={styles.contact__cards}>
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.id}
              className={styles.card}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={`${item.label}: ${item.value}`}
            >
              <div className={styles.card__iconWrap}>
                <Icon name={item.icon} size={18} className={styles.card__icon} />
              </div>
              <div className={styles.card__content}>
                <Typography variant="caption" color="gray">
                  {item.label}
                </Typography>
                <Typography variant="body">{item.value}</Typography>
              </div>
            </a>
          ))}
        </div>
        <div className={styles.contact__location}>
          <Icon name="MapPin" size={16} className={styles.contact__locationIcon} />
          <Typography variant="small" color="gray">
            Челябинск, Россия
          </Typography>
        </div>
      </section>
    </Container>
  );
};
