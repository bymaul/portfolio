import { notFound } from 'next/navigation';

import projects from '@/data/projects';
import stacks from '@/data/stacks';

type StackProps = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams() {
    return stacks.map((stack) => ({
        slug: stack.slug,
    }));
}

async function getProjects(slug: string) {
    const project = projects.find((c) => c.name === slug);

    return project;
}

export default async function Stack({ params: { slug } }: StackProps) {
    const projects = await getProjects(slug);
    if (!projects) {
        notFound();
    }

    return (
        <main>
            <h1>{projects.name}</h1>
            <p>{projects.tags}</p>
        </main>
    );
}
