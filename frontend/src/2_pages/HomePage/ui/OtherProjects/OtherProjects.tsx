
import { BlockTitle, Button, Container, Icon } from '@shared/ui';
import { MotionDiv } from '@shared/lib';
import { Project, type ProjectProps } from './Project';
import styles from './OtherProjects.module.scss';
import Link from 'next/link';

type OtherProjectsProps = {
  projects: ProjectProps[];
};

export const OtherProjects = ({
  projects,
}: OtherProjectsProps) => {
  return (
    <Container>
      <MotionDiv>
        <BlockTitle subtitle number={'04'} title="Другие проекты" />
      </MotionDiv>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <MotionDiv key={project.id ?? index} hasScale duration={0.7}>
            <Project {...project} />
          </MotionDiv>
        ))}
      </div>
      <div className={styles.projects__footer}>

        <Link href={'https://github.com/Birkerochek'}>
          <Button variant={'primaryOutline'} label="Посмотреть все проекты" >
            <Icon name="Github" size={18} color="currentColor" />
          </Button>
        
        </Link>
      </div>
       
    </Container>
  );
};
