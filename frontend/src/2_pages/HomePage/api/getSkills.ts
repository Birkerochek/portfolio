import { api } from '@shared/api';
import { cacheLife, cacheTag } from 'next/cache';

export type SkillCategory = {
  id: string;
  title: string;
  color: string;
  icon?: {
    id: string;

    url: string;

    width: number | null;
    height: number | null;
  };
  skills: {
    id: string;
    title: string;
  }[];
};
export async function getSkills(): Promise<SkillCategory[]> {
  'use cache';

  cacheTag('skills');
  cacheLife('base');
  const { data } = await api.get('/api/skill-categories', {
    params: {
      populate: {
        icon: {
          fields: ['url', 'width', 'height'],
        },
        skills: {
          fields: ['title'],
        },
      },
    },
  });

  return data.data;
}
