import { api } from '@shared/api';
import { cacheLife, cacheTag } from 'next/cache';
import { CardProps } from '../ui/Experience/Card';

export type HeroBlock = {
  heroText: string;
  name: string;
  surname: string;
};
export type aboutBlock = {
  firstP: string;
  secondP: string;
  thirdP: string;
  approach: {
    id: number;
    title: string;
    text: string;
  }[];
   additionalSkills: {
    id: number;
    title: string;
  }[];
};
type ExperienceBlock = CardProps & {
  id: number;
}
export type MainPage = {
  id: string;
  heroBlock: HeroBlock;
  aboutBlock: aboutBlock;
  approach: {
    id: number;
    title: string;
    text: string;
  }[];
  additionalSkills: {
    id: number;
    title: string;
  }[];
  experienceBlock: ExperienceBlock[];
};
export async function getPage(): Promise<MainPage> {
  'use cache';
  
  cacheTag('main-page');
  cacheLife('base');
  const { data } = await api.get('/api/main-page', {
    params: { populate: '*' },
  });

  return data.data;
}
