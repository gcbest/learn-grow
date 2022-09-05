import { AnalyticsInstance } from 'analytics';

export enum AnalyticsIDs {
  TODAY_I_LEARNED_STAGING = '328122732',
}

export enum AppName {
  TODAY_I_LEARNED_STAGING = 'TODAY_I_LEARNED_STAGING',
  DAILY_MASTERMIND_STAGING = 'DAILY_MASTERMIND_STAGING',
}

/// Today I Learned ///
interface ICreateNoteEventProps {
  title: string;
  content: string;
  isPublic: boolean;
}

export interface ITodayILearnedEventMap {
  createNote: ICreateNoteEventProps;
}

/// Daily Mastermind ///
interface ICreateTaskEventProps {
  title: string;
  details: string;
}

export interface IDailyMastermindEventMap {
  createTask: ICreateTaskEventProps;
}

export interface ITypeSafeAnalyticsInstance extends AnalyticsInstance {
  trackEvent: <Type, Key extends keyof Type>(
    eventName: Key,
    eventProps: Type[Key]
  ) => Promise<unknown>;
}
