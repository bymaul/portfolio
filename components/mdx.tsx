import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';

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

let components = {
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
