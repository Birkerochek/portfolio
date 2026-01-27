import { Suspense, use } from 'react';
import { getPage } from '../api/getPage';
import { Hero } from './Hero/Hero';
import { ErrorBoundary } from 'react-error-boundary';
import { getSkills } from '../api/getSkills';
import { About } from './About/About';
import styles from './Styles.module.scss';
import { Experience } from './Experience';
export const HomePage = () => {
  const dataPromise = getPage();
  const data = use(dataPromise);
  const heroData = data.heroBlock;
  const aboutText = data.aboutBlock;

  const skillsPromise = getSkills();
  const skillsData = use(skillsPromise);
  const experienceData = data.experienceBlock;
  const aboutData = {
    ...aboutText,
    skillCategories: skillsData,
    approach: data.approach || [],
    additionalSkills: data.additionalSkills || [],
  };

  return (
    <>
      <ErrorBoundary fallback={<div>Ошибка загрузки информации</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Hero heroData={heroData} />
        </Suspense>
      </ErrorBoundary>
      <div className={styles.homePage__section}>
        <ErrorBoundary fallback={<div>Ошибка загрузки информации</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <About aboutData={aboutData} />
          </Suspense>
        </ErrorBoundary>
      </div>
       <div className={styles.homePage__section}>
        <ErrorBoundary fallback={<div>Ошибка загрузки информации</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <Experience experienceData={experienceData} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
};
