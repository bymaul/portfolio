import Image from 'next/image';
import Link from 'next/link';
import profile from '@/public/images/profile.png';
import { BiPaperPlane, BiLogoGithub, BiLogoLinkedin, BiLinkExternal } from 'react-icons/bi';
import { ButtonLink } from '@/components/ButtonLink';
import ProjectCard from '@/components/ProjectCard';
import stacks from '@/data/stacks';
import projects from '@/data/projects';

export default function Home() {
    return (
        <main className='max-w-screen-md mx-auto space-y-12 px-4'>
            <section className='pt-12 space-y-12 flex flex-col items-center md:items-start'>
                <Image src={profile} alt='Maulana Ahmad Aji Triadi' width={140} height={140} priority quality={100} />
                <div className='text-center md:text-start text-slate-900 dark:text-white'>
                    <h1 className='text-3xl font-bold'>Maulana Ahmad Aji Triadi</h1>
                    <h2>Web Developer</h2>
                </div>
                <h3 className='text-slate-400 text-center md:text-start'>I love tech, web developing, and cats.</h3>
                <div className='flex flex-wrap justify-center items-center gap-3'>
                    <ButtonLink href='mailto:maulanaajk@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <BiPaperPlane />
                        Let&apos;s Talk
                    </ButtonLink>
                    <ButtonLink
                        href='https://github.com/bymaul/'
                        color='secondary'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <BiLogoGithub />
                        Github
                    </ButtonLink>
                    <ButtonLink
                        href='https://linkedin.com/in/maulism'
                        color='secondary'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <BiLogoLinkedin />
                        LinkedIn
                    </ButtonLink>
                </div>
            </section>
            <section>
                <div className='flex justify-between items-center gap-x-6 pb-5'>
                    <div>
                        <h2 className='font-semibold text-2xl text-slate-900 dark:text-white leading-relaxed'>
                            My Projects
                        </h2>
                        <p className='text-sm text-slate-400'>
                            Explore some of the projects I&apos;ve been recently working in.
                        </p>
                    </div>
                    <Link
                        href='/projects'
                        className='underline text-slate-900 dark:text-white whitespace-nowrap inline-flex items-center gap-x-2'
                    >
                        <BiLinkExternal />
                        View All
                    </Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-7'>
                    {projects.slice(0, 2).map((project, i) => (
                        <ProjectCard
                            key={i}
                            name={project.name}
                            url={project.url}
                            image={project.image}
                            placeholder={project.placeholder}
                        />
                    ))}
                </div>
            </section>
            <section>
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
