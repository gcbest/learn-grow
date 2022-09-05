import {
  AnalyticsIDs,
  AppName,
  ITodayILearnedEventMap,
  UserAnalytics,
} from '@learn-grow/user-analytics';
import { useEffect } from 'react';

function About() {
  useEffect(() => {
    const { analytics } = new UserAnalytics(
      AppName.TODAY_I_LEARNED_STAGING,
      AnalyticsIDs.TODAY_I_LEARNED_STAGING,
    );

    analytics.page();
    analytics.identify('ME', { name: 'gb' });
    analytics.trackEvent<ITodayILearnedEventMap, keyof ITodayILearnedEventMap>(
      'createNote',
      { title: 'test', content: 'testing', isPublic: false },
    );
  }, []);

  return <div>About Me</div>;
}

export default About;
