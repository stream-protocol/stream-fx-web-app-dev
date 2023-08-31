import * as Sentry from '@sentry/node';

export const sentryInit = () => {
  Sentry.init({
    dsn: "https://1baf6053c751962065b28cee69ab4faf@o1252019.ingest.sentry.io/4505793571651584",
    tracesSampleRate: 1.0,
  });
}