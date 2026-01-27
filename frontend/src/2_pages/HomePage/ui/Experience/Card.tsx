import { FC } from 'react';
import s from './Styles.module.scss';
import { Icon, Typography } from '@shared/ui';
import { COLORS } from '@shared/constants';

export interface CardProps {
    date: string;
    role: string;
    place: string;
    address: string;
    description: string;
    stack: string;
}

export const Card: FC<CardProps> = ({ date, role, place, address, description, stack }) => {
    if (!stack) return undefined;
    const stackItems = stack.split(',');

  return (
    <div className={s.card}>
      <div className={s.card__top}>
        <div className={s.card__top_date}>
            <Icon name={'Calendar'} size='16' color={COLORS.PRIMARY}/>
            <Typography fontFamily='mono' variant='caption'>{date}</Typography>
        </div>
        <Typography variant='h4'>{role}</Typography>
        <div className={s.card__top_place}>
            <div className={s.card__top_place_item}>
            <Icon name={'Briefcase'} size='16' color={COLORS.PRIMARY}/>
            <Typography className={s.card_company}  color='primary'>{place}</Typography>

            </div>
            <Typography color='gray'>•</Typography>
            <div className={s.card__top_place_item}>
            <Icon name={'MapPin'} size='16' color={COLORS.GRAY_LIGHT}/>
            <Typography className={s.card_company}  variant='small' color='gray'>{address}</Typography>
            </div>
        </div>
      </div>
      <Typography color='gray'>{description}</Typography>
        <div className={s.card__bottom}>
            {stackItems.map((item, i) => (
                <div key={i} className={s.card__bottom_tag}>
                    <Typography className={s.card_tagText}  variant='caption' fontFamily='mono' color='primary'>{item}</Typography>
                </div>
            ))}
        </div>
   
    </div>
  )
}