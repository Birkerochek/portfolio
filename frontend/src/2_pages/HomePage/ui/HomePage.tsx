import { Suspense, use } from 'react';
import { getPage } from '../api/getPage';
import { Hero } from './Hero/Hero';
import { ErrorBoundary } from 'react-error-boundary';
import { getSkills } from '../api/getSkills';
import { About } from './About/About';
import styles from './Styles.module.scss';
import { Experience } from './Experience';
import { PetProjects } from './PetProjects';
import { OtherProjects } from './OtherProjects';
import { Contact } from './Contact/Contact';
export const HomePage = () => {
  const dataPromise = getPage();
  const data = use(dataPromise);
  const heroData = data.heroBlock;
  const aboutText = data.aboutBlock;

  const skillsPromise = getSkills();
  const skillsData = use(skillsPromise);
  const experienceData = data.experienceBlock;
  const petProjects = data.petProjects || [];
  const otherProjects = data.otherProjects || [];
  const aboutData = {
    ...aboutText,
    skillCategories: skillsData,
    approach: data.approach || [],
    additionalSkills: data.additionalSkills || [],
  };

  return (
    <>
      <ErrorBoundary fallback={<div>Произошла ошибка загрузки</div>}>
          <Hero heroData={heroData} />
      </ErrorBoundary>
      <div id="about">
        <ErrorBoundary fallback={<div>Произошла ошибка при загрузке информации обо мне</div>}>
            <About aboutData={aboutData} />
        </ErrorBoundary>
      </div>
      <div className={styles.homePage__section} id="experience">
        <ErrorBoundary fallback={<div>Произошла ошибка при загрузке опыта</div>}>
            <Experience experienceData={experienceData} />
        </ErrorBoundary>
      </div>
      <div className={styles.homePage__section} id="pet-projects">
        <ErrorBoundary fallback={<div>Произошла ошибка при загрузке проектов</div>}>
            <PetProjects projects={petProjects} />
        </ErrorBoundary>
      </div>
      <div className={styles.homePage__section}>
        <ErrorBoundary fallback={<div>Произошла ошибка при загрузке проектов</div>}>
            <OtherProjects
              projects={otherProjects}
              
            />
          
        </ErrorBoundary>
      </div>
      <div className={styles.homePage__section} id="contacts">
        <Contact />
      </div>
    </>
  );
};


