import profile from '@/public/images/profile.jpg';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import Card from '@/components/ui/card';

export default function DescriptionCard() {
  return (
    <Card className="group flex flex-col justify-center gap-4 p-8 hover:bg-white/50 dark:hover:bg-white/5">
      <div className="relative size-14 overflow-hidden rounded-full shadow-lg ring-2 ring-white/50 transition-transform group-hover:scale-105 sm:size-16 dark:ring-white/10">
        <Image
          src={profile}
          alt={siteConfig.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          priority
        />
      </div>
      <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
        Hi, I&apos;m{' '}
        <span className="font-pixelify-sans text-2xl font-bold text-neutral-900 dark:text-white">
          Maulana
        </span>
        , a software developer from Yogyakarta, Indonesia.{' '}
        <span className="hidden md:inline">
          I love building reliable software and learning new things.
        </span>
      </p>
    </Card>
  );
}
