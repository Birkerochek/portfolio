import { api } from '@shared/api';
import { cacheLife, cacheTag } from 'next/cache';

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
