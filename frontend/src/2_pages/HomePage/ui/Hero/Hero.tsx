'use client';
import {  Container, } from '@shared/ui';
import styles from './Hero.module.scss';
import { HeroLeft } from './HeroLeft';
import { HeroRight } from './HeroRight';
import { HeroScroll } from './HeroScroll';
import { HeroBlock  } from '@pages/HomePage/api/getPage';

export const Hero = ({heroData}: {heroData: HeroBlock}) => {
  
  
  return (
    <Container className={styles.hero}>
     <HeroLeft data={heroData}/>
     <HeroRight/>
     <HeroScroll/>
    </Container>
  );
};
