import Link from 'next/link';
import styles from './NotFoundPage.module.scss';
import { Container, Typography } from '@shared/ui';

export const NotFoundPage = () => {
  return (
    <main className={styles.notFound}>
      <Container className={styles.notFound__container}>
        <div className={styles.notFound__content}>
          <Typography
            as="span"
            className={styles.notFound__badge}
            customStyles
          >
            404
          </Typography>
          <Typography as="h1" variant="h2" className={styles.notFound__title}>
            Страница не найдена
          </Typography>
          <Typography variant="body" color="gray" className={styles.notFound__text}>
            Похоже, адрес неверный или страница была перемещена. Вернитесь на
            главную или напишите мне — помогу найти нужный раздел.
          </Typography>
          <div className={styles.notFound__actions}>
            <Link href="/" className={styles.notFound__primary}>
              На главную
            </Link>
            <a
              href="mailto:roman.solovev.work@gmail.com"
              className={styles.notFound__secondary}
            >
              Написать на почту
            </a>
          </div>
        </div>
        <div className={styles.notFound__card}>
          <Typography variant="h4">Что можно сделать</Typography>
          <ul className={styles.notFound__list}>
            <li className={styles.notFound__listItem}>Проверить адрес в строке браузера</li>
            <li className={styles.notFound__listItem}>
              Посмотреть проекты и кейсы на главной
            </li>
            <li className={styles.notFound__listItem}>Связаться со мной напрямую</li>
          </ul>
        </div>
      </Container>
    </main>
  );
};
