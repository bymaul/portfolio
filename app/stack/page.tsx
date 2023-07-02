import { ButtonLink } from '@/components/ButtonLink';
import stacks from '@/data/stacks';
import React from 'react';

export default function Stack() {
    return (
        <main className='max-w-screen-md mx-auto space-y-12 px-4'>
            <section className='py-14'>
                <div className='pb-5'>
                    <h2 className='font-semibold text-2xl text-slate-900 dark:text-white leading-relaxed'>My Stack</h2>
                    <p className='text-sm text-slate-400'>Discover the technologies I work with.</p>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-3'>
                    {stacks.map((stack, i) => (
                        <ButtonLink key={i} color='secondary' size='sm' href={`/stack/${stack.slug}`}>
                            <span>{stack.icon}</span>
                            {stack.name}
                        </ButtonLink>
                    ))}
                </div>
            </section>
        </main>
    );
}
