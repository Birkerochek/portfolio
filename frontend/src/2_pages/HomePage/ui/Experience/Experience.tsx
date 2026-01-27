'use client';
import { BlockTitle, Container } from '@shared/ui';
import { Card, CardProps } from './Card';
import s from './Styles.module.scss';
import { MotionDiv } from '@shared/lib';
export const Experience = ({
  experienceData,
}: {
  experienceData: CardProps[];
}) => {

  return (
    <Container>
      <MotionDiv>
        <BlockTitle number={'02'} title="Опыт работы" />
      </MotionDiv>
      <div className={s.timeline}>
        {experienceData.map((item, i) => (
          <div key={i} className={s.timeline__row}>
            <MotionDiv
             hasScale
             duration={0.8}
              className={`${s.timeline__col} ${s.timeline__col_left}`}
            >
              {i % 2 === 0 && (
                <div className={s.timeline__card}>
                  <Card {...item} />
                </div>
              )}
            </MotionDiv>
            <div className={s.timeline__center}>
              <span className={s.timeline__dot} />
            </div>
            <MotionDiv
            
              hasScale
              duration={1}
              className={`${s.timeline__col} ${s.timeline__col_right}`}
            >
              {i % 2 != 0 && (
                <div className={s.timeline__card}>
                  <Card {...item} />
                </div>
              )}
            </MotionDiv>
          </div>
        ))}
      </div>
    </Container>
  );
};
