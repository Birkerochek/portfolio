'use client';

import styles from './Footer.module.scss';
import { Container, Icon, Typography } from '@shared/ui';

const FOOTER_LINKS = [
  { id: 'github', icon: 'Github', href: 'https://github.com/Birkerochek' },
  { id: 'telegram', icon: 'Send', href: 'https://t.me/romka185' },
  { id: 'email', icon: 'Mail', href: 'mailto:roman.solove.work@gmail.com' },
] as const;

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footer__container}>
        <div className={styles.footer__icons}>
          {FOOTER_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={styles.footer__iconLink}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={item.id}
            >
              <Icon name={item.icon} size={16} className={styles.footer__icon} />
            </a>
          ))}
        </div>
        <div className={styles.footer__meta}>
          <Typography variant="caption" color="gray">
            Создано с Next.js, TypeScript и SCSS
          </Typography>
          <Typography variant="caption" color="gray">
            © 2026 Роман Соловьев. Все права защищены.
          </Typography>
        </div>
      </Container>
    </footer>
  );
};
