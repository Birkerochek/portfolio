import { api } from '@shared/api';
import { cacheLife, cacheTag } from 'next/cache';
import { CardProps } from '../ui/Experience/Card';
import type { MediaType } from '@shared/types';

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
};
export type PetProject = {
  id: number;
  title: string;
  description: string;
  link?: string;
  stack?: string;
  image?: MediaType;
};
export type OtherProject = {
  id: number;
  title: string;
  description: string;
  link?: string;
  stack?: string;
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
  experienceBlock: ExperienceBlock[];
  petProjects: PetProject[];
  otherProjects: OtherProject[];
};
export async function getPage(): Promise<MainPage> {
  'use cache';

  cacheTag('main-page');
  cacheLife('base');
  const { data } = await api.get('/api/main-page', {
      params: {
    populate: {
      heroBlock: true,
      aboutBlock: true,
      approach: true,
      additionalSkills: true,
      experienceBlock: true,
      petProjects: { populate: ['image'] },
      otherProjects: true,
    },
  },
  });

  return data.data;
}
