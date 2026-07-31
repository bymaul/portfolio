'use client';

import dynamic from 'next/dynamic';

function MapSkeleton() {
  return (
    <div className="size-full animate-pulse bg-white/40 backdrop-blur-md dark:bg-neutral-900/40" />
  );
}

export default dynamic(() => import('./location-card'), {
  ssr: false,
  loading: MapSkeleton,
});
