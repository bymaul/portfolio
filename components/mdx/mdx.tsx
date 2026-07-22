import { toKebabCase } from '@/lib/utils';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentPropsWithoutRef, createElement, isValidElement, type ReactNode } from 'react';

type CustomLinkProps = ComponentPropsWithoutRef<'a'>;

function CustomLink({ href, children, ...props }: Readonly<CustomLinkProps>) {
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
    return (
        <Image
            src={props.src}
            alt={props.alt || 'image'}
            className='rounded-lg'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
            draggable='false'
            {...props}
        />
    );
}

function createHeading(level: number) {
    const Heading = ({ children }: { children: ReactNode }) => {
        const extractText = (node: ReactNode): string => {
            if (typeof node === 'string' || typeof node === 'number') {
                return String(node);
            }

            if (Array.isArray(node)) return node.map(extractText).join('');

            if (isValidElement(node)) {
                const element = node as { props: { children: ReactNode } };
                return extractText(element.props.children);
            }

            return '';
        };

        const slug = toKebabCase(extractText(children));

        return createElement(
            `h${level}`,
            { id: slug },
            createElement('a', {
                href: `#${slug}`,
                className: 'anchor',
            }),
            children,
        );
    };

    Heading.displayName = `Heading${level}`;
    return Heading;
}

const components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    img: RoundedImage,
    a: CustomLink,
};

export function CustomMDX({ ...props }) {
    return <MDXRemote {...props} source={props.source} components={{ ...components, ...(props.components || {}) }} />;
}
