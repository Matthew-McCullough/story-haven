export interface Story {
  id: string;
  title: string;
  content: string;
  genre: Genre;
  timePeriod: TimePeriod;
  genderPreference: GenderPreference;
  ageGroup: AgeGroup;
  source: string;
  author?: string;
  estimatedReadingTime: number; // in minutes
  hasAudio: boolean;
  hasVideo: boolean;
  tags: string[];
}

export enum Genre {
  FAIRY_TALES = 'fairy-tales',
  FANTASY = 'fantasy',
  SCIENCE_FICTION = 'science-fiction',
  RHYME_STORIES = 'rhyme-stories',
  BIBLICAL_STORIES = 'biblical-stories',
  PICTURE_BOOKS = 'picture-books',
  CHAPTER_BOOKS = 'chapter-books'
}

export enum TimePeriod {
  BIBLICAL = 'biblical',
  ANCIENT = 'ancient',
  MEDIEVAL = 'medieval',
  RENAISSANCE = 'renaissance',
  COLONIAL = 'colonial',
  VICTORIAN = 'victorian',
  EARLY_20TH_CENTURY = 'early-20th-century',
  MID_20TH_CENTURY = 'mid-20th-century',
  MODERN = 'modern',
  CONTEMPORARY = 'contemporary'
}

export enum GenderPreference {
  MALE = 'male',
  FEMALE = 'female',
  NO_PREFERENCE = 'no-preference'
}

export enum AgeGroup {
  TODDLER = 'toddler', // 2-4 years
  PRESCHOOL = 'preschool', // 4-6 years
  EARLY_ELEMENTARY = 'early-elementary', // 6-8 years
  ELEMENTARY = 'elementary', // 8-12 years
  MIDDLE_GRADE = 'middle-grade' // 12+ years
}

export interface VoiceSettings {
  gender: 'male' | 'female';
  rate: number; // 0.1 to 10
  pitch: number; // 0 to 2
  volume: number; // 0 to 1
}

export interface StoryFilters {
  genre?: Genre;
  timePeriod?: TimePeriod;
  genderPreference?: GenderPreference;
  ageGroup?: AgeGroup;
  maxReadingTime?: number;
  hasAudio?: boolean;
  hasVideo?: boolean;
}