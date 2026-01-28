import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    firstP: Schema.Attribute.Text;
    secondP: Schema.Attribute.Text;
    thirdP: Schema.Attribute.Text;
  };
}

export interface AdditionalSkillsAdditionalSkills
  extends Struct.ComponentSchema {
  collectionName: 'components_additional_skills_additional_skills';
  info: {
    displayName: 'additionalSkills';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ApproachApproach extends Struct.ComponentSchema {
  collectionName: 'components_approach_approaches';
  info: {
    displayName: 'Approach';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
  };
  attributes: {
    address: Schema.Attribute.String;
    date: Schema.Attribute.String;
    description: Schema.Attribute.String;
    place: Schema.Attribute.String;
    role: Schema.Attribute.String;
    stack: Schema.Attribute.String;
  };
}

export interface HeroHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heroText: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    surname: Schema.Attribute.String;
  };
}

export interface OtherProjectsOtherProjects extends Struct.ComponentSchema {
  collectionName: 'components_other_projects_other_projects';
  info: {
    displayName: 'Other Projects';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Text;
    stack: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PetProjectsPetProjects extends Struct.ComponentSchema {
  collectionName: 'components_pet_projects_pet_projects';
  info: {
    displayName: 'Pet Projects';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    link: Schema.Attribute.Text;
    stack: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about': AboutAbout;
      'additional-skills.additional-skills': AdditionalSkillsAdditionalSkills;
      'approach.approach': ApproachApproach;
      'experience.experience': ExperienceExperience;
      'hero.hero': HeroHero;
      'other-projects.other-projects': OtherProjectsOtherProjects;
      'pet-projects.pet-projects': PetProjectsPetProjects;
      'skills.skills': SkillsSkills;
    }
  }
}
