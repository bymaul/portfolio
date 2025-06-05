import Anchor from '@/components/ui/anchor';
import Card from '@/components/ui/card';
import Container from '@/components/ui/container';
import GridLayout from '@/components/grid/layout';
import { CustomMDX } from '@/components/ui/mdx';
import { siteConfig } from '@/config/site';
import { getAllProjects } from '@/utils/mdx';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { FaArrowRight, FaX } from 'react-icons/fa6';
import { projectLayouts } from '@/config/grid';
import Image from 'next/image';

type Params = Promise<{ slug: string }>;

export const generateStaticParams = async () => getAllProjects().map((project) => ({ slug: project.slug }));

export const generateMetadata = async ({ params }: { params: Params }) => {
    const { slug } = await params;

    const project = getAllProjects().find((project) => project.slug === slug);
    if (!project) return;

    const { title, description } = project.metadata;

    return {
        title: `${title} — Projects`,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            url: `${siteConfig.url}/projects/${project.slug}`,
            authors: siteConfig.author,
            images: siteConfig.ogImage,
        },
        twitter: {
            title,
            description,
            images: siteConfig.ogImage,
        },
        alternates: {
            canonical: `${siteConfig.url}/projects/${project.slug}`,
        },
    };
};

const ProjectPage = async ({ params }: { params: Params }) => {
    const { slug } = await params;

    const project = getAllProjects().find((project) => project.slug === slug);

    if (!project) notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: project.metadata.title,
        description: project.metadata.description,
        author: [
            {
                '@type': 'Person',
                name: siteConfig.author,
                url: siteConfig.url,
            },
        ],
    };

    return (
        <>
            <Script
                id='json-ld'
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <header className='flex items-center justify-center pt-10'>
                <Anchor className='inline-flex hover:mb-6 hover:scale-125' href='/'>
                    <FaX />
                    <div className='sr-only'>Close</div>
                </Anchor>
            </header>
            <main>
                <Container as='article' className='py-8'>
                    <h1 className='font-pixelify-sans text-3xl leading-relaxed'>{project.metadata.title}</h1>
                    <div className='grid grid-cols-2 gap-10 pb-8 max-md:grid-cols-1'>
                        <div>
                            <p className='text-xl leading-relaxed font-medium'>{project.metadata.description}</p>
                            <div className='flex flex-wrap items-center gap-3 pt-4'>
                                {JSON.parse(project.metadata.links).map((link: { url: string; name: string }) => (
                                    <Anchor
                                        key={link.url}
                                        href={link.url}
                                        target='_blank'
                                        rel='noreferrer nofollow noopener'
                                        className='inline-flex px-5 py-3 text-sm'>
                                        {link.name}
                                        <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                                    </Anchor>
                                ))}
                            </div>
                        </div>
                        <div className='prose dark:prose-invert'>
                            <CustomMDX source={project.content} />
                        </div>
                    </div>
                </Container>
                {project.metadata.images && (
                    <GridLayout layouts={projectLayouts} className='-mt-8 pb-16'>
                        {JSON.parse(project.metadata.images).map((image: { i: string; url: string }) => (
                            <div key={image.i}>
                                <Card className='relative'>
                                    <Image
                                        src={image.url}
                                        alt={project.metadata.title}
                                        fill
                                        objectFit='cover'
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                        draggable='false'
                                    />
                                </Card>
                            </div>
                        ))}
                    </GridLayout>
                )}
            </main>
        </>
    );
};

export default ProjectPage;
