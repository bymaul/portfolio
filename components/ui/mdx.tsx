import { toKebabCase } from '@/utils/lib';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentPropsWithoutRef, createElement } from 'react';

type AnchorProps = ComponentPropsWithoutRef<'a'>;

function Anchor({ href, children, ...props }: Readonly<AnchorProps>) {
    const className = 'text-blue-500 hover:text-blue-700';

    if (href?.startsWith('/')) {
        return (
            <Link href={href} className={className} {...props}>
                {children}
            </Link>
        );
    }

    if (href?.startsWith('#')) {
        return (
            <a href={href} className={className} {...props}>
                {children}
            </a>
        );
    }

    return (
        <a href={href} target='_blank' rel='noopener noreferrer' className={className} {...props}>
            {children}
        </a>
    );
}

function RoundedImage({ ...props }) {
    return <Image src={props.src} alt={props.alt} className='rounded-lg' draggable='false' {...props} />;
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
    a: Anchor,
};

export function CustomMDX({ ...props }) {
    return <MDXRemote {...props} source={props.source} components={{ ...components, ...(props.components || {}) }} />;
}
