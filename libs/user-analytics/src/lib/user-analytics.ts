import Analytics from 'analytics';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import googleAnalytics from '@analytics/google-analytics';
import { AnalyticsIDs, AppName, ITypeSafeAnalyticsInstance } from './types';

export class UserAnalytics {
  analytics: ITypeSafeAnalyticsInstance;
  appName: AppName;

  /* Initialize analytics & load plugins */
  constructor(appName: AppName, measurementIds: AnalyticsIDs) {
    this.appName = appName;
    this.analytics = this.createTypeSafeAnalytics(appName, measurementIds);
  }

  createTypeSafeAnalytics(
    appName: AppName,
    measurementIds: AnalyticsIDs
  ): ITypeSafeAnalyticsInstance {
    const analytics = Analytics({
      app: appName,
      debug: true,
      plugins: [
        googleAnalytics({
          measurementIds,
        }),
      ],
    });

    (analytics as ITypeSafeAnalyticsInstance).trackEvent = this.trackEvent;

    return analytics as ITypeSafeAnalyticsInstance;
  }

  trackEvent = <Type, Key extends keyof Type>(
    eventName: Key,
    eventProps: Type[Key]
  ) => this.analytics.track(eventName as string, eventProps);
}

export * from './types';
