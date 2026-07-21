import Card from '@/components/ui/card';
import Container from '@/components/ui/container';
import CustomLink from '@/components/ui/custom-link';
import { CustomMDX } from '@/components/mdx/mdx';
import GridLayout from '@/components/shared/grid/layout';
import { siteConfig } from '@/config/site';
import { projectLayouts } from '@/config/grid';
import { getAllProjects } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Image from 'next/image';
import { FaArrowRight, FaX } from 'react-icons/fa6';

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
        twitter: { title, description, images: siteConfig.ogImage },
        alternates: { canonical: `${siteConfig.url}/projects/${project.slug}` },
    };
};

const parseMetaArray = (data: unknown) => {
    if (!data) return [];
    try {
        return typeof data === 'string' ? JSON.parse(data) : data;
    } catch (e) {
        console.error('Failed to parse frontmatter data', e);
        return [];
    }
};

const ProjectPage = async ({ params }: { params: Params }) => {
    const { slug } = await params;
    const project = getAllProjects().find((project) => project.slug === slug);

    if (!project) notFound();

    const links = parseMetaArray(project.metadata.links);
    const images = parseMetaArray(project.metadata.images);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: project.metadata.title,
        description: project.metadata.description,
        author: [{ '@type': 'Person', name: siteConfig.author, url: siteConfig.url }],
    };

    return (
        <>
            <Script
                id='json-ld'
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <header className='sticky top-6 z-50 flex items-center justify-center'>
                <CustomLink className='size-12 rounded-full p-0 shadow-xl backdrop-blur-xl' href='/'>
                    <FaX />
                    <div className='sr-only'>Close</div>
                </CustomLink>
            </header>

            <main>
                <Container as='article' className='py-0 pt-12'>
                    <Card className='h-auto p-8 md:p-12'>
                        <header className='border-b border-neutral-200/50 pb-10 text-center dark:border-white/10'>
                            <h1 className='font-pixelify-sans text-4xl leading-relaxed text-neutral-900 md:text-5xl dark:text-white'>
                                {project.metadata.title}
                            </h1>
                            <p className='mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-neutral-600 dark:text-neutral-300'>
                                {project.metadata.description}
                            </p>

                            {links.length > 0 && (
                                <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
                                    {links.map((link: { url: string; name: string }) => (
                                        <CustomLink
                                            key={link.url}
                                            href={link.url}
                                            target='_blank'
                                            rel='noreferrer nofollow noopener'
                                            className='px-6 py-3 text-sm font-medium'>
                                            {link.name}
                                            <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                                        </CustomLink>
                                    ))}
                                </div>
                            )}
                        </header>

                        <div className='prose prose-neutral prose-lg dark:prose-invert mx-auto max-w-none pt-10'>
                            <CustomMDX source={project.content} />
                        </div>
                    </Card>
                </Container>

                {images.length > 0 && (
                    <GridLayout layouts={projectLayouts} className='pb-20'>
                        {images.map((image: { i: string; url: string }) => (
                            <div key={image.i}>
                                <Card className='relative h-full w-full'>
                                    <Image
                                        src={image.url}
                                        alt={project.metadata.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
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
