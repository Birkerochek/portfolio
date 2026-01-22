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
      'hero.hero': HeroHero;
      'skills.skills': SkillsSkills;
    }
  }
}
