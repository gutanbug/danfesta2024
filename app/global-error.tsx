'use client';

import { Button } from '@/components/common';
import * as Sentry from '@sentry/nextjs';
import Error from 'next/error';
import { useEffect } from 'react';

export type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh',
            width: '100vw',
            fontSize: '1.5rem',
            color: '#000',
            backgroundColor: '#fff',
          }}
        >
          <h1>오류가 발생했습니다.</h1>
          <p>잠시 후 다시 시도해주세요.</p>
          <Button onClick={reset} animateOnClick>
            새로고침
          </Button>
        </div>
        <Error statusCode={400} />
      </body>
    </html>
  );
}
