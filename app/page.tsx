import { ButtonLink } from '@/components/ButtonLink';
import Image from 'next/image';
import Link from 'next/link';
import {
    BiPaperPlane,
    BiLogoGithub,
    BiLogoLinkedin,
    BiLogoFacebook,
    BiLogoInstagram,
    BiLinkExternal,
    BiDownload,
} from 'react-icons/bi';
import stacks from '@/data/stacks';
import projects from '@/data/projects';

export default function Home() {
    return (
        <main className='max-w-screen-md mx-auto space-y-12 px-4'>
            <section className='pt-12 space-y-12 flex flex-col items-center md:items-start'>
                <div className='relative overflow-hidden inline-block'>
                    <div className='absolute bg-transparent inset-0'></div>
                    <Image
                        src='/images/profile.png'
                        alt='Maulana Ahmad Aji Triadi'
                        width={140}
                        height={140}
                        className='dark:hidden'
                    />
                    <Image
                        src='/images/profile-dark.png'
                        alt='Maulana Ahmad Aji Triadi'
                        width={140}
                        height={140}
                        className='hidden dark:block'
                    />
                </div>
                <div className='text-center md:text-start text-slate-900 dark:text-white'>
                    <h1 className='text-3xl font-bold'>Maulana Ahmad Aji Triadi</h1>
                    <h2>Web Developer</h2>
                </div>
                <h3 className='text-slate-400 text-center md:text-start'>I love tech, web developing, and cats. 🐈</h3>
                <div className='flex flex-wrap justify-center items-center gap-2'>
                    <ButtonLink href='mailto:me@maul.web.id'>
                        <BiPaperPlane />
                        Let&apos;s Talk
                    </ButtonLink>
                    <ButtonLink href='https://github.com/bymaul/' color='secondary' target='_blank'>
                        <BiLogoGithub />
                        Github
                    </ButtonLink>
                    <ButtonLink href='https://linkedin.com/in/maulism' color='secondary' target='_blank'>
                        <BiLogoLinkedin />
                        LinkedIn
                    </ButtonLink>
                </div>
            </section>
            <section>
                <div className='flex justify-between items-center gap-x-4 pb-5'>
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
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-7'>
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className='border border-slate-900 dark:border-slate-200 rounded-xl overflow-hidden relative'
                        >
                            <div className='absolute z-10 bottom-5 left-5'>
                                <Link
                                    href={project.url}
                                    className='py-2 px-4 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg  underline inline-flex gap-x-2 items-center border border-slate-900 dark:border-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-300'
                                    target='_blank'
                                >
                                    <BiLinkExternal />
                                    {project.name}
                                </Link>
                            </div>
                            <div className='absolute z-10 top-5 right-5 left-5'>
                                <div className='flex items-center justify-end gap-2 flex-wrap'>
                                    {project.tags.map((tag, i) => (
                                        <span
                                            className='py-1 px-3 text-xs bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-md border border-slate-900 dark:border-slate-200'
                                            key={i}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <Image
                                src={project.photo ? project.photo : 'https://fakeimg.pl/400x400/?text=Thumbnail'}
                                alt={project.name}
                                width={400}
                                height={400}
                                className='object-cover'
                            />
                        </div>
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
                        <ButtonLink key={i} color='secondary' size='sm' href={stack.slug}>
                            <span>{stack.icon}</span>
                            {stack.name}
                        </ButtonLink>
                    ))}
                </div>
            </section>
            <section>
                <div className='bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 text-slate-900 dark:text-white'>
                    <h2 className='font-semibold'>Have an interesting project in mind? 👋</h2>
                    <p className='py-10'>
                        I am a fresh graduate with a strong passion for learning and a specific interest in web
                        programming. I approach my work with enthusiasm and a high level of commitment to continuous
                        personal and professional growth. I thrive on challenges and view them as opportunities to
                        enhance my skills and knowledge in the field.
                        <br />
                        <br />I am currently in Yogyakarta, Indonesia (UTC+7) 🇮🇩
                    </p>
                    <div className='flex justify-between items-center gap-8 flex-wrap'>
                        <ButtonLink href='mailto:me@maul.web.id' color='primary'>
                            <BiPaperPlane />
                            Hire Me!
                        </ButtonLink>
                        <Link href='/' target='_blank' className='underline inline-flex items-center gap-x-2'>
                            <BiDownload />
                            Download CV
                        </Link>
                    </div>
                </div>
            </section>
            <footer className='justify-center flex items-center flex-col text-slate-900 dark:text-white'>
                <div className='flex justify-center items-center gap-x-8 text-xl'>
                    <Link href='https://facebook.com/maulism' target='_blank'>
                        <BiLogoFacebook />
                    </Link>
                    <Link href='https://instagram.com/mavlism' target='_blank'>
                        <BiLogoInstagram />
                    </Link>
                    <Link href='https://github.com/bymaul/' target='_blank'>
                        <BiLogoLinkedin />
                    </Link>
                    <Link href='https://linkedin.com/in/maulism' target='_blank'>
                        <BiLogoGithub />
                    </Link>
                </div>
                <p className='my-8'>Made with 🍵 by Maulana</p>
            </footer>
        </main>
    );
}
