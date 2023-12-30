import { allProjects } from '@/.contentlayer/generated';
import Button from '@/components/Button';
import GridLayout from '@/components/Layout/GridLayout';
import { lgLayout } from '@/config/layouts';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowRight, FaX } from 'react-icons/fa6';

interface ProjectProps {
    params: { slug: string };
}

export const generateStaticParams = async () =>
    allProjects.map((project) => ({ slug: project.slug }));

export const generateMetadata = ({ params }: ProjectProps) => {
    const project = allProjects.find((project) => project.slug === params.slug);
    if (!project) return;

    const { title, description, date, url } = project;

    return {
        title: `${title} — Projects`,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime: date,
            url: `${siteConfig.url}${url}`,
            authors: 'Maulana',
            images: siteConfig.image,
        },
        twitter: {
            title,
            description,
            images: siteConfig.image,
        },
        alternates: {
            canonical: `${siteConfig.url}${url}`,
        },
    };
};

const mdxComponents: MDXComponents = {
    a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
    Image: ({ className, alt, ...props }) => (
        <Image className={cn('rounded-lg', className)} alt={alt} {...props} />
    ),
};

const ProjectPage = ({ params }: ProjectProps) => {
    const project = allProjects.find((project) => project.slug === params.slug);

    if (!project) notFound();

    const MDXContent = useMDXComponent(project.body.code);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: project.title,
        description: project.description,
        datePublished: project.date,
        author: [
            {
                '@type': 'Person',
                name: 'Maulana',
                url: siteConfig.url,
            },
        ],
    };

    return (
        <>
            <header className='flex justify-center items-center pb-10'>
                <Button
                    as={Link}
                    className='inline-flex hover:scale-125 hover:mb-6'
                    href='/'>
                    <FaX />
                    <div className='sr-only'>Close</div>
                </Button>
            </header>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <h1 className='text-3xl font-bold leading-relaxed'>
                {project.title}
            </h1>
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
                <div>
                    <p>{project.description}</p>
                    <div className='flex items-center flex-wrap gap-3 pt-4'>
                        {project.links &&
                            project.links?.map(
                                (link: { url: string; name: string }) => (
                                    <Button
                                        key={link.url}
                                        as={Link}
                                        href={link.url}
                                        target='_blank'
                                        rel='noreferrer nofollow noopener'
                                        className='inline-flex py-3 px-5 text-sm'>
                                        {link.name}
                                        <FaArrowRight className='-rotate-45 group-hover:rotate-0 transition-transform duration-300' />
                                    </Button>
                                )
                            )}
                    </div>
                </div>
                <article className='prose dark:prose-invert'>
                    <MDXContent components={mdxComponents} />
                </article>
            </div>
        </>
    );
};

export default ProjectPage;