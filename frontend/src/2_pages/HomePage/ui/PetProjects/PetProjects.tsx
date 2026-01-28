'use client';
import { BlockTitle, Container } from '@shared/ui';
import { MotionDiv } from '@shared/lib';
import { Project, type ProjectProps } from './Project';
import styles from './PetProjects.module.scss';

type PetProjectsProps = {
  projects: ProjectProps[];
};

export const PetProjects = ({ projects }: PetProjectsProps) => {
  return (
    <Container>
      <MotionDiv>
        <BlockTitle number={'03'} title="Пет-проекты" />
      </MotionDiv>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <MotionDiv key={project.id ?? index} hasScale duration={0.7}>
            <Project {...project} isReversed={index % 2 !== 0} />
          </MotionDiv>
        ))}
      </div>
    </Container>
  );
};
