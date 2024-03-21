import ToastProvider from '../components/common/toast/toast-provider';
import NextTopLoader from 'nextjs-toploader';
import { CookiesProvider } from 'next-client-cookies/server';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

type ProvidersProps = Readonly<{
  children: React.ReactNode;
}>;

export default function Providers({ children }: ProvidersProps) {
  return (
    <CookiesProvider>
      <ToastProvider>
        <SpeedInsights />
        <Analytics />
        <NextTopLoader color='#0262E9' showSpinner={false} shadow={false} />
        {children}
      </ToastProvider>
    </CookiesProvider>
  );
}
