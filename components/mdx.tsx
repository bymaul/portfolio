import { toKebabCase } from '@/lib/utils';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { createElement } from 'react';

function CustomLink({ ...props }) {
    let href = props.href;

    if (href.startsWith('/')) {
        return (
            <Link href={href} {...props}>
                {props.children}
            </Link>
        );
    }

    if (href.startsWith('#')) {
        return <a {...props} />;
    }

    return <a target='_blank' rel='noopener noreferrer' {...props} />;
}

function RoundedImage({ ...props }) {
    return (
        <Image
            src={props.src}
            alt={props.alt}
            className='rounded-lg'
            {...props}
        />
    );
}

function createHeading(level: number) {
    const Heading = ({ children }: { children: string }) => {
        let slug = toKebabCase(children);
        return createElement(
            `h${level}`,
            { id: slug },
            [
                createElement('a', {
                    href: `#${slug}`,
                    key: `link-${slug}`,
                    className: 'anchor',
                }),
            ],
            children
        );
    };

    Heading.displayName = `Heading${level}`;

    return Heading;
}

let components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    Image: RoundedImage,
    a: CustomLink,
};

export function CustomMDX({ ...props }) {
    return (
        <MDXRemote
            {...props}
            source={props.source}
            components={{ ...components, ...(props.components || {}) }}
        />
    );
}
