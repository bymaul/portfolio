import Container from '@/components/ui/container';
import { siteConfig } from '@/config/site';
import { getAllPosts, getAllProjects } from '@/lib/mdx';
import GridRouter from '@/components/shared/grid/grid-router';

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Main({ searchParams }: Props) {
    const resolvedParams = await searchParams;
    const view = (resolvedParams.view as string) || 'home';

    const posts = getAllPosts().map((post) => ({
        slug: post.slug,
        metadata: post.metadata,
    }));

    const projects = getAllProjects().map((project) => ({
        slug: project.slug,
        metadata: project.metadata,
    }));

    return (
        <>
            <Container as='header' className='flex items-center justify-between py-0'>
                <h1 className='hidden'>{siteConfig.title}</h1>
            </Container>
            <main className='py-8'>
                <GridRouter view={view} posts={posts} projects={projects} />
            </main>
        </>
    );
}
